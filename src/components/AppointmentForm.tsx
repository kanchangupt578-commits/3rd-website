import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';

export default function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="section-padding bg-warm-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">
        {/* Info Side */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl font-bold text-primary mb-8 leading-tight">
              Ready for a<br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8">Better Smile?</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Fill out the form to request a consultation. Our clinical staff will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-primary">Responsive Booking</p>
                  <p className="text-sm text-slate-500">Appointments available next-day for emergencies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-bold text-primary">Free Consultation</p>
                  <p className="text-sm text-slate-500">Complimentary initial checkup for Invisalign.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-primary/5 border border-slate-100"
          >
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 scale-125">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4 font-serif">Request Sent!</h3>
                <p className="text-slate-500 max-w-sm mx-auto">
                  Thank you for reaching out. A SmileCare representative will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        required 
                        type="tel" 
                        placeholder="+91 99999 99999" 
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        required 
                        type="date" 
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <select 
                        required
                        className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-lg appearance-none"
                      >
                        <option value="">Select Time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Case Details (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-slate-400" size={20} />
                    <textarea 
                      placeholder="Tell us about your dental concern..." 
                      className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all text-lg min-h-[150px]"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-accent text-white py-5 rounded-[2rem] font-bold text-xl shadow-xl shadow-accent/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Confirm Request
                  <Send size={24} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
