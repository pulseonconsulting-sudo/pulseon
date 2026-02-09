
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-navy-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Let's Secure Your <span className="text-sky-500">ROI</span>.</h1>
            <p className="text-xl text-slate-400">
              Ready to transition from promotional spending to clinical intelligence? Our consultants are ready to audit your current digital stack.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8">Get In Touch</h2>
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500 shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">info@pulseon.com.bd</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500 shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600">+880 1700 000000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500 shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Office Location</h4>
                    <p className="text-slate-600">Banani, Dhaka - 1213, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4 italic">"Pharma SEO is a clinical authority system, not just marketing."</h4>
                <p className="text-slate-500">— Pulseon Consulting Philosophy</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              {isSuccess ? (
                <div className="text-center py-20 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h3>
                  <p className="text-slate-600 mb-8">One of our pharmacist consultants will reach out to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-sky-500 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-black text-slate-900 mb-8">Request an Authority Audit</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr. Shafiur Rahman"
                          className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-sky-500 outline-none transition-all`}
                        />
                        {errors.name && <p className="text-xs text-red-500 font-bold">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Work Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@pharma-co.com"
                          className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-sky-500 outline-none transition-all`}
                        />
                        {errors.email && <p className="text-xs text-red-500 font-bold">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Company Name *</label>
                        <input 
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="ABC Pharmaceuticals"
                          className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.company ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-sky-500 outline-none transition-all`}
                        />
                        {errors.company && <p className="text-xs text-red-500 font-bold">{errors.company}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Phone Number</label>
                        <input 
                          type="text" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+880 1XXX-XXXXXX"
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Inquiry Details *</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your current MR tracking or doctor engagement challenges..."
                        className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-sky-500 outline-none transition-all resize-none`}
                      ></textarea>
                      {errors.message && <p className="text-xs text-red-500 font-bold">{errors.message}</p>}
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-sky-500 text-white font-black py-5 rounded-xl hover:bg-sky-600 transition-all shadow-xl shadow-sky-500/20 active:scale-95 flex items-center justify-center disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : (
                        <>
                          Request Confidential Audit <Send size={20} className="ml-3" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
