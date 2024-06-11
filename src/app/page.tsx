import FeauturedCourses from "@/components/FeauturedCourses";
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-black/[0.02]">  
  <HeroSection />
  <FeauturedCourses/>
  </main>
  );
}
