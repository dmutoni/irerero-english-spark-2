
import Hero from '../components/Hero';
import Features from '../components/Features';
import DownloadCTA from '../components/DownloadCTA';
import Mission from '../components/Mission';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Mission />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
