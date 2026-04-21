import { motion } from 'motion/react';
import { Calendar, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28a3a7c4d45e?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent md:bg-gradient-to-r md:from-primary/80 md:via-primary/40 md:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 py-12 md:py-24">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-accent text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Premier Dental Experience
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Your Smile,<br />
              <span className="text-accent-light">Our Priority.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed max-w-lg opacity-90">
              Experience painless dentistry with Dr. Arjun Mehta. Using state-of-the-art technology for your family's oral health in New Delhi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#appointment"
                className="group flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-accent/30 hover:bg-accent/90 transition-all active:scale-95"
              >
                <Calendar size={22} />
                Book Free Consultation
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all active:scale-95"
              >
                Our Services
                <ChevronRight size={20} />
              </a>
            </div>

            <div className="mt-12 flex gap-8 items-center pt-8 border-t border-white/20">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">15+</span>
                <span className="text-xs uppercase tracking-widest text-slate-300">Years Exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">10k+</span>
                <span className="text-xs uppercase tracking-widest text-slate-300">Happy Patients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">4.9/5</span>
                <span className="text-xs uppercase tracking-widest text-slate-300">Smile Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
