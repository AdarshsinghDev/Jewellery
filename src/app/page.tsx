import Navigation          from "@/components/layout/Navigation";
import Footer              from "@/components/layout/Footer";
import Hero                from "@/components/sections/Hero";
import Manifesto           from "@/components/sections/Manifesto";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import EditorialSpread     from "@/components/sections/EditorialSpread";
import ProductGrid         from "@/components/sections/ProductGrid";
import CraftsmanshipSection from "@/components/sections/CraftsmanshipSection";
import ArchiveSection      from "@/components/sections/ArchiveSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BespokeSection      from "@/components/sections/BespokeSection";
import NewsletterSection   from "@/components/sections/NewsletterSection";
import CursorWrapper       from "@/components/ui/CursorWrapper";

export default function Home() {
  return (
    <>
      <CursorWrapper />
      <Navigation />
      <Hero />
      <Manifesto />
      <FeaturedCollections />
      <EditorialSpread />
      <ProductGrid />
      <CraftsmanshipSection />
      <ArchiveSection />
      <TestimonialsSection />
      <BespokeSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
