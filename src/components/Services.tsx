import { motion } from 'motion/react';
import { 
  Sparkles, 
  Stethoscope, 
  ShieldCheck, 
  Smile, 
  Zap,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: 'Teeth Cleaning',
    description: 'Professional cleaning and polishing to remove plaque and tartar for a brighter smile.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Implants',
    description: 'Permanent solutions for missing teeth with high-quality biocompatible dental implants.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Invisalign',
    description: 'Clear aligners to straighten your teeth discretely without the discomfort of braces.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Root Canal',
    description: 'Save your natural teeth with our advanced, painless endodontic treatment.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Whitening',
    description: 'Professional in-office whitening treatments for instant, long-lasting results.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-warm-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-4">What We Offer</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-6">Premium Dental Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-8 text-slate-600 max-w-2xl mx-auto text-lg">
              We provide a wide range of dental treatments tailored to your unique needs using the latest technology.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full active:scale-95"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-accent shadow-lg">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <a href="#appointment" className="text-accent font-bold flex items-center gap-2 group/btn">
                    Learn More 
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-accent rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white shadow-xl shadow-accent/20"
          >
            <h3 className="font-serif text-3xl font-bold mb-4">Not sure what you need?</h3>
            <p className="opacity-90 mb-8 max-w-xs">
              Book a free consultation session with Dr. Arjun Mehta today.
            </p>
            <a 
              href="#appointment"
              className="w-full bg-white text-accent py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-lg shadow-white/10"
            >
              Consult Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
