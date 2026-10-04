import SEO from '../components/ui/SEO'
import Hero from '../components/home/Hero'
import Challenges from '../components/home/Challenges'
import ServicesPreview from '../components/home/ServicesPreview'
import ProcessPreview from '../components/home/ProcessPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ProjectHighlight from '../components/home/ProjectHighlight'
import FinalCTA from '../components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <SEO
        title="EZ-ZAHRAOUI IT SERVICES | Installation and IT support in Tangier"
        description="EZ-ZAHRAOUI IT SERVICES supports SMEs in Tangier with the installation, configuration, security, and maintenance of their computers, networks, and IT tools."
      />
      <Hero />
      <Challenges />
      <ServicesPreview />
      <ProcessPreview />
      <WhyChooseUs />
      <ProjectHighlight />
      <FinalCTA />
    </>
  )
}
