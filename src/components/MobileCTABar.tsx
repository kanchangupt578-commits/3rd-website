import { Phone, MessageCircle } from 'lucide-react';

export default function MobileCTABar() {
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-3 flex gap-3 border border-white/50">
        <a 
          href="tel:+919876543210"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl font-bold active:scale-95 transition-all shadow-lg shadow-primary/20"
        >
          <Phone size={20} />
          Call Now
        </a>
        <a 
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 rounded-xl font-bold active:scale-95 transition-all shadow-lg shadow-emerald-600/20"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
