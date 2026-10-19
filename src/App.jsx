import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Sobre from './components/Sobre';
import OQueFazemos from './components/OQueFazemos';
import ComoFunciona from './components/ComoFunciona';
import Numeros from './components/Numeros';
import Projetos from './components/Projetos';
import Equipe from './components/Equipe';
import Contato from './components/Contato';
import Footer from './components/Footer';
import SectionFade from './components/SectionFade';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <SectionFade from="gold-white" />
        <Sobre />
        <SectionFade from="white-black" />
        <OQueFazemos />
        <SectionFade from="black-white" />
        <ComoFunciona />
        <SectionFade from="white-black" />
        <Numeros />
        <SectionFade from="black-white" />
        <Projetos />
        <SectionFade from="white-black" />
        <Equipe />
        <SectionFade from="black-white" />
        <Contato />
        <SectionFade from="white-black" />
      </main>
      <Footer />
    </>
  );
}
