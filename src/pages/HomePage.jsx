
import FormSection from "../components/homePage/Form/FormSection";
import Hero from "../components/homePage/hero/Hero";
import Partners from "../components/homePage/partners/Partners";
import StartInfo from "../components/homePage/startInfo/StartInfo";
import Stats from "../components/homePage/stats/Stats";
import Values from "../components/homePage/values/Values";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <StartInfo />
      <Values />
      <Partners />
      <FormSection/>
    </>
  );
}
