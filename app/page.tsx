import { CommitmentsSection } from "@/components/CommitmentsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { Navbar } from "@/components/Navbar";
import { PainPointSection } from "@/components/PainPointSection";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { TrendsSection } from "@/components/TrendsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainPointSection />
        <TrendsSection />
        <SolutionsSection />
        <CommitmentsSection />
        <PricingSection />
        <ProcessSection />
        <ProjectsSection />
        <LeadFormSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
