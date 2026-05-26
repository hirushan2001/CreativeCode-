import React from 'react';
import Logo from './Logo';
import SelectorBox from './SelectorBox';
import { Link } from './Router';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
  const siteMapLinks = [
    { name: "Home Page", link: "/" },
    { name: "Projects Page", link: "/projects" },
    { name: "Pricing Page", link: "#" },
    { name: "Contact us Page", link: "/contact-us" },
    { name: "Join us Page", link: "/join-us" },
    { name: "About us Page", link: "#" },
    { name: "Blogs Page", link: "/blogs" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", link: "#" },
    { name: "Refund Policy", link: "#" },
    { name: "Terms and Conditions", link: "#" }
  ];

  const socialLinks = [
    { name: "facebook", href: "https://www.facebook.com/TheCreativocode", icon: <FaFacebookF className="w-4 h-4" /> },
    { name: "x", href: "https://x.com/CreativoCode", icon: <FaXTwitter className="w-4 h-4" /> },
    { name: "instagram", href: "https://www.instagram.com/creativo_code", icon: <FaInstagram className="w-4 h-4" /> },
    { name: "linkedin", href: "https://lk.linkedin.com/company/creativo-code", icon: <FaLinkedinIn className="w-4 h-4" /> }
  ];

  return (
    <footer className="w-full bg-[#1b1b22] rounded-t-3xl pt-24 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-12 pb-16 border-b border-white/5">
        
        {/* Left Column: Logo & Socials */}
        <div className="flex flex-col gap-y-8 items-start">
          <SelectorBox borderColor="border-custom-selectorBorder/35" className="p-1">
            <Logo className="w-48 h-16 text-white hover:text-custom-primaryPurple duration-300" />
          </SelectorBox>
          <p className="text-stone-400 font-light text-sm max-w-xs leading-relaxed">
            Your One Stop Web Design & Development Agency. Crafting digital products with visual excellence and motion storytelling.
          </p>
          
          {/* Socials */}
          <div className="flex items-center gap-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:bg-custom-primaryPurple duration-300 border border-white/5 hover:border-custom-primaryPurple/30 cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Center/Right Column: Site Map & Legal */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8 justify-between lg:justify-items-end">
          
          {/* Site Map Column */}
          <div className="flex flex-col gap-y-3 items-start">
            <h6 className="text-[#cdb0e4] font-display text-lg font-bold tracking-wide mb-2 uppercase select-none">
              Site Map
            </h6>
            {siteMapLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-stone-400 hover:text-white transition-colors duration-200 text-sm font-light leading-none"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-y-3 items-start">
            <h6 className="text-[#cdb0e4] font-display text-lg font-bold tracking-wide mb-2 uppercase select-none">
              Legal
            </h6>
            {legalLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-stone-400 hover:text-white transition-colors duration-200 text-sm font-light leading-none"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-stone-500 text-xs font-light tracking-wide gap-y-4">
        <p>© 2026 CreativoCode. All rights reserved.</p>
        <p className="flex items-center">
          Handcrafted in Sri Lanka with
          <span className="text-[#FF0055] mx-1">❤</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
