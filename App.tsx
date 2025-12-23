import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MarketingFunnel from './components/MarketingFunnel';
import Cases from './components/Cases';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-accent selection:text-brand-black">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="services" className="py-24 px-6 md:px-12">
          <Services />
        </section>

        <section id="funnel" className="py-24 px-6 md:px-12 bg-brand-gray/30">
          <MarketingFunnel />
        </section>

        <section id="cases" className="py-24 px-6 md:px-12">
          <Cases />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 bg-brand-accent text-brand-black">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;