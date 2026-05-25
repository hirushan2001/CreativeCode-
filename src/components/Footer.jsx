import React from 'react';
import Logo from './Logo';
import SelectorBox from './SelectorBox';
import { Link } from './Router';

const Footer = () => {
  const siteMapLinks = [
    { name: "Home Page", link: "/" },
    { name: "Projects Page", link: "/projects" },
    { name: "Pricing Page", link: "#" },
    { name: "Contact us Page", link: "#contact" },
    { name: "Join us Page", link: "/join-us" },
    { name: "About us Page", link: "#" },
    { name: "Blogs Page", link: "/blogs" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", link: "#" },
    { name: "Refund Policy", link: "#" },
    { name: "Terms and Conditions", link: "#" }
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
            {["facebook", "x", "instagram", "linkedin"].map((social) => (
              <a
                key={social}
                href={`https://${social}.com`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-stone-400 hover:text-white hover:bg-custom-primaryPurple duration-300 border border-white/5 hover:border-custom-primaryPurple/30"
              >
                {social === "facebook" && (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                )}
                {social === "x" && (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                )}
                {social === "instagram" && (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0281 2.00098C14.1535 2.00284 14.7238 2.00879 15.2166 2.02346L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10944 17.9128 2.27778 18.5503 2.52528C19.2094 2.77944 19.7661 3.12278 20.3219 3.67861C20.8769 4.23444 21.2203 4.79278 21.4753 5.45028C21.7219 6.08694 21.8903 6.81361 21.9403 7.87778C21.9522 8.14444 21.9618 8.36564 21.9697 8.58989L21.976 8.78397C21.9906 9.27672 21.9973 9.8471 21.9994 10.9725L22.0002 11.7182C22.0003 11.8093 22.0003 11.9033 22.0003 12.0003L22.0002 12.2824L21.9996 13.0281C21.9977 14.1535 21.9918 14.7238 21.9771 15.2166L21.9707 15.4107C21.9628 15.6349 21.9528 15.8561 21.9403 16.1228C21.8911 17.1869 21.7219 17.9128 21.4753 18.5503C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2203 18.5503 21.4753C17.9128 21.7219 17.1869 21.8903 16.1228 21.9403C15.8561 21.9522 15.6349 21.9618 15.4107 21.9697L15.2166 21.976C14.7238 21.976C14.7238 21.976 13.0281 21.9994L12.2824 22.0002C12.1913 22.0003 12.0973 22.0003 12.0003 22.0003L11.7182 22.0002L10.9725 21.9996C9.8471 21.9977 9.27672 21.9918 8.78397 21.9771L8.58989 21.9707C8.36564 21.9628 8.14444 21.9528 7.87778 21.9403C6.81361 21.8911 6.08861 21.7219 5.45028 21.4753C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5503C2.27778 17.9128 2.11028 17.1869 2.06028 16.1228C2.0484 15.8561 2.03871 15.6349 2.03086 15.4107L2.02457 15.2166C2.00994 14.7238 2.00327 14.1535 2.00111 13.0281L2.00098 10.9725C2.00284 9.8471 2.00879 9.27672 2.02346 8.78397L2.02981 8.58989C2.03778 8.36564 2.04778 8.14444 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79194 3.12278 4.23444 3.67861 3.67861C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.0484 8.36564 2.03871 8.58989 2.03086L8.78397 2.02457C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0003C7.00028 14.7632 9.23981 17.0003 12.0003 17.0003C14.7632 17.0003 17.0003 14.7607 17.0003 12.0003C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0003C15.0003 13.6572 13.6576 15.0003 12.0003 15.0003C10.3434 15.0003 9.00028 13.6576 9.00028 12.0003C9.00028 10.3434 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06018 16.0003 6.74943C16.0003 7.43867 16.5602 7.99944 17.2503 7.99944C17.9395 7.99944 18.5003 7.43954 18.5003 6.74943C18.5003 6.06018 17.9386 5.49941 17.2503 5.50028Z"/>
                  </svg>
                )}
                {social === "linkedin" && (
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                    <g></g>
                    <path d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"/>
                  </svg>
                )}
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
