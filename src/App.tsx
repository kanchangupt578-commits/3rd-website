import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileCTABar from './components/MobileCTABar';

export default function App() {
  return (
    <main className="min-h-screen bg-warm-bg font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      
      <div className="relative z-20">
        <About />
        <Services />
        <Testimonials />
        <AppointmentForm />
        <ContactSection />
        <Footer />
      </div>

      <MobileCTABar />
    </main>
  );
}

