import React from 'react';

const ClientMarquee = () => {
  const clients = [
    "Nexus Agro",
    "Firefly Advocates",
    "Speed Freak",
    "Cridians",
    "Ananda Holdings",
    "Crackerz Co",
    "Nethra Eye Care",
    "Debonair Orlando"
  ];

  return (
    <section className="w-full py-16 overflow-hidden bg-[#141414] border-y border-white/5">
      <div className="flex flex-col gap-y-8 justify-center items-center">
        <h2 className="font-display text-[#cdb0e4] text-xl tracking-wider uppercase font-semibold">
          Our Clients, Partners and Friends :)
        </h2>
      </div>

      {/* Scrolling Marquee Container */}
      <div className="mt-10 relative w-full flex overflow-x-hidden two-transparent-ends select-none">
        
        {/* Double row for infinite scrolling effect */}
        <div className="flex gap-x-12 animate-[marquee_25s_linear_infinite] whitespace-nowrap min-w-full">
          {clients.concat(clients).map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="inline-flex items-center justify-center py-3 px-8 bg-white/5 border border-white/10 rounded-full text-white text-lg font-display tracking-wide font-medium shadow-inner hover:bg-white/10 hover:border-custom-selectorBorder/50 hover:scale-105 transition-all duration-300"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF0055] mr-3 animate-pulse"></span>
              {client}
            </div>
          ))}
        </div>

        {/* CSS for custom marquee scroll */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

      </div>
    </section>
  );
};

export default ClientMarquee;
