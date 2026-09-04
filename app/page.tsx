
import Heros from "./components/heros";
import MortgageCalculator from "./components/MortgageCalculator";
import WhatWeDo from "./components/WhatWeDo";
import Faq from "./components/faq";
import Whatioffer from "./components/Whatioffer";
import LoanPrograms from "./components/LoanPrograms";
import Journey from "./components/journey";
import Blog from "./components/blog";

export default function Page() {
  return (
    <main>
      <Heros />
      <Whatioffer/>
      <Blog/>
      <LoanPrograms/>
      <WhatWeDo />
      <MortgageCalculator />
      <Journey/>
      <Faq />
    </main>
  );
}
