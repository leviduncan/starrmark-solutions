import { DarkCTA } from "@/components/dark-cta";
import { Hero } from "@/components/hero";
import { ImportantDisclosure } from "@/components/important-disclosure";
import { Pillars } from "@/components/pillars";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { StatsRow } from "@/components/stats-row";
import { TrustHeading } from "@/components/trust-heading";

export default function Home() {
  return (
    <>
      <SiteNav />
      <Hero />
      <Pillars />
      <StatsRow />
      <TrustHeading />
      <Services />
      <section className="bg-paper pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <ImportantDisclosure />
        </div>
      </section>
      <DarkCTA />
      <SiteFooter />
    </>
  );
}
