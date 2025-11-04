import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "../../assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] text-gray-700 py-10 mt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
        {/* About */}
        <div>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              alt="sp ChinaBangla Mediaid"
              src={logo}
              height={80}
              width={280}
            />
          </Link>
          <p className="text-sm leading-relaxed mt-6">
            Connecting Bangladesh to world-class medical care in China. We
            ensure trusted collaboration and complete health support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#006943]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-[#006943]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#006943]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#006943]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#006943]">Contact</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <a
                href="https://wa.me/8801976260695"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] hover:underline transition-colors"
              >
                01976-260695 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#006943]" />
              <a
                href="tel:01720385178"
                className="hover:text-[#006943] hover:underline transition-colors"
              >
                01720-385178
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#006943]" />
              <a
                href="tel:01907802910"
                className="hover:text-[#006943] hover:underline transition-colors"
              >
                01907-802910
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#006943]" />
              info@spchinabanglamediaid.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#006943]" />
              H-165, R-1, Baridhara DOHS, Dhaka.
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} sp ChinaBangla Mediaid. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
