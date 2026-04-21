import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Priya Sharma",
    role: "IT Professional",
    text: "Dr. Mehta is amazing! I was terrified of root canals, but the procedure was completely painless. The clinic's hygiene standards are top-notch.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Rahul Khanna",
    role: "Businessman",
    text: "Got my Invisalign treatment here. The digital scanning process was so quick and the results are already visible after just 3 months. Highly recommend!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=rahul"
  },
  {
    name: "Anjali Gupta",
    role: "Lawyer",
    text: "The best dental experience I've had. Very transparent about pricing and treatment options. The staff is extremely professional and caring.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=anjali"
  },
  {
    name: "Vikram Bose",
    role: "Student",
    text: "Awesome experience for teeth whitening. My smile looks brand new. Very affordable and quick service. Dr. Arjun is truly an expert.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=vikram"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-4">Patient Experiences</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold">What Our Patients <br /> Are Saying</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20"
          >
            <div className="flex -space-x-4">
              {reviews.map((r, i) => (
                <img 
                  key={i} 
                  src={r.avatar} 
                  alt="Avatar" 
                  className="w-12 h-12 rounded-full border-4 border-primary object-cover" 
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <p className="font-bold text-xl">4.9/5</p>
              <p className="text-xs text-white/60 uppercase tracking-widest">Average Google Rating</p>
            </div>
          </motion.div>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto pb-12 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85vw] md:min-w-0 bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative flex flex-col snap-center hover:bg-white/10 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 text-accent/20" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#0d9488" className="text-accent" />
                ))}
              </div>
              
              <p className="text-lg leading-relaxed mb-10 opacity-90 italic">
                "{review.text}"
              </p>
              
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-2xl object-cover grayscale brightness-125"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-sm text-white/60">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
