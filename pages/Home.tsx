
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Target, Search } from 'lucide-react';
import { SERVICES, PAIN_POINTS, DIFFERENTIATORS, ICON_MAP } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-navy-900 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_50%)]"></div>
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-8 animate-fade-in">
              <Zap size={16} className="mr-2" /> 
              PHARMA DIGITAL ROI SYSTEMS
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
              From Promotional Spend to <br />
              <span className="text-sky-500">Revenue Intelligence</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              Pulseon Consulting builds compliance-first doctor engagement, CME intelligence, and MR tracking systems for pharma companies in Bangladesh. Stop guessing, start governing.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center">
                Book Authority Audit <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/services" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
                Explore Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-500 font-bold tracking-widest text-sm mb-3">THE REALITY</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Why Conventional Pharma <br className="hidden md:block"/> Marketing is Failing</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Most digital attempts in Bangladesh pharma lack clinical authority and tracking intelligence, leading to wasted resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PAIN_POINTS.map((point, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-500/30 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                  <X size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h4>
                <p className="text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paradigm Shift Section */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-sky-500 font-bold text-lg mb-4">THE PARADIGM SHIFT</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Pharma SEO is <span className="text-red-500 italic">NOT</span> Marketing. <br />
                It is a <span className="text-sky-500 underline decoration-sky-500/30 underline-offset-8">Clinical Authority System</span>.
              </h3>
              <p className="text-xl text-slate-400 mb-10">
                In a regulated industry, visibility without verified authority is a liability. We build systems that satisfy both medical regulatory bodies and doctor expectations for precision content.
              </p>
              <div className="space-y-4">
                {['Clinical Integrity First', 'HCP-Centric Delivery', 'Audit-Ready Reporting'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-sky-500" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="bg-sky-500/10 p-1 rounded-3xl border border-sky-500/20">
                 <img 
                  src="https://picsum.photos/seed/pharma/800/600" 
                  alt="Clinical Dashboard" 
                  className="rounded-[22px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-navy-900 border border-slate-700 p-6 rounded-2xl shadow-2xl hidden md:block">
                 <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center">
                     <Target className="text-white" />
                   </div>
                   <div>
                     <div className="text-sky-500 text-sm font-bold">ACCURACY SCORE</div>
                     <div className="text-2xl font-black">99.8%</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-500 font-bold text-sm tracking-widest mb-3 uppercase">OUR ECOSYSTEM</h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">What We Build</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Integrated intelligence systems that transform how pharmaceutical brands interact with medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <div key={service.id} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col group">
                  <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500 mb-8 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <Icon size={32} />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900 mb-4">{service.title}</h4>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="flex items-center text-sky-600 font-bold hover:text-sky-700 group-hover:translate-x-2 transition-transform"
                  >
                    System Details <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sky-500 font-bold text-sm tracking-widest mb-3 uppercase">METHODOLOGY</h2>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900">3 Steps to Governance</h3>
            </div>
            <p className="text-slate-600 max-w-md">Our deployment process ensures zero business disruption and maximum ROI visibility from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 hidden md:block"></div>
            
            {[
              { num: '01', title: 'Authority Audit', desc: 'Analyzing your current digital footprint and compliance risks.', icon: Search },
              { num: '02', title: 'System Deployment', desc: 'Setting up the E-E-A-T framework and field force tracking.', icon: Zap },
              { num: '03', title: 'ROI Intelligence', desc: 'Activating the dashboard for data-driven promotion management.', icon: Target }
            ].map((step, i) => (
              <div key={i} className="p-8 text-center md:text-left">
                <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-8 shadow-xl">
                  <span className="text-2xl font-black text-sky-500">{step.num}</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sky-500 font-bold text-sm tracking-widest mb-3 uppercase">DIFFERENTIATION</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-6">Built for Pharma, by Pharmacists</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {DIFFERENTIATORS.map((item, i) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <div key={i} className="text-center group">
                  <div className="inline-flex w-20 h-20 items-center justify-center bg-white/5 rounded-full mb-8 group-hover:bg-sky-500 transition-colors border border-white/10">
                    <Icon size={36} className="text-sky-500 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-600 z-0">
          <div className="absolute inset-0 bg-navy-900/10"></div>
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Stop Guessing. <br /> Start Governing Your Growth.</h2>
          <p className="text-xl text-sky-100 mb-12 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free Digital Authority Audit and discover the hidden leaks in your promotional spend.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-white text-sky-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl">
              Book Your Audit Now
            </Link>
            <a href="tel:+8801700000000" className="bg-navy-900 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-navy-900/90 transition-all shadow-2xl">
              Talk to a Consultant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const X: React.FC<any> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

export default Home;
