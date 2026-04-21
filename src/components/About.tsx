import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, HeartPulse } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: Award, label: "Board Certified", text: "Expert Orthodontist MDS" },
    { icon: Users, label: "Patients First", text: "Personalized Care Plans" },
    { icon: HeartPulse, label: "Modern Tech", text: "Digital Painless Dentistry" }
  ];

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dr. Arjun Mehta"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-accent text-white p-6 rounded-3xl shadow-2xl z-20 max-w-[200px]">
                <p className="font-serif text-3xl font-bold leading-none mb-1">15+</p>
                <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Years of Dentistry Excellence</p>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl z-0" />
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-4">Meet Your Dentist</span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold mb-8">
                Dr. Arjun Mehta <br />
                <span className="text-2xl text-slate-400 font-sans font-medium">(BDS, MDS - Orthodontist)</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                "My mission is to provide high-quality dental care in a comfortable and friendly environment. I believe that every patient deserves a healthy, beautiful smile that builds confidence."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  "Advanced Orthodontic Solutions",
                  "Minimal Invasive Dentistry",
                  "Pediatric Specialist Care",
                  "Emergency Dental Support",
                  "24/7 Online Consultation",
                  "Post-Treatment Support"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {highlights.map((h) => (
                  <div key={h.label} className="bg-slate-50 p-6 rounded-3xl flex items-center gap-6 border border-slate-100 hover:border-accent/30 transition-all group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                      <h.icon size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">{h.label}</p>
                      <p className="text-sm text-slate-500 font-medium">{h.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
