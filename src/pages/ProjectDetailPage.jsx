import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkTogetherMarquee from '../components/WorkTogetherMarquee';
import { Link } from '../components/Router';
import { motion } from 'framer-motion';

const projectsDetailsData = {
  "debonair": {
    title: "Debonair Supper Club",
    subtitle: "A website for a supper club",
    icon: "https://images.prismic.io/creativo-code-official/aLwIBGGNHVfTOuv8_Debonair1.png?auto=format%2Ccompress&fit=max&w=384",
    hero_mockup: "https://images.prismic.io/creativo-code-official/aLwHbGGNHVfTOuv4_Frame34333.png?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #74882F 40.15%, rgba(186,78,26,0.00) 78.1%)",
    theme_color: "#74882F",
    overview: "Debonair Supper Club tasked us with developing a unique, aesthetic, and creative website that reflects the vibrant and artistic essence of their venue. The goal was to create a visually engaging site with animations that capture the atmosphere of the supper club and provide visitors with a sense of the experience awaiting them.",
    industry: "Entertainment",
    deliverables: ["UI design", "Website"],
    visit_url: "https://www.debonairorlando.com/",
    client_overview: "Debonair Supper Club is a unique dining destination in downtown Orlando, offering comfort cuisine and cocktails in an art-filled and captivating environment. The venue blends imaginative and nostalgic elements with an immersive dining experience, where patrons enjoy a fusion of dining, drinking, and entertainment, making every visit truly unforgettable.",
    problem: "The client did not have an official website to represent their brand and showcase their offerings. They needed an online presence that would capture the ambiance of their venue and facilitate reservations, enhancing their customer experience.",
    solution: "We developed a fully custom website for Debonair Supper Club using Next.js, GSAP, and Tailwind CSS, reflecting the clubâ€™s artistic and immersive nature. The site features unique aesthetics with creative animations, starting with an animated archway that welcomes users into a garden scene with animated butterflies. The prominent â€œReserve Nowâ€ button leads visitors directly to the reservation page.\n\nThe siteâ€™s interactive menu provides easy access to Debonairâ€™s offerings, including Brunch, Lunch, Dinner, Dessert, Cocktail, Wine, and Bottle Service. Additionally, we implemented a Membership Program section for exclusive experiences. Straightforward navigation links to key pages like About Us, Contact Us, and Join Us, while a subscription form encourages visitors to join the newsletter.\n\nBy leveraging cutting-edge web technologies and design, we created a visually engaging platform that enhances Debonairâ€™s online presence and invites visitors to fully immerse themselves in the brand experience.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/ZuwGdLVsGrYSvlbA_debonairlap1.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#000000", name: "Deep Brown" },
      { hex: "#18181B", name: "Dark Grey" },
      { hex: "#667339", name: "Olive Green" },
      { hex: "#CA9137", name: "Gold" },
      { hex: "#DAB981", name: "Tan" },
      { hex: "#F8FAFC", name: "Off-White" }
    ],
    typography: [
      { name: "Maragsa", image: "https://images.prismic.io/creativo-code-official/ZuwHn7VsGrYSvlbY_Font-Margasa.png?auto=format%2Ccompress&fit=max&w=1080" },
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/ZuwGkLVsGrYSvlbD_Debonair-finaloutput.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "I highly recommend Creativo Code for their exceptional work on a recent design project. They were very responsive, detail-oriented, and accommodating my requests throughout the process. The final design and prototype exceeded my expectations. It was a pleasure working with Creativo Code, and I would definitely work with them again in the future.",
    feedback_author: "Haya Zarrin",
    feedback_company: "Debonair Orlando",
    feedback_logo: "https://images.prismic.io/creativo-code-official/ZuwEmbVsGrYSvlaA_DebonairLogo.png?auto=format%2Ccompress&fit=max&w=384"
  },
  "deliverables-factory": {
    title: "Deliverables Factory",
    subtitle: "A website for a video production company",
    icon: "https://images.prismic.io/creativo-code-official/ZuwdHLVsGrYSvlnq_DeliverablesLogo.png?auto=format%2Ccompress&fit=max&w=384",
    hero_mockup: "https://images.prismic.io/creativo-code-official/ZuwdDbVsGrYSvlnn_Deliverables-hero.png?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #1D4ED8 40.15%, rgba(186,78,26,0.00) 78.1%)",
    theme_color: "#1D4ED8",
    overview: "Deliverables Factory tasked us with designing and developing a website that stands out from typical designs, aligning with their brandâ€™s creative essence. The goal was to build a website with parallax animations that not only conveyed their unique theme but also effectively communicated their services and approach in a memorable way.",
    industry: "Video Production",
    deliverables: ["UI design", "Website"],
    visit_url: "https://deliverables-factory.vercel.app",
    client_overview: "Deliverables Factory is a post-production and editing service that specializes in creating video deliverables for streaming platforms, social media, and broadcast. As a dedicated video partner, they aim to streamline the content creation process, offering creative and technical solutions to bring their clientsâ€™ visions to life.",
    problem: "The client had no prior online presence and required a website that would stand out from typical designs, aligning with their brandâ€™s creative essence. They needed an innovative and dynamic platform that would differentiate them in a competitive market. The challenge was to build a website with parallax animations that not only conveyed their unique theme but also effectively communicated their services and approach in a memorable way.",
    solution: "We developed a unique parallax website using Next.js, Tailwind CSS, and Framer Motion, designed to simulate a virtual tour of the Deliverables Factory. The site features engaging animations that guide users through various stages of the factory, each representing the companyâ€™s services and creative approach.\n\nAs visitors scroll, they experience the factory environment, learning about Deliverables Factoryâ€™s offerings in a memorable, storytelling format. The tour concludes with a contact form, inviting visitors to connect with the company. The website is fully optimized and mobile-responsive, delivering a distinctive and immersive experience that captures the brandâ€™s essence.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/ZuwdmLVsGrYSvln9_Deliverables-image.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#000000", name: "Matte Black" },
      { hex: "#1D4ED8", name: "Royal Blue" },
      { hex: "#3B82F6", name: "Bright Blue" },
      { hex: "#F3F4F6", name: "Light Grey" }
    ],
    typography: [
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/Zuwdr7VsGrYSvloC_Deliverables-finaloutput.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "I hired Creativo Code to build my complex, parallax website, and they did an outstanding job! The team communicated effectively and went above and beyond to ensure I was completely satisfied. I highly recommend Creativo Code.",
    feedback_author: "Sebastian P.",
    feedback_company: "Producer/Editor at Peacock",
    feedback_logo: "https://images.prismic.io/creativo-code-official/Zu3jz7VsGrYSvpCb_seba.webp?auto=format%2Ccompress&fit=max&w=640"
  },
  "firefly-advocates": {
    title: "Firefly Advocates",
    subtitle: "Website for a Law firm",
    icon: "https://images.prismic.io/creativo-code-official/ZiaZG_Pdc1huKru5_Firefly.png?auto=format%2Ccompress&fit=max&w=384",
    hero_mockup: "https://images.prismic.io/creativo-code-official/ZuifYbVsGrYSvaQO_Firefly.png?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "",
    theme_color: "#1E3A8A",
    overview: "Firefly Advocates sought a complete revamp of their website's UI/UX design to improve the user experience and present a clean, creative, and professional look. The goal was to enhance both the visual appeal and functionality of their site, ensuring visitors could easily navigate and engage with their mission and services.",
    industry: "Legal services",
    deliverables: ["UI design"],
    visit_url: "",
    client_overview: "Firefly Advocates is a 501(c)(3) nonprofit organization focused on reforming the criminal justice system and offering support to individuals affected by fines or wrongful convictions. Their mission is to ensure justice is served fairly and compassionately, providing critical assistance to those in need.",
    problem: "The client was dissatisfied with the design and user experience of their existing website. They needed an improved UI/UX design that would better communicate their mission, increase usability, and create a more engaging experience for their audience.",
    solution: "We provided a clean, creative, and professional UI/UX design for Firefly Advocates, focusing on improving both visual appeal and user experience. Using Figma, we designed layouts for both mobile and desktop platforms, ensuring seamless functionality across devices. The revamped design clearly communicates their mission, services, and global reach, while enhancing usability with creative components and animations. This design successfully meets the client's needs, providing a modern and engaging user experience that supports their mission.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/Z17DH5bqstJ98grj_firefly.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#1E3A8A", name: "Navy Blue" },
      { hex: "#F59E0B", name: "Amber Yellow" },
      { hex: "#FFFFFF", name: "White" },
      { hex: "#1F2937", name: "Charcoal" }
    ],
    typography: [
      { name: "Roboto", image: "https://images.prismic.io/creativo-code-official/ZunBPLVsGrYSveHA_robotofont.png?auto=format%2Ccompress&fit=max&w=1080" },
      { name: "Montserrat", image: "https://images.prismic.io/creativo-code-official/ZunBUbVsGrYSveHD_Montserratfont.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/ZunlP7VsGrYSve75_Fireflyfinaloutput.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "I highly recommend Creativo Code for their exceptional work on a recent design project. They were very responsive, detail-oriented, and accommodating my requests throughout the process. The final design and prototype exceeded my expectations. It was a pleasure working with Creativo Code, and I would definitely work with them again in the future.",
    feedback_author: "Klaidi",
    feedback_company: "CEO of FireFly Advocates",
    feedback_logo: "https://images.prismic.io/creativo-code-official/ZunuJrVsGrYSve_k_firefly.png?auto=format%2Ccompress&fit=max&w=640"
  },
  "m3rglobal": {
    title: "M3R Global",
    subtitle: "Landing page for a supply chain management company",
    icon: "https://images.prismic.io/creativo-code-official/Zuwho7VsGrYSvlrE_m3rgloballogo.png?auto=format%2Ccompress&fit=max&w=384",
    hero_mockup: "https://images.prismic.io/creativo-code-official/Zu7wOrVsGrYSvpc-_mockup14inch.png?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #10B981 40.15%, rgba(0,0,0,0) 78.1%)",
    theme_color: "#10B981",
    overview: "M3R Global did not have an online presence and required a website to showcase their services and establish credibility in the market. They needed a platform that highlighted their core offerings, including exporting and consulting services, and provided easy access for clients to request quotes and get in touch.",
    industry: "Logistics",
    deliverables: ["UI design", "Website"],
    visit_url: "",
    client_overview: "M3R Global is a trusted partner in global supply chain solutions, offering innovative and sustainable strategies to streamline every aspect of the supply chain. From procurement to delivery, M3R Global optimizes each step, ensuring businesses thrive on a global scale.",
    problem: "M3R Global did not have an online presence and required a website to showcase their services and establish credibility in the market. They needed a platform that highlighted their core offerings, including exporting and consulting services, and provided easy access for clients to request quotes and get in touch. M3R Global asked for our expertise to build a website customized to their needs, along with consultancy on the best approach and features within their budget.",
    solution: "We developed a minimalistic and fully responsive WordPress website customized to M3R Global's requirements. The design focuses on simplicity and user experience, reflecting M3R Globalâ€™s brand identity with a clean, professional look. The website features a Hero Section with an introductory message about M3R Global and an image slideshow that visually encapsulates their global supply chain services.\n\nThe site is structured to provide clear navigation, linking visitors to detailed pages about their core services. This allows users to easily explore M3R Globalâ€™s offerings, understand their expertise, and see how they can benefit from the services provided.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/ZuwiKbVsGrYSvlrl_m3rglobalimage.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#10B981", name: "Emerald Green" },
      { hex: "#0F172A", name: "Slate Blue" },
      { hex: "#FFFFFF", name: "White" }
    ],
    typography: [
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/ZuwiOrVsGrYSvlrv_m3rglobalfinaloutput.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "We hired Creativo Code to build our startup's website, and they exceeded our expectations. The site is clean, professional, and incredibly well done. Highly recommend their services!",
    feedback_author: "Amay Reddy",
    feedback_company: "Founder of M3R Global",
    feedback_logo: "https://images.prismic.io/creativo-code-official/Zu3gQ7VsGrYSvpBH_Amayreddy.jpg?auto=format%2Ccompress&rect=0%2C75%2C1199%2C1199&w=828&fit=max"
  },
  "nexus-spices": {
    title: "Nexus Spices",
    subtitle: "Website for a spice exporting company",
    icon: "https://creativo-code-official.cdn.prismic.io/creativo-code-official/Zu3rpLVsGrYSvpEd_Nextspices.svg?fit=max&w=384",
    hero_mockup: "https://creativo-code-official.cdn.prismic.io/creativo-code-official/Zu3xvLVsGrYSvpFf_Zuv9mbVsGrYSvlXV_Nexus-hero-right.svg?fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #D97706 40.15%, rgba(0,0,0,0) 78.1%)",
    theme_color: "#BA4E1A",
    overview: "Nexus Spices needed a professional and creative website to showcase their products and attract B2B customers. The website had to feature an intuitive way for customers to place orders through an online form, integrate a CMS for product updates, and include contact forms, social media links, and a Google Maps integration to highlight their office location. The goal was to provide a digital platform that reflected the brand's quality and made it easy for customers to engage with their offerings.",
    industry: "Retail trade",
    deliverables: ["UI design", "Website"],
    visit_url: "https://spices.nexusagro.lk/",
    client_overview: "Nexus Spices, a brand under Nexus Agro (Pvt) Ltd, is dedicated to delivering the rich flavors of Sri Lankan spices to the global market. Using traditional farming techniques and a commitment to quality, they provide fresh, flavorful, and authentic spices to professional chefs and home cooks alike. Their mission is to make cooking a delightful experience through the use of premium Sri Lankan spices.",
    problem: "As Nexus Spices did not have an existing website, they required a solution that would establish their online presence and meet all their specific needs, including B2B order functionality, product updates via CMS, and professional presentation of their contact details and location.",
    solution: "We developed a professional, responsive website for Nexus Spices, incorporating parallax scroll effects to create a visually engaging experience. The site allows Nexus Spices to showcase their products and includes a custom B2B order form for clients to easily place orders. We integrated Sanity CMS, enabling the client to manage and update content like products and recipes independently. Additionally, the site features a contact form, social media links, and a Google Maps integration to display their office location.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/Zuv-8LVsGrYSvlXp_nexus-image.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#D97706", name: "Amber Orange" },
      { hex: "#78350F", name: "Dark Amber" },
      { hex: "#FFFFFF", name: "White" }
    ],
    typography: [
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" },
      { name: "Poppins", image: "https://images.prismic.io/creativo-code-official/Zuv__LVsGrYSvlYB_font-poppins.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/ZuwAYLVsGrYSvlYG_Nexus-finaloutput.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "I am thrilled to share my experience working with Creativo Code, a remarkable web designing company. They designed and developed our spices selling website with utmost attractiveness and efficiency. Their expertise and attention to detail have been instrumental in helping us grow our business. The website they created beautifully showcases our products and has significantly enhanced our online presence. I am grateful for their outstanding work and highly recommend Creativo Code for anyone seeking exceptional web design services.",
    feedback_author: "N.U.W.K. Perera",
    feedback_company: "Managing Director of NexusAgro",
    feedback_logo: "https://images.prismic.io/creativo-code-official/Zu3u2rVsGrYSvpE1_Perera.jpeg?auto=format%2Ccompress&fit=max&w=1920"
  },
  "dreamshift": {
    title: "Dream Shift",
    subtitle: "Website for an agency",
    icon: "https://images.prismic.io/creativo-code-official/ZuvpvrVsGrYSvlLA_Dreamshiftlogo.png?auto=format%2Ccompress&fit=max&w=384",
    hero_mockup: "https://images.prismic.io/creativo-code-official/ZuvsFLVsGrYSvlMp_Dreamshift-.png?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #4F46E5 40.15%, rgba(186,78,26,0.00) 78.1%)",
    theme_color: "#4F46E5",
    overview: "DreamShift approached us to build a professional, visually appealing, and responsive website that effectively represents their brand. The website needed to serve as their digital front, showcasing their services, packages, pricing, client testimonials, and unique approach to career transformation. We developed a WordPress website that successfully met all of their needs, creating an engaging and seamless user experience that resonates with DreamShift's target audience.",
    industry: "Career services",
    deliverables: ["UI design", "Website"],
    visit_url: "https://dreamshift.net/",
    client_overview: "DreamShift is your premier destination for Premium Resume/CV Writing and Career Transformation services. Specializing in creating compelling documents that empower professionals by showcasing their unique and personal brand, DreamShift helps clients secure their dream jobs.",
    problem: "Before reaching out to us, DreamShift had no online presence and was looking to establish one to better reach and serve their clients. They required a website that not only displayed their services, packages, and pricing but also highlighted their unique process and client testimonials. The website also needed to provide easy navigation to their social media platforms. Since they had no prior website building expertise, they looked for a solution that would align with their budget while delivering a high-quality, professional web presence.",
    solution: "To address DreamShiftâ€™s needs, we developed a modern and professional WordPress website tailored to their brand identity and target audience. The site includes key pages: Home, Pricing, Our Process, About Us, Blog, and Contact. The design was strategically developed to be clean, engaging, and responsive, aligning with DreamShiftâ€™s premium branding.\n\nBy combining our expertise in creative front-end development with a deep understanding of DreamShiftâ€™s brand, we successfully delivered a website that not only looks professional but also functions seamlessly to support their business growth.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/ZuvsFLVsGrYSvlMp_Dreamshift-.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#4F46E5", name: "Indigo Blue" },
      { hex: "#4338CA", name: "Dark Indigo" },
      { hex: "#FFFFFF", name: "White" }
    ],
    typography: [
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/ZuvqtbVsGrYSvlLu_DreamshiftFinaloutput.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "I highly recommend Creativo Code for their exceptional work on a recent design project. They were very responsive, detail-oriented, and accommodating my requests throughout the process. The final design and prototype exceeded my expectations. It was a pleasure working with Creativo Code, and I would definitely work with them again in the future.",
    feedback_author: "Palav Desai",
    feedback_company: "Graphic Designer",
    feedback_logo: "https://images.prismic.io/creativo-code-official/Zu3hcLVsGrYSvpBo_dreamshit.png?auto=format%2Ccompress&w=828&fit=max"
  },
  "gt-wedding": {
    title: "G&T Wedding Invitation",
    subtitle: "Wedding invitation website",
    icon: "",
    hero_mockup: "https://images.prismic.io/creativo-code-official/Zhq9mzjCgu4jzzLa_gt-wedding.jpg?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #EC4899 40.15%, rgba(186,78,26,0.00) 78.1%)",
    theme_color: "#EC4899",
    overview: "The goal of this project was to design and develop a digital web invitation for Gurtejpal and Tamannaâ€™s wedding. They wanted the invitation to be visually appealing, mobile-friendly, and interactive, with custom animations to enhance the overall user experience. The design needed to reflect the coupleâ€™s unique style while providing all the necessary details about their wedding events.",
    industry: "Entertainment",
    deliverables: ["UI design", "Website"],
    visit_url: "",
    client_overview: "Gurtejpal and Tamanna approached us to create a digital wedding invitation that would capture the essence of their love story and invite their friends, family, and colleagues from around the world to celebrate their union.",
    problem: "Traditional paper invitations are static, expensive to ship worldwide, and offer no dynamic interactive features or RSVPs. The couple wanted a premium digital alternative that would impress their global list of guests and express their personal journey.",
    solution: "We developed a unique and interactive digital wedding invitation for Gurtejpal and Tamanna, optimized for mobile devices and infused with captivating animations. The design begins with a warm and inviting Welcome Section, introducing guests to the celebratory events.\n\nAs users scroll, they are greeted with an animated sequence of the couple entering the Gala Night, setting the tone for the festivities. This page provides detailed information about the event, including the date, venue, and agenda.\n\nThe next section highlights the Sangeet Lunch, accompanied by thematic animations that enhance the joy and vibrance of the celebration.\n\nLastly, the invitation showcases the Main Ceremony, featuring animations that exude elegance and grandeur, offering complete details of the wedding day.\n\nThe entire site was thoughtfully designed with Figma and hardcoded using Next.js, Tailwind CSS, and Framer Motion. The result was a highly creative, visually engaging, and mobile-responsive web invitation that beautifully reflected the coupleâ€™s story and left a lasting impression on their guests.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/Zzhmgq8jQArT07-R_G%26TOurSolutionsSection.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#EC4899", name: "Rose Pink" },
      { hex: "#F43F5E", name: "Coral Pink" },
      { hex: "#FFFFFF", name: "White" }
    ],
    typography: [
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/Zzhmgq8jQArT07-R_G%26TOurSolutionsSection.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "Truly a huge thank you for the members of CreativoCode for all your hard work, patience and time you put in this. We are so happy with this site and design, we truly are so amazed by it ðŸ˜.",
    feedback_author: "Tamanna B.",
    feedback_company: "Data Analyst",
    feedback_logo: "https://images.prismic.io/creativo-code-official/ZzhvYK8jQArT07-y_Tamanna.jpeg.jpg?auto=format%2Ccompress&fit=max&w=1920"
  },
  "paradox-platform": {
    title: "Paradox Platform",
    subtitle: "A website for a modern fashion and lifestyle brand",
    icon: "",
    hero_mockup: "https://images.prismic.io/creativo-code-official/Z_utaevxEdbNO-hF_image01.png?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #EF4444 40.15%, rgba(186,78,26,0.00) 78.1%)",
    theme_color: "#EF4444",
    overview: "The objective was to design and develop a creative and visually captivating website to represent and promote the two clothing brands effectively. The landing page must be divided into two halves, each representing a brand. The top half symbolises \"Heaven,\" embodying one brandâ€™s aesthetic, while the bottom half symbolises \"Hell,\" reflecting the other brand's identity.\n\nThe client required a seamless and interactive user experience, ensuring optimal performance across devices, screen sizes, and resolutions, including desktop and mobile. The project aimed to create a site with a unique scroll-based flow starting from the middle, where the two halves meet, making the experience engaging and memorable.",
    industry: "Fashion",
    deliverables: ["Website"],
    visit_url: "https://paradox-platform.vercel.app",
    client_overview: "Paradox Platform is an innovative website designed to promote two distinct clothing brands. The siteâ€™s concept centres on a unique and engaging dual-brand representation. By seamlessly dividing the website into two thematic halves, the platform creates a visual and narrative connection between the two brands, driving traffic and enhancing brand identity.",
    problem: "The client needed to represent two highly contrasting fashion lines (minimalist/heavenly vs. dark/grunge/hellish) in a single platform, while retaining distinct identities for both. The user experience needed to be highly engaging and break standard vertical layouts.",
    solution: "We built an interactive, split-screen landing page using Next.js and Framer Motion. The user begins at a central axis and can slide or scroll upwards into a bright, sleek 'Heaven' interface, or downwards into a dark, industrial 'Hell' interface. Each zone has separate catalogs and interactive showcases.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/Z_utaevxEdbNO-hF_image01.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#EF4444", name: "Red Crimson" },
      { hex: "#000000", name: "Jet Black" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    typography: [
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/Z_utaevxEdbNO-hF_image01.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "Would definitely work with you again in the future. They were able to do what I was looking for and completed it in a reasonable amount of time and were very good at keeping me in the loop throughout the whole thing.",
    feedback_author: "Bogdan Miller",
    feedback_company: "Founder of Paradox Platform",
    feedback_logo: "https://images.prismic.io/creativo-code-official/Z_u7JOvxEdbNO-iL_Untitegegled.png?auto=format%2Ccompress&fit=max&w=384"
  },
  "clover-apparel": {
    title: "Clover Apparel Solution",
    subtitle: "E-commerce site for an apparel business",
    icon: "",
    hero_mockup: "https://images.prismic.io/creativo-code-official/ZvbyXrVsGrYSwFm7_Frame212.png?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #1E293B 40.15%, rgba(0,0,0,0.00) 78.1%)",
    theme_color: "#1E293B",
    overview: "Clover Apparel Solution is a modern B2B/B2C apparel manufacturing and e-commerce platform. They needed a highly polished digital catalog and store interface to connect with retail buyers and showcase their custom clothing solutions.",
    industry: "E-commerce / Retail",
    deliverables: ["UI/UX", "Web Development"],
    visit_url: "",
    client_overview: "Clover Apparel is a manufacturer of premium custom garments, offering wholesale clothing solutions, custom prints, and material sourcing for global retailers.",
    problem: "The client wanted a clean, user-friendly digital catalog that would showcase their massive inventory of custom cuts, colors, and prints, with a streamlined ordering process for wholesale B2B purchases.",
    solution: "We designed and developed a fast, responsive e-commerce web app using React, Next.js, and Tailwind CSS. The solution features high-fidelity product cards, interactive customization filters, and an optimized cart checkout flow for bulk B2B ordering.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/ZvbyXrVsGrYSwFm7_Frame212.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#1E293B", name: "Slate Dark" },
      { hex: "#10B981", name: "Mint Emerald" },
      { hex: "#FFFFFF", name: "White" }
    ],
    typography: [
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/ZvbyXrVsGrYSwFm7_Frame212.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "CreativoCode did an exceptional job building our clothing brand's web store. The e-commerce flow is extremely clean, and their attention to mobile responsiveness is outstanding.",
    feedback_author: "Clover Team",
    company: "Clover Apparel Solution",
    feedback_logo: ""
  },
  "pk-wedding": {
    title: "P&K Wedding Invitation",
    subtitle: "Wedding invitation website",
    icon: "",
    hero_mockup: "https://images.prismic.io/creativo-code-official/ZvW7prVsGrYSwDUg_Frame209.png?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #8B5CF6 40.15%, rgba(0,0,0,0.00) 78.1%)",
    theme_color: "#8B5CF6",
    overview: "The goal was to design and develop a digital web invitation for Paul and Karen's wedding invitation. They wanted it to be visually breathtaking, responsive, and provide interactive RSVP forms for their guests.",
    industry: "Entertainment / Events",
    deliverables: ["Creative Development", "Graphic Design"],
    visit_url: "",
    client_overview: "Paul and Karen wanted a digital-first wedding invitation to share their story, event schedule, and collect guest details dynamically across different continents.",
    problem: "Traditional paper invitations are slow and do not support dynamic schedule changes, interactive countdowns, or instant RSVP logging.",
    solution: "We designed a beautifully animated single-page application using Next.js, Framer Motion, and Tailwind CSS. The design has custom transitions, interactive RSVPs, and maps integration for venue navigation.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/ZvW7prVsGrYSwDUg_Frame209.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#8B5CF6", name: "Lavender Purple" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    typography: [
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/ZvW7prVsGrYSwDUg_Frame209.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "The website was absolutely stunning. All our guests loved the custom animations and the RSVP flow worked flawlessly! Thank you CreativoCode!",
    feedback_author: "Paul & Karen",
    company: "P&K Wedding",
    feedback_logo: ""
  },
  "ka-wedding": {
    title: "K&A Wedding Invitation",
    subtitle: "Wedding invitation website",
    icon: "",
    hero_mockup: "https://images.prismic.io/creativo-code-official/ZvXDTbVsGrYSwDW9_Frame211.png?auto=format%2Ccompress&fit=max&w=3840",
    hero_gradient: "linear-gradient(180deg, #F43F5E 40.15%, rgba(0,0,0,0.00) 78.1%)",
    theme_color: "#F43F5E",
    overview: "A digital web invitation for Kevin and Ashley's wedding. It features bespoke illustrations, smooth scrolling parallax sections, and a responsive timeline of events.",
    industry: "Entertainment / Events",
    deliverables: ["Creative Development", "Graphic Design"],
    visit_url: "",
    client_overview: "Kevin and Ashley wanted a modern and artistic digital invite that matched their rustic-chic wedding theme.",
    problem: "The couple needed to share maps, dress codes, and event timings for three separate days of celebrations in an organized and visually stunning manner.",
    solution: "We hardcoded a custom wedding landing page with Framer Motion scroll indicators, interactive dress-code panels, and dynamic event RSVP submission hooks.",
    solution_mockup: "https://images.prismic.io/creativo-code-official/ZvXDTbVsGrYSwDW9_Frame211.png?auto=format%2Ccompress&fit=max&w=3840",
    colors: [
      { hex: "#F43F5E", name: "Rose Pink" },
      { hex: "#FFFFFF", name: "White" }
    ],
    typography: [
      { name: "Inter", image: "https://images.prismic.io/creativo-code-official/ZuvtZbVsGrYSvlNW_Dreamshift-font.png?auto=format%2Ccompress&fit=max&w=1200" }
    ],
    final_output: "https://images.prismic.io/creativo-code-official/ZvXDTbVsGrYSwDW9_Frame211.png?auto=format%2Ccompress&fit=max&w=3840",
    feedback_text: "Working with CreativoCode was an absolute joy. They captured our rustic-chic theme perfectly in the website and made the RSVP process so simple for our family.",
    feedback_author: "Kevin & Ashley",
    company: "K&A Wedding",
    feedback_logo: ""
  }
};

