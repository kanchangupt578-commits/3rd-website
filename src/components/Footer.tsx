import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-24 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent/20">
                S
              </div>
              <span className="font-serif text-2xl font-bold">SmileCare</span>
            </a>
            <p className="text-white/60 leading-relaxed text-lg italic">
              "Redefining healthcare with a focus on trust, technology, and patient comfort."
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Dr. Mehta</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Treatments</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Operating Hours</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex justify-between"><span>Mon - Fri</span> <span className="font-bold text-white">9 AM - 8 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span className="font-bold text-white">10 AM - 6 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-emerald-400 font-bold">Closed</span></li>
              <li className="pt-4 text-sm italic">Emergency support available on call.</li>
            </ul>
          </div>

          <div className="flex flex-col justify-between items-start">
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Newsletter</h4>
              <p className="text-sm text-white/60 mb-4 font-medium uppercase">Get dental health tips.</p>
              <div className="flex gap-2 w-full">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button className="bg-accent text-white p-3 rounded-xl hover:bg-accent/90 transition-all">
                  →
                </button>
              </div>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="mt-12 group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all"
            >
              Back to top 
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                <ArrowUp size={16} />
              </div>
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
