
import React from 'react';
import { Target, Shield, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 py-32 text-white relative">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/about/1920/1080')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">We Build the Nervous System of <span className="text-sky-500">Pharma Growth</span>.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Pulseon Consulting was founded to bridge the gap between complex pharmaceutical regulations and high-performance digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex p-3 bg-sky-100 text-sky-600 rounded-2xl mb-6">
                <Target size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To empower pharma companies in Bangladesh with data-backed authority and precision marketing tools that respect medical ethics while maximizing commercial ROI.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that every Taka of promotional spend should be traceable to either a clinician's educational growth or a verifiable prescription increase.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Founded', val: '2024', icon: Award },
                { label: 'Systems Deployed', val: '12+', icon: Shield },
                { label: 'HCP Engagement', val: '50k+', icon: Users },
                { label: 'Consultants', val: '15+', icon: Target },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center hover:border-sky-500 transition-colors">
                  <div className="text-sky-500 mb-4 flex justify-center"><stat.icon size={24} /></div>
                  <div className="text-3xl font-black text-slate-900 mb-1">{stat.val}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacist-Led Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="flex-1 z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-8">The Pharmacist Edge</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Unlike generic agencies, we are led by professionals with degrees in Pharmacy. We don't just understand "keywords"; we understand pharmacokinetics, drug interactions, and the professional burden of doctors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 text-sky-400 font-bold">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Regulatory Deep-Dive</span>
                </div>
                <div className="flex items-center space-x-3 text-sky-400 font-bold">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span>Clinical Terminology Mastery</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img 
                src="https://picsum.photos/seed/pharmacist/400/500" 
                alt="Expert Team" 
                className="rounded-3xl shadow-2xl rotate-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sky-500 font-bold tracking-widest text-sm mb-3 uppercase">IDEAL PARTNER</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-16">Who We Work With</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Top Tier Pharma', desc: 'Established giants looking to modernize their field force and digital presence.' },
              { title: 'Growing Biotech', desc: 'Agile companies needing precision clinical SEO to compete with giants.' },
              { title: 'Medical Device Firms', desc: 'B2B specialists requiring complex CME and engagement tracking.' }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                <h4 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
