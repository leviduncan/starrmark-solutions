import { DarkCTA } from "@/components/dark-cta";
import { Hero } from "@/components/hero";
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
      <TrustHeading />
      <StatsRow />
      <Services />
      <DarkCTA />
      <SiteFooter />
    </>
  );
}
