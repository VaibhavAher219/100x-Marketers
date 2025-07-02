import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhySection from '@/components/WhySection'
import CreationsSection from '@/components/CreationsSection'
import CurriculumSection from '@/components/CurriculumSection'
import ToolsSection from '@/components/ToolsSection'
import MentorsSection from '@/components/MentorsSection'
import TracksSection from '@/components/TracksSection'
import WhoIsThisForSection from '@/components/WhoIsThisForSection'
import WhatsInsideSection from '@/components/WhatsInsideSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhySection />
      <CreationsSection />
      <CurriculumSection />
      <ToolsSection />
      <MentorsSection />
      <TracksSection />
      <WhoIsThisForSection />
      <WhatsInsideSection />
      <CTASection />
      <Footer />
    </main>
  )
}
