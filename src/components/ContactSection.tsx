import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-4">Location & Contact</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-10 leading-tight">Visit Our Clinic in <br />New Delhi</h2>
            
            <div className="space-y-8 mb-12">
              <a 
                href="https://goo.gl/maps/placeholder" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-xl text-primary mb-1 flex items-center gap-2">
                    Address <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    SmileCare Dental Clinic, 42, Green Park Main, <br />Hauz Khas, New Delhi - 110016
                  </p>
                </div>
              </a>

              <div className="flex flex-col md:flex-row gap-8">
                <a href="tel:+919876543210" className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-primary mb-1">Call Us</p>
                    <p className="text-slate-600 text-lg">+91 98765 43210</p>
                  </div>
                </a>
                
                <a href="mailto:contact@smilecareclinic.com" className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-primary mb-1">Email Us</p>
                    <p className="text-slate-600 text-lg">contact@smilecare.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className="w-14 h-14 rounded-2xl border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:border-accent hover:text-accent transition-all hover:-translate-y-1"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Map Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-slate-50 relative group shadow-2xl"
          >
            <div className="absolute inset-0 bg-slate-200 animate-pulse group-hover:hidden" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.921381387602!2d77.1994073!3d28.554668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2702ed4d209%3A0x6b5a308ef06be1!2sHauz%20Khas%2C%20Enclave%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
              className="relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
