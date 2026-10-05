# Deploys the production build to the gh-pages branch (GitHub Pages).
# Usage: powershell -ExecutionPolicy Bypass -File .\deploy.ps1

$ErrorActionPreference = "Stop"

$repo = "salaheddine-ezzahraoui/ez-zahraoui-it-services"
$src = $PSScriptRoot
$tmp = Join-Path $env:TEMP "opencode\gh-pages-deploy"
$siteUrl = "https://salaheddine-ezzahraoui.github.io/ez-zahraoui-it-services/"

Write-Host "1/4 Building the site..."
Push-Location $src
npm run build
if ($LASTEXITCODE -ne 0) { Pop-Location; throw "Build failed" }

Write-Host "2/4 Preparing the gh-pages branch..."
if (Test-Path $tmp) { Remove-Item $tmp -Recurse -Force }
git clone --depth 1 --branch main "https://github.com/$repo.git" $tmp
if ($LASTEXITCODE -ne 0) { Pop-Location; throw "Clone failed" }
Push-Location $tmp
if (-not (git config user.name)) {
  git config user.name "Salaheddine Ez-Zahraoui"
  git config user.email "salaheddine.ezzahraoui1@gmail.com"
}
git checkout --orphan gh-pages
git rm -rf . | Out-Null
Get-ChildItem -Force (Join-Path $src "dist") | Copy-Item -Destination $tmp -Recurse -Force
Set-Content -Path (Join-Path $tmp ".nojekyll") -Value ""
git add -A
git commit -m "Deploy site to GitHub Pages"
if ($LASTEXITCODE -ne 0) { Pop-Location; Pop-Location; throw "Commit failed" }

Write-Host "3/4 Pushing to GitHub..."
git push -f origin gh-pages
if ($LASTEXITCODE -ne 0) { Pop-Location; Pop-Location; throw "Push failed" }
Pop-Location
Pop-Location

Write-Host "4/4 Deployed. GitHub Pages updates within about a minute:"
Write-Host "    $siteUrl"
