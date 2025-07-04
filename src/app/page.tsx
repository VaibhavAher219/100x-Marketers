import Header from '../components/Header';
import Hero from '../components/Hero';
import WhySection from '../components/WhySection';
import CurriculumSection from '../components/CurriculumSection';
import CreationsSection from '../components/CreationsSection';
import ToolsSection from '../components/ToolsSection';
import MentorsSection from '../components/MentorsSection';
import WhoIsThisForSection from '../components/WhoIsThisForSection';
import WhatsInsideSection from '../components/WhatsInsideSection';
import TracksSection from '../components/TracksSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <WhySection />
      <CurriculumSection />
      <CreationsSection />
      <ToolsSection />
      <MentorsSection />
      <WhoIsThisForSection />
      <WhatsInsideSection />
      <TracksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
