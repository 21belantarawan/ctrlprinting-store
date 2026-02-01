import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import CategoryCards from '@/components/CategoryCards';
import HardwareSection from '@/components/HardwareSection';
import LocationSection from '@/components/LocationSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 md:pt-24 pb-8 px-4 max-w-7xl mx-auto page-transition">
        <HeroSection />
        <StatsSection />
        <CategoryCards />
        <HardwareSection />
        <LocationSection />
      </main>
    </div>
  );
};

export default Index;
