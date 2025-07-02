import Hero from '../components/Hero';
import WhySection from '../components/WhySection';
import CreationsSection from '../components/CreationsSection';
import CurriculumSection from '../components/CurriculumSection';
import ToolsSection from '../components/ToolsSection';
import MentorsSection from '../components/MentorsSection';
import WhoIsThisForSection from '../components/WhoIsThisForSection';
import WhatsInsideSection from '../components/WhatsInsideSection';
import TracksSection from '../components/TracksSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <CreationsSection />
      <CurriculumSection />
      <ToolsSection />
      <MentorsSection />
      <WhoIsThisForSection />
      <WhatsInsideSection />
      <TracksSection />
      <CTASection />
    </>
  );
}
