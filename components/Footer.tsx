
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Activity className="text-sky-500 w-8 h-8" />
              <span className="text-2xl font-bold text-white tracking-tight">PULSEON</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Building compliance-first doctor engagement, CME intelligence, and ROI management systems for the next generation of pharma companies in Bangladesh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-sky-500 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-sky-500 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-sky-500 flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="text-sky-500 shrink-0 mt-1" size={18} />
                <span>info@pulseon.com.bd</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-sky-500 shrink-0 mt-1" size={18} />
                <span>+880 1700 000000</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-sky-500 shrink-0 mt-1" size={18} />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe for the latest insights in Pharma Digital Authority.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-3 w-full focus:ring-1 focus:ring-sky-500 outline-none"
              />
              <button className="bg-sky-500 text-white rounded-r-lg px-4 hover:bg-sky-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Pulseon Consulting. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
