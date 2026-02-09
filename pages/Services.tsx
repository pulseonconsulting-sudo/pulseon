
import React from 'react';
import { SERVICES, ICON_MAP } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 py-32 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
          <div className="grid grid-cols-10 grid-rows-10 gap-4 w-full h-full">
            {Array.from({length: 100}).map((_, i) => (
              <div key={i} className="border border-sky-500/20 rounded-sm"></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">The <span className="text-sky-500">Authority</span> Stack.</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Six interconnected systems designed to turn promotional activities into measurable, compliant revenue intelligence.
          </p>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon];
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-500 mb-8">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-6">{service.title}</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-sky-500 font-black text-xs tracking-widest uppercase mb-4">Core Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((b, i) => (
                            <li key={i} className="flex items-start space-x-2 text-slate-700 font-medium">
                              <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-1" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sky-500 font-black text-xs tracking-widest uppercase mb-4">Business Outcomes</h4>
                        <ul className="space-y-3">
                          {service.outcomes.map((o, i) => (
                            <li key={i} className="flex items-start space-x-2 text-slate-700 font-medium">
                              <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" />
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-sky-500/5 rounded-3xl group-hover:bg-sky-500/10 transition-colors"></div>
                      <img 
                        src={`https://picsum.photos/seed/${service.id}/800/600`} 
                        alt={service.title} 
                        className="rounded-2xl shadow-2xl relative z-10 w-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Service Integration */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12">The Integrated Intelligence Advantage</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16">
            These systems don't work in isolation. Our platform ensures that clinical authority (SEO) informs doctor engagement, which in turn directs field force activities, all feeding into your ROI dashboard.
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center shadow-2xl">
              Discuss Your Ecosystem <ArrowRight className="ml-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
