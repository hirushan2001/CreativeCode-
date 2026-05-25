import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkTogetherMarquee from '../components/WorkTogetherMarquee';
import { motion, AnimatePresence } from 'framer-motion';
const motionDiv = motion.div;
const FramerAnimatePresence = AnimatePresence;

const ContactPage = () => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [services, setServices] = useState({
    'UI/UX': false,
    'Product Design': false,
    'Web Development': false,
    'Branding Identity': false,
  });
  const [budget, setBudget] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingStep, setBookingStep] = useState('select'); // 'select' | 'confirm' | 'success'
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');

  // Service toggle handler
  const toggleService = (service) => {
    setServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  // Generate next 5 working days for the calendar
  const getNextWorkingDays = () => {
    const days = [];
    let current = new Date();
    while (days.length < 5) {
      current.setDate(current.getDate() + 1);
      // Skip Sunday (0) and Saturday (6)
      if (current.getDay() !== 0 && current.getDay() !== 6) {
        days.push(new Date(current));
      }
    }
    return days;
  };

  const bookingDays = getNextWorkingDays();
  const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Please fill out your name and email address.');
      return;
    }
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  // Handle Book Call Submit
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) {
      alert('Please enter your name and email address.');
      return;
    }
    setBookingStep('success');
  };

  // Auto reset form success
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
        setName('');
        setEmail('');
        setBudget('');
        setDetails('');
        setServices({
          'UI/UX': false,
          'Product Design': false,
          'Web Development': false,
          'Branding Identity': false,
        });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <motionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#141414] min-h-screen text-white font-sans flex flex-col justify-between select-none relative overflow-x-clip"
    >
      <Navbar />

      <main className="select-none text-white flex flex-col gap-y-14 pt-14 w-full">
        {/* Hero Section */}
        <div className="grid stack-parent w-screen overflow-hidden relative">
          <img
            alt="Half Circle Background"
            loading="lazy"
            width="1980"
            height="1080"
            decoding="async"
            className="stack-child h-[60%] md:h-[75%] self-end object-cover object-top pointer-events-none"
            style={{ color: 'transparent' }}
            src="/src/img/half-circle.svg"
          />
          <div className="stack-child flex flex-col min-h-[85vh] w-screen px-6 sm:px-11 pt-7 xs:pt-24 md:pt-0 pb-10 justify-center items-center">
            <h2 className="font-display font-black text-5xl xs:text-6xl sm:text-7xl md:text-8xl xl:text-9xl text-left md:text-center z-10 leading-[4.5rem] sm:leading-normal max-w-7xl">
              Unlock the magic,<br className="hidden md:flex" /> let's craft your <br className="hidden md:flex" /> digital story.
            </h2>
            
            {/* Book a Call Group Hover Wrapper */}
            <div className="grid stack-parent w-fit relative group self-center mt-10 z-20">
              <div className="stack-child relative w-full h-full pointer-events-none">
                {/* Yellow circle SVG */}
                <div className="w-fit h-fit absolute bottom-[1.5dvh] left-[1.5dvw] scale-0 group-hover:scale-100 group-hover:-translate-x-9 md:group-hover:-translate-x-10 group-hover:translate-y-9 md:group-hover:translate-y-10 group-hover:-rotate-6 duration-300">
                  <svg className="w-10 h-10 md:w-12 md:h-12" xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                    <path d="M1.90281 38.6885C-1.91598 30.1113 1.94142 20.0625 10.5186 16.2437L43.4062 1.60116C51.9833 -2.21762 62.0322 1.63978 65.851 10.2169L80.4935 43.1045C84.3123 51.6817 80.4549 61.7306 71.8778 65.5493L38.9901 80.1919C30.413 84.0106 20.3641 80.1532 16.5453 71.5761L1.90281 38.6885Z" fill="#FEAC31"></path>
                  </svg>
                </div>
                {/* Orange circle SVG */}
                <div className="w-fit h-fit absolute top-[1dvh] right-[1dvw] scale-0 group-hover:scale-100 group-hover:translate-x-10 md:group-hover:translate-x-12 group-hover:-translate-y-5 md:group-hover:-translate-y-6 duration-300">
                  <svg className="w-12 h-12 md:w-14 md:h-14" xmlns="http://www.w3.org/2000/svg" width="90" height="91" viewBox="0 0 90 91" fill="none">
                    <g clipPath="url(#clip0_3127_4009)"><circle cx="41" cy="49" r="32" fill="#FED731"></circle></g>
                    <defs><clipPath id="clip0_3127_4009"><rect width="80" height="79" fill="white" transform="translate(10.9766 90.25) rotate(-97.3929)"></rect></clipPath></defs>
                  </svg>
                </div>
                {/* Pink triangle SVG */}
                <div className="w-fit h-fit absolute top-[1.5dvh] left-[1dvw] scale-0 group-hover:scale-100 group-hover:-translate-x-16 md:group-hover:-translate-x-[4.5rem] group-hover:-translate-y-6 md:group-hover:-translate-y-7 group-hover:-rotate-12 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="127" height="127" viewBox="0 0 127 127" fill="none" class="w-16 h-16 md:w-20 md:h-20">
                    <path d="M42.3536 36.4137C42.7762 30.2698 49.6913 26.8874 54.8008 30.3254L96.6721 58.4989C101.782 61.9368 101.253 69.6167 95.7212 72.3226L50.3865 94.4975C44.8545 97.2034 38.4676 92.906 38.8903 86.7621L42.3536 36.4137Z" fill="#FC4E88"></path>
                  </svg>
                </div>
                {/* Purple corner SVG */}
                <div className="w-fit h-fit absolute bottom-[1.5dvh] right-[1.5dvw] scale-0 group-hover:scale-100 group-hover:translate-x-3 md:group-hover:translate-x-4 group-hover:translate-y-11 md:group-hover:translate-y-12 group-hover:-rotate-[18deg] duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none" class="w-8 h-8 md:w-10 md:h-10">
                    <path d="M51 49.961L51 3.8147e-06L0.102498 -6.34904e-07C0.102498 -6.34904e-07 -2.0844 18.2185 13.7451 34.8704C29.5747 51.5223 51 49.961 51 49.961Z" fill="#D602FF"></path>
                  </svg>
                </div>
              </div>
              
              {/* Button */}
              <div className="stack-child w-fit h-fit relative bg-black group-hover:bg-rose-600 duration-300 rounded-full cursor-pointer">
                <button
                  onClick={() => {
                    setIsBookingOpen(true);
                    setBookingStep('select');
                    setSelectedDate(null);
                    setSelectedTime(null);
                  }}
                  className="font-display font-bold w-fit lg:text-5xl md:text-4xl sm:text-3xl text-2xl px-8 py-4 md:px-12 md:py-6 rounded-full text-white cursor-pointer select-none"
                >
                  Book a call
                </button>
              </div>
            </div>
            
            <a
              href="#contact-form"
              className="font-display text-center text-base md:text-xl mt-4 md:mt-6 z-10 cursor-pointer text-stone-400 hover:text-white transition-colors duration-300 select-none underline underline-offset-4"
            >
              Don't prefer calls?
            </a>
          </div>
        </div>

        {/* Drop us a line Section */}
        <div id="contact-form" className="w-full flex flex-col gap-y-10 md:gap-y-16 lg:gap-y-20 px-6 sm:px-12 md:px-16 lg:px-24">
          <h3 className="font-display font-black text-center text-[#FF0055] text-4xl md:text-5xl xl:text-7xl mt-10 md:mt-20">
            Drop us a line
          </h3>
          
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motionDiv
                key="contact-form-el"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-7xl mx-auto"
              >
                <form
                  onSubmit={handleFormSubmit}
                  autoComplete="off"
                  className="font-sans xl:max-w-[88rem] mx-auto flex flex-col gap-y-12 items-start text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed"
                >
                  {/* Name field */}
                  <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-3 p-3 justify-start w-full border-b border-white/10 pb-6">
                    <span className="whitespace-nowrap font-light text-stone-400">Hello! My Name is</span>
                    <input
                      type="text"
                      placeholder="Type your name*"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-transparent border-b-2 border-transparent focus:border-b-white hover:border-b-white/50 w-full md:w-auto md:flex-1 text-left md:text-center focus:outline-none placeholder:text-stone-600 placeholder:text-center text-2xl md:text-3xl text-white transition-all duration-300 py-1"
                    />
                  </div>

                  {/* Services Checklist */}
                  <div className="flex flex-col gap-y-4 p-3 justify-start w-full border-b border-white/10 pb-8">
                    <span className="font-light text-stone-400">I am seeking assistance with:</span>
                    <div className="flex flex-wrap justify-start gap-4 mt-2">
                      {Object.keys(services).map((service) => {
                        const active = services[service];
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`cursor-pointer rounded-full border-2 py-2.5 px-6 md:py-3 md:px-8 text-base md:text-lg transition-all duration-300 font-medium ${
                              active
                                ? 'bg-white text-black border-white shadow-lg shadow-white/10 scale-95'
                                : 'bg-transparent text-stone-300 border-stone-700 hover:border-white hover:text-white'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-3 p-3 justify-start w-full border-b border-white/10 pb-6">
                    <span className="whitespace-nowrap font-light text-stone-400">You can reach me out by</span>
                    <input
                      type="email"
                      placeholder="Type your Email*"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-b-2 border-transparent focus:border-b-white hover:border-b-white/50 w-full md:w-auto md:flex-1 text-left md:text-center focus:outline-none placeholder:text-stone-600 placeholder:text-center text-2xl md:text-3xl text-white transition-all duration-300 py-1"
                    />
                  </div>

                  {/* Budget field */}
                  <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-4 p-3 justify-start w-full border-b border-white/10 pb-6">
                    <span className="whitespace-nowrap font-light text-stone-400">My expected budget is</span>
                    <div className="flex items-center gap-x-2 w-full md:w-auto md:flex-1 justify-start md:justify-center">
                      <input
                        type="text"
                        placeholder="Budget*"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="bg-transparent border-b-2 border-transparent focus:border-b-white hover:border-b-white/50 w-1/2 md:w-36 text-left md:text-center focus:outline-none placeholder:text-stone-600 placeholder:text-center text-2xl md:text-3xl text-white transition-all duration-300 py-1"
                      />
                      <span className="text-white font-medium">USD.</span>
                    </div>
                  </div>

                  {/* Project details area */}
                  <div className="flex flex-col gap-y-4 p-3 justify-start w-full border-b border-white/10 pb-6">
                    <span className="font-light text-stone-400">Here are some more details about my project,</span>
                    <div className="flex flex-col gap-y-2 mt-2 w-full">
                      <textarea
                        placeholder="Describe your project, features, goals..."
                        value={details}
                        onChange={(e) => setDetails(e.target.value.slice(0, 5000))}
                        rows="3"
                        className="bg-transparent border-b-2 border-stone-800 focus:border-white focus:outline-none placeholder:text-stone-700 text-lg md:text-xl text-stone-200 transition-all duration-300 py-2 w-full resize-none leading-relaxed"
                      />
                      <p className="text-xs self-end text-stone-500 font-mono">
                        {details.length}/5000
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#FF0055] hover:bg-[#ff206d] disabled:bg-stone-800 disabled:text-stone-500 text-white font-bold py-4 px-12 md:py-5 md:px-16 rounded-full self-end mt-6 transition-all duration-300 hover:scale-105 active:scale-95 text-lg md:text-xl cursor-pointer shadow-lg shadow-[#FF0055]/20 select-none flex items-center gap-x-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Let's start"
                    )}
                  </button>
                </form>
              </motionDiv>
            ) : (
              <motionDiv
                key="contact-success-el"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-xl mx-auto py-16 px-8 rounded-3xl bg-[#1c1c24] border border-white/5 flex flex-col items-center text-center gap-y-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1.5 bg-rose-600"></div>
                <div className="w-20 h-20 rounded-full bg-rose-600/10 flex items-center justify-center text-4xl">
                  ✨
                </div>
                <h4 className="font-display font-bold text-3xl md:text-4xl text-white mt-4">
                  Message Sent!
                </h4>
                <p className="text-stone-300 font-light leading-relaxed text-base md:text-lg">
                  Thank you for reaching out, <span className="text-[#FF0055] font-semibold">{name}</span>!
                  We are excited to look into your project. We'll review your details and get back to you within 24 hours.
                </p>
                <div className="w-full h-px bg-white/5 my-2"></div>
                <p className="text-xs text-stone-500 italic">
                  Let's break the mold together.
                </p>
              </motionDiv>
            )}
          </AnimatePresence>
        </div>

        {/* Separator spacing */}
        <div className="h-20 sm:h-32"></div>
      </main>

      <WorkTogetherMarquee />
      <Footer />

      {/* Calendly Booking Modal */}
      <FramerAnimatePresence>
        {isBookingOpen && (
          <motionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motionDiv
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-[#1b1b22] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"
            >
              {/* Top accent border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF0055] to-[#8354fd]"></div>
              
              {/* Close Button */}
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 text-stone-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 cursor-pointer"
              >
                <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path>
                </svg>
              </button>

              {/* Sidebar Info */}
              <div className="w-full md:w-2/5 bg-[#141419] p-8 flex flex-col justify-between border-r border-white/5 gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <div className="text-xs uppercase tracking-wider text-rose-500 font-semibold font-mono">CreativoCode</div>
                  <h4 className="font-display font-bold text-2xl text-white">Discovery Call</h4>
                  <p className="text-stone-400 text-sm font-light leading-relaxed">
                    Let's discuss your project goals, scope, and technical requirements. Get expert suggestions on visual strategy and animations.
                  </p>
                </div>
                
                <div className="flex flex-col gap-y-3 text-sm text-stone-300 font-light">
                  <div className="flex items-center gap-x-2">
                    <span className="text-rose-500">⏱</span>
                    <span>30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="text-rose-500">📞</span>
                    <span>Video / Audio Call</span>
                  </div>
                  {selectedDate && selectedTime && (
                    <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-xs text-rose-500 font-bold">Scheduled time:</div>
                      <div className="text-white font-medium mt-1">
                        {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                      </div>
                      <div className="text-stone-300 text-xs mt-0.5">{selectedTime}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking Panel */}
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center min-h-[400px]">
                <AnimatePresence mode="wait">
                  {bookingStep === 'select' && (
                    <motionDiv
                      key="step-select"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-y-6 h-full justify-between"
                    >
                      <div>
                        <h5 className="font-display font-bold text-xl text-white mb-4">Select Date & Time</h5>
                        
                        {/* Dates grid */}
                        <div className="grid grid-cols-5 gap-2 mb-6">
                          {bookingDays.map((date, idx) => {
                            const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
                            return (
                              <button
                                key={idx}
                                onClick={() => {
                                  setSelectedDate(date);
                                  setSelectedTime(null);
                                }}
                                className={`flex flex-col items-center justify-center py-3 px-1 rounded-xl border transition-all duration-200 cursor-pointer ${
                                  isSelected
                                    ? 'bg-rose-600 border-rose-600 text-white'
                                    : 'bg-white/5 border-white/5 text-stone-300 hover:border-white/20 hover:bg-white/10'
                                }`}
                              >
                                <span className="text-xs uppercase font-light text-stone-400 group-hover:text-white">
                                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                </span>
                                <span className="text-lg font-bold mt-1">
                                  {date.getDate()}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Times list */}
                        {selectedDate && (
                          <div className="flex flex-col gap-y-2 max-h-[220px] overflow-y-auto pr-1">
                            <div className="text-xs text-stone-400 mb-1 uppercase tracking-wider font-semibold">Available slots</div>
                            <div className="grid grid-cols-2 gap-2">
                              {timeSlots.map((time, idx) => {
                                const isSelected = selectedTime === time;
                                return (
                                  <button
                                    key={idx}
                                    onClick={() => setSelectedTime(time)}
                                    className={`py-3 px-4 rounded-xl border text-center transition-all duration-200 text-sm cursor-pointer ${
                                      isSelected
                                        ? 'bg-[#8354fd] border-[#8354fd] text-white'
                                        : 'bg-white/5 border-white/5 text-stone-300 hover:border-white/20'
                                    }`}
                                  >
                                    {time}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => setBookingStep('confirm')}
                        disabled={!selectedDate || !selectedTime}
                        className="w-full bg-[#FF0055] hover:bg-[#ff206d] disabled:bg-stone-800 disabled:text-stone-500 text-white font-bold py-4 rounded-xl text-center mt-6 transition-all duration-300 hover:scale-[1.02] active:scale-98 cursor-pointer select-none"
                      >
                        Next
                      </button>
                    </motionDiv>
                  )}

                  {bookingStep === 'confirm' && (
                    <motionDiv
                      key="step-confirm"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col gap-y-6 h-full justify-between"
                    >
                      <div>
                        <h5 className="font-display font-bold text-xl text-white mb-4">Confirm Details</h5>
                        <form onSubmit={handleBookingSubmit} className="flex flex-col gap-y-4">
                          <div className="flex flex-col gap-y-1">
                            <label className="text-xs text-stone-400">Your Name</label>
                            <input
                              type="text"
                              required
                              placeholder="John Doe"
                              value={bookingName}
                              onChange={(e) => setBookingName(e.target.value)}
                              className="bg-white/5 border border-white/10 focus:border-rose-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-all duration-200"
                            />
                          </div>
                          
                          <div className="flex flex-col gap-y-1">
                            <label className="text-xs text-stone-400">Email Address</label>
                            <input
                              type="email"
                              required
                              placeholder="john@example.com"
                              value={bookingEmail}
                              onChange={(e) => setBookingEmail(e.target.value)}
                              className="bg-white/5 border border-white/10 focus:border-rose-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-all duration-200"
                            />
                          </div>

                          <div className="text-xs text-stone-500 font-light mt-2 leading-relaxed">
                            By confirming, you agree to receive a calendar invitation and meeting link at the email address provided.
                          </div>

                          <div className="flex gap-x-2 mt-6">
                            <button
                              type="button"
                              onClick={() => setBookingStep('select')}
                              className="w-1/3 border border-white/10 hover:bg-white/5 text-stone-300 py-4 rounded-xl font-bold transition-all duration-200 cursor-pointer"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              className="w-2/3 bg-[#FF0055] hover:bg-[#ff206d] text-white py-4 rounded-xl font-bold transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer"
                            >
                              Schedule Call
                            </button>
                          </div>
                        </form>
                      </div>
                    </motionDiv>
                  )}

                  {bookingStep === 'success' && (
                    <motionDiv
                      key="step-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center gap-y-6 py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-rose-600/10 flex items-center justify-center text-3xl">
                        🎉
                      </div>
                      <h5 className="font-display font-bold text-2xl text-white">Call Confirmed!</h5>
                      <p className="text-stone-300 font-light leading-relaxed text-sm max-w-md">
                        Thank you, <span className="font-semibold text-white">{bookingName}</span>! Your Discovery Call has been successfully scheduled. An invite with video link has been sent to <span className="font-semibold text-white">{bookingEmail}</span>.
                      </p>
                      
                      <button
                        onClick={() => setIsBookingOpen(false)}
                        className="bg-white text-black font-bold py-3 px-8 rounded-xl mt-4 hover:bg-stone-200 transition-all duration-200 cursor-pointer"
                      >
                        Done
                      </button>
                    </motionDiv>
                  )}
                </AnimatePresence>
              </div>
            </motionDiv>
          </motionDiv>
        )}
      </FramerAnimatePresence>
    </motionDiv>
  );
};

export default ContactPage;
