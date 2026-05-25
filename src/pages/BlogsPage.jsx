import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkTogetherMarquee from '../components/WorkTogetherMarquee';

const blogsData = [
  {
    title: "Your Guide to Building the Perfect Business Website",
    description: "Learn the key steps to creating a business website that drives growth and enhances your online presence. This guide covers everything from setting goals to choosing the right platform for your needs.",
    date: "Oct 19, 2024",
    image: "https://images.prismic.io/creativo-code-official/ZxOp7YF3NbkBXvB2_Group9024.png?auto=format,compress"
  },
  {
    title: "How to effectively use Calls to Action (CTAs) on your website.",
    description: "Discover the power of Calls to Action (CTAs) for your website! Learn how to create compelling, user-friendly CTAs that guide visitors, boost engagement, and drive conversions with actionable tips and best practices.",
    date: "Oct 19, 2024",
    image: "https://images.prismic.io/creativo-code-official/ZzS-_a8jQArT0zvh_Blogcard.png?auto=format,compress"
  },
  {
    title: "Mobile Optimization",
    description: "Discover why mobile optimization is essential for your business website. Learn how to improve user experience, boost engagement, and stay competitive in today's mobile-first world.",
    date: "Oct 19, 2024",
    image: "https://images.prismic.io/creativo-code-official/ZxOugYF3NbkBXvCc_Variant3.png?auto=format,compress"
  },
  {
    title: "Essential security measures for your business website.",
    description: "Your website is your digital storefront, so keep it safe! Learn essential website security tips, from SSL certificates to backups, to protect your business, customers, and reputation from cyber threats.",
    date: "Oct 19, 2024",
    image: "https://images.prismic.io/creativo-code-official/Z91k3TxkOkZ2kIWZ_WebsiteSecurityBlog-Card.png?auto=format,compress"
  },
  {
    title: "10 Tips to improve your website’s SEO",
    description: "Search engines ignoring your site? This guide covers 10 easy ways to improve your SEO, attract more traffic, and give your business the online visibility it deserves.",
    date: "Oct 19, 2024",
    image: "https://images.prismic.io/creativo-code-official/aIfreFGsbswqTXov_SEOblogcard.png?auto=format,compress"
  }
];

const BlogsPage = () => {
  return (
    <div className="bg-[#141414] min-h-screen text-white font-sans flex flex-col justify-between select-none relative overflow-x-clip">
      <Navbar />

      <main className="mt-16 md:mt-20 mx-auto max-w-[88rem] px-5 sm:px-10 md:px-16 lg:px-20 2xl:px-0 min-h-screen text-white w-full">
        
        {/* Header Titles */}
        <div className="flex flex-col gap-y-4 items-start select-none">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold leading-tight">
            Our <span className="text-[#FF0055]">Blogs.</span>
          </h1>
          <p className="text-xl md:text-2xl xl:text-3xl text-stone-400 font-light max-w-2xl leading-relaxed">
            Checkout our latest blogs
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:gap-5 lg:grid-cols-2 w-full">
          {blogsData.map((blog, index) => (
            <a
              key={index}
              href={`/blogs/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="flex flex-col gap-y-5 cursor-pointer group rounded-3xl overflow-hidden focus:scale-[0.99] transition-transform duration-300"
            >
              {/* Blog Image */}
              <div className="w-full overflow-hidden rounded-2xl aspect-video relative border border-white/5 shadow-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text details */}
              <div className="flex flex-col gap-y-3">
                <h4 className="text-2xl md:text-3xl font-display font-bold leading-snug text-white line-clamp-1 group-hover:text-[#FF0055] transition-colors duration-300">
                  {blog.title}
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-stone-400 line-clamp-3 font-light">
                  {blog.description}
                </p>
                
                {/* Meta Date */}
                <div className="text-stone-400 flex items-center gap-x-3 text-sm mt-1">
                  <div className="bg-stone-500 w-1.5 h-1.5 rounded-full"></div>
                  <p className="font-light">{blog.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </main>

      <WorkTogetherMarquee />
      <Footer />
    </div>
  );
};

export default BlogsPage;
