import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] text-gray-700 py-10 mt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#006943]">
            sp ChinaBangla Mediaid
          </h3>
          <p className="text-sm leading-relaxed">
            Connecting Bangladesh to world-class medical care in China.  
            We ensure trusted collaboration and complete health support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#006943]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-[#006943]">Services</Link></li>
            <li><Link href="/appointment" className="hover:text-[#006943]">Appointment</Link></li>
            <li><Link href="/about" className="hover:text-[#006943]">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#006943]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#006943]">Contact</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#006943]" />
              +880 1731-106046
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#006943]" />
              info@spcbmediaid.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#006943]" />
              H-165, R-1, Baridhara DOHS, Dhaka
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} sp ChinaBangla Mediaid Mediaid. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