const ProjectDetailPage = ({ projectUid }) => {
  const project = projectsDetailsData[projectUid];

  if (!project) {
    return (
      <div className="bg-[#141414] min-h-screen text-white font-sans flex flex-col justify-between select-none">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-display font-bold text-red-500 mb-4">Project Not Found</h1>
          <p className="text-stone-400 mb-8 max-w-md font-light">The case study you are looking for does not exist or has not been configured.</p>
          <Link href="/projects" className="bg-[#FF0055] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all">Back to Projects</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#141414] min-h-screen text-white font-sans flex flex-col justify-between select-none relative overflow-x-hidden"
    >
      <Navbar />

      <div className="font-sans text-white flex flex-col gap-y-28 pt-10 lg:pt-20">

        {/* â”€â”€ Hero Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="w-full mt-[-200px]">
          <div className="flex flex-col gap-8 items-center pt-[150px]" style={{ background: project.hero_gradient }}>

            {/* Title row */}
            <div className="flex lg:items-center lg:justify-between project-page-layout flex-col lg:flex-row justify-start items-start gap-y-5 gap-x-14 max-lg:py-10 max-sm:mt-8">
              <div className="flex flex-col gap-3 w-fit">
                <h1 className="text-white font-semibold w-fit text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                  {project.title}
                </h1>
                <h1 className="text-white font-sans text-xl md:text-2xl lg:text-3xl w-fit font-light opacity-90">
                  {project.subtitle}
                </h1>
              </div>
              {project.icon && (
                <img
                  src={project.icon}
                  alt=""
                  className="w-28 md:w-36 lg:w-40 max-lg:hidden object-contain"
                />
              )}
            </div>

            {/* Large Mockup */}
            {project.hero_mockup && (
              <div className="lg:px-12 overflow-hidden w-full flex md:aspect-auto aspect-[1.2]">
                <div className="overflow-hidden lg:rounded-3xl h-[90vh] w-full" style={{ transform: 'translateZ(0)' }}>
                  <img
                    src={project.hero_mockup}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100"
                    style={{ backfaceVisibility: 'hidden', perspective: '1000px' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Overview Grid */}
          <div className="mt-20 sm:mt-28 flex flex-col lg:grid grid-cols-6 project-page-layout gap-x-36 gap-y-16">
            <div className="flex flex-col gap-10 col-span-4">
              <h3 className="text-white font-semibold text-4xl md:text-6xl lg:text-6xl">
                Project Overview
              </h3>
              <p className="font-sans text-xl md:text-3xl leading-loose text-[#C0C0C0]">
                {project.overview}
              </p>
            </div>

            <div className="col-span-2 text-2xl flex gap-8 flex-col max-lg:flex-row max-lg:justify-between max-md:flex-col">
              <div className="flex flex-col gap-y-10">
                {project.industry && (
                  <div>
                    <h6 className="text-xl mb-1 text-gray-500">Industry</h6>
                    <p>{project.industry}</p>
                  </div>
                )}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div>
                    <h6 className="text-xl mb-1 text-gray-500">Deliverables</h6>
                    <ul className="list-none space-y-2">
                      {project.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.visit_url && (
                  <a
                    href={project.visit_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: project.theme_color || '#FF0055' }}
                    className="px-8 flex items-center gap-1 py-4 rounded-full w-full justify-center sm:w-fit h-fit hover:brightness-125 transition-all duration-200"
                  >
                    Visit Site
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mb-0.5 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          <hr className="mx-6 md:mx-16 sm:mx-24 my-16 md:my-24 opacity-20" />
        </section>

        {/* â”€â”€ Client Overview â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {project.client_overview && (
          <section className="w-full">
            <div className="flex flex-col gap-y-5 lg:gap-y-7 mt-16 lg:mt-28">
              <div className="lg:grid flex flex-col grid-cols-6 project-page-layout gap-x-36 gap-y-8">
                <h3 className="text-white font-semibold text-4xl col-span-2">Client Overview</h3>
                <p className="font-sans text-xl md:text-2xl leading-relaxed text-[#C0C0C0] col-span-4">
                  {project.client_overview}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* â”€â”€ The Problem â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {project.problem && (
          <section className="w-full">
            <div className="flex flex-col gap-y-5 lg:gap-y-7">
              <div className="lg:grid flex flex-col grid-cols-6 project-page-layout gap-x-36 gap-y-8">
                <h3 className="text-white font-semibold text-4xl col-span-2">The problem</h3>
                <p className="font-sans text-xl md:text-2xl leading-relaxed text-[#C0C0C0] col-span-4">
                  {project.problem}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* â”€â”€ Our Solution â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {project.solution && (
          <section className="w-full">
            <div className="flex flex-col gap-y-5 lg:gap-y-7 mb-16 lg:mb-28">
              <div className="lg:grid flex flex-col grid-cols-6 project-page-layout gap-x-36 gap-y-8">
                <h3 className="text-white font-semibold text-4xl col-span-2">Our Solution</h3>
                <p className="font-sans text-xl md:text-2xl leading-relaxed text-[#C0C0C0] col-span-4 whitespace-pre-line">
                  {project.solution}
                </p>
              </div>
              {project.solution_mockup && (
                <div className="lg:px-12 overflow-hidden w-full flex mt-10">
                  <div className="overflow-hidden h-full lg:rounded-3xl w-full" style={{ transform: 'translateZ(0)' }}>
                    <img
                      src={project.solution_mockup}
                      alt="Our Solution Mockup"
                      className="w-full h-full object-cover scale-100"
                      style={{ backfaceVisibility: 'hidden', perspective: '1000px' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* â”€â”€ Design System â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {project.colors && project.colors.length > 0 && (
          <section className="flex flex-col gap-1 project-page-layout">
            {/* Header row */}
            <div className="flex flex-row gap-x-10 items-center">
              <h4 className="text-white font-semibold text-4xl col-span-2 whitespace-nowrap">The Design System</h4>
              <hr className="opacity-20 w-full" />
            </div>

            {/* Colors */}
            <div className="flex flex-col gap-3 lg:basis-1/2">
              <h5 className="text-white my-6 font-semibold text-3xl md:text-4xl lg:text-5xl lg:mt-16">Colors</h5>

              {/* Split into two halves: first half = Primary, second half = Secondary */}
              {(() => {
                const mid = Math.ceil(project.colors.length / 2);
                const primary = project.colors.slice(0, mid);
                const secondary = project.colors.slice(mid);
                return (
                  <div className="flex flex-col gap-y-8 gap-x-8 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col gap-3">
                      <h6 className="font-sans text-2xl text-[#C0C0C0]">Primary Colors</h6>
                      <div className="flex flex-wrap flex-col gap-4">
                        {primary.map((color) => {
                          const isDark = parseInt(color.hex.replace('#',''), 16) < 0x888888 * 3;
                          return (
                            <div
                              key={color.hex}
                              className="h-28 justify-start flex flex-row items-center gap-4 px-10 rounded-full duration-300 border border-transparent hover:border-white group"
                              style={{ backgroundColor: color.hex, minWidth: '200px', width: '10%' }}
                            >
                              <div
                                className="rounded-full w-0 h-0 block opacity-10 duration-300 group-hover:w-8 group-hover:h-8"
                                style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}
                              />
                              <div className="flex flex-col gap-1">
                                <p className={`opacity-70 ${isDark ? 'text-white' : 'text-black'}`}>{color.name}</p>
                                <p className={isDark ? 'text-white' : 'text-black'}>{color.hex}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {secondary.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <h6 className="font-sans text-2xl text-[#C0C0C0]">Secondary Colors</h6>
                        <div className="flex flex-wrap flex-col gap-4">
                          {secondary.map((color) => {
                            const isDark = parseInt(color.hex.replace('#',''), 16) < 0x888888 * 3;
                            return (
                              <div
                                key={color.hex}
                                className="h-28 justify-start flex flex-row items-center gap-4 px-10 rounded-full duration-300 border border-transparent hover:border-white group"
                                style={{ backgroundColor: color.hex, minWidth: '200px', width: '10%' }}
                              >
                                <div
                                  className="rounded-full w-0 h-0 block opacity-10 duration-300 group-hover:w-8 group-hover:h-8"
                                  style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}
                                />
                                <div className="flex flex-col gap-1">
                                  <p className={`opacity-70 ${isDark ? 'text-white' : 'text-black'}`}>{color.name}</p>
                                  <p className={isDark ? 'text-white' : 'text-black'}>{color.hex}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* â”€â”€ Typography â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {project.typography && project.typography.length > 0 && (
          <section className="project-page-layout -mt-14">
            <div className="flex flex-col gap-3 lg:basis-1/2">
              <h5 className="text-white my-6 font-semibold text-3xl md:text-4xl lg:text-5xl lg:mt-16">Typography</h5>
              <div className="flex flex-col gap-y-3">
                {project.typography.map((typo, idx) => (
                  <div key={typo.name} className="flex flex-col gap-y-3">
                    <div className="flex">
                      <div className="grid stack-parent w-full">
                        {/* Font name overlaid on left */}
                        <div className="stack-child w-full h-full flex flex-col gap-y-3 justify-center items-start -translate-y-7">
                          <h6 className="font-sans text-2xl text-[#C0C0C0] hidden first:flex">
                            {idx === 0 ? 'Primary Typo' : 'Secondary Typo'}
                          </h6>
                          <p className="text-white font-semibold text-6xl sm:text-7xl md:text-8xl w-fit">{typo.name}</p>
                        </div>
                        {/* Font image on the right */}
                        <div className="stack-child w-full h-fit flex justify-end items-center py-5">
                          <img
                            src={typo.image}
                            alt={typo.name}
                            className="w-48 sm:w-64 md:w-96 h-fit mx-5 lg:mx-10 opacity-75 translate-y-5 sm:translate-y-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* â”€â”€ Final Output â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {project.final_output && (
          <section className="flex flex-col gap-y-10 w-screen">
            <h5 className="text-white font-semibold text-5xl md:text-6xl lg:text-5xl project-page-layout">The Final Output</h5>
            <div className="lg:px-12 overflow-hidden w-full flex mt-10">
              <div className="overflow-hidden lg:rounded-3xl w-full h-fit" style={{ transform: 'translateZ(0)' }}>
                <img
                  src={project.final_output}
                  alt="The Final Output"
                  className="w-full h-full object-cover scale-100"
                  style={{ backfaceVisibility: 'hidden', perspective: '1000px' }}
                />
              </div>
            </div>
          </section>
        )}

        {/* â”€â”€ Client Feedback â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {project.feedback_text && (
          <section className="project-page-layout flex flex-col gap-y-10">
            <h5 className="text-white font-semibold text-5xl md:text-6xl lg:text-5xl">Client Feedback</h5>
            <div className="rounded-3xl bg-[#1B1D20] gap-3 xl:gap-6 flex-col lg:flex-row flex group p-10">
              {/* Logo â€” desktop */}
              {project.feedback_logo && (
                <div className="hidden lg:block">
                  <img
                    src={project.feedback_logo}
                    alt={project.feedback_company}
                    className="rounded-xl object-cover object-center w-16 lg:w-28 aspect-square"
                  />
                </div>
              )}
              <div className="flex flex-col gap-y-5 mx-auto w-full">
                <p className="text-gray-500 text-2xl lg:text-3xl leading-relaxed">
                  <span className="text-3xl lg:text-4xl align-baseline pr-1">&quot;</span>
                  <span>{project.feedback_text}</span>
                  <span className="text-3xl lg:text-4xl align-baseline pl-1">&quot;</span>
                </p>
                <div className="flex gap-4">
                  {/* Logo â€” mobile */}
                  {project.feedback_logo && (
                    <div className="lg:hidden">
                      <img
                        src={project.feedback_logo}
                        alt={project.feedback_company}
                        className="rounded-xl object-cover object-center w-16 aspect-square"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row gap-x-1.5 text-lg">
                    <p className="text-white">{project.feedback_author},</p>
                    <p className="text-gray-400">{project.feedback_company}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <WorkTogetherMarquee />
      <Footer />
    </motion.div>
  );
};


export default ProjectDetailPage;
