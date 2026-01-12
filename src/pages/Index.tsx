import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expectations from "@/components/Expectations";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Expectations />
        <HowItWorks />
        <Plans />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
