# EZ-ZAHRAOUI IT SERVICES — Website

Professional website for EZ-ZAHRAOUI IT SERVICES, an IT infrastructure services company based in Tangier, Morocco.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — build tool
- **Tailwind CSS 3** — styling
- **Lucide React** — icons
- **React Router DOM 6** — client-side routing

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── layout/     # Header, Footer, Layout
│   ├── ui/         # Button, Section, Card, SEO, etc.
│   └── home/       # Homepage-specific sections
├── data/           # Centralized content (services, projects)
├── pages/          # Route-level page components
└── types/          # Shared TypeScript interfaces
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your details:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_CONTACT_ENDPOINT` | Backend endpoint for the contact form |
| `VITE_WHATSAPP_NUMBER` | WhatsApp number (digits only) |
| `VITE_PHONE_NUMBER` | Display phone number |
| `VITE_EMAIL_ADDRESS` | Contact email address |

## Contact Form

The contact form currently validates on the frontend and shows a success state. To connect it to a real backend or email service:

1. Set `VITE_CONTACT_ENDPOINT` in your `.env` file
2. Update the `handleSubmit` function in `src/pages/ContactPage.tsx` to POST to your endpoint

## License

Private — All rights reserved.
