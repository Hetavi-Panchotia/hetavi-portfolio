import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = () => {
  const { pathname } = useLocation();

  const seoData = {
    '/': {
      title: 'Hetavi Panchotia | Software Developer & Creative Technologist',
      description: 'Portfolio of Hetavi Panchotia, a Software Developer dedicated to building impactful, interactive, and high-performance applications with modern technologies.',
      keywords: 'Hetavi Panchotia, Software Developer, Portfolio, React Developer, Full Stack, Creative Technologist, Web Development',
    },
    '/hero': {
      title: 'Hetavi Panchotia | Software Developer & Creative Technologist',
      description: 'Portfolio of Hetavi Panchotia, a Software Developer dedicated to building impactful, interactive, and high-performance applications with modern technologies.',
      keywords: 'Hetavi Panchotia, Software Developer, Portfolio, React Developer, Full Stack, Creative Technologist, Web Development',
    },
    '/about': {
      title: 'About Me | Hetavi Panchotia',
      description: 'Learn more about Hetavi Panchotia\'s background, passion for problem-solving, and professional journey in software development.',
      keywords: 'Hetavi Panchotia, Software Engineer background, about me, developer journey, Hetavi Panchotia profile',
    },
    '/skills': {
      title: 'Technical Skills | Hetavi Panchotia',
      description: 'Explore the technical expertise of Hetavi Panchotia, ranging from frontend frameworks like React to backend technologies and modern tools.',
      keywords: 'Hetavi Panchotia skills, React, JavaScript, Node.js, Technical Stack, Web Development, Programming Languages',
    },
    '/projects': {
      title: 'Featured Projects | Hetavi Panchotia',
      description: 'Discover a showcase of innovative projects built by Hetavi Panchotia, featuring web applications, AI integrations, and creative solutions.',
      keywords: 'Hetavi Panchotia projects, Portfolio showcase, software projects, React apps, GitHub projects, Web Apps',
    },
    '/certificates': {
      title: 'Certifications & Achievements | Hetavi Panchotia',
      description: 'A collection of professional certifications and academic achievements earned by Hetavi Panchotia in the field of technology.',
      keywords: 'Hetavi Panchotia certifications, achievements, professional development, tech certificates, awards',
    },
    '/education': {
      title: 'Education & Learning | Hetavi Panchotia',
      description: 'Details about the academic foundation and educational background of Hetavi Panchotia.',
      keywords: 'Hetavi Panchotia education, academic background, university, degrees, learning path',
    },
    '/contact': {
      title: 'Get In Touch | Hetavi Panchotia',
      description: 'Contact Hetavi Panchotia for collaborations, inquiries, or just to say hello. Let\'s build something amazing together!',
      keywords: 'Contact Hetavi Panchotia, Hire Developer, Software Engineer contact, collaboration, Get in touch',
    },
    '/designs': {
      title: 'Figma Designs | Hetavi Panchotia',
      description: 'Explore the creative UI/UX designs, prototypes, and visual experiments crafted by Hetavi Panchotia.',
      keywords: 'Hetavi Panchotia designs, Figma gallery, UI/UX design, web design, app design, prototypes',
    },
    '/hackathons': {
      title: 'Hackathon Journey | Hetavi Panchotia',
      description: 'Tactical experience logged across multiple high-stakes development arenas and hackathons.',
      keywords: 'Hackathons, Hetavi Panchotia, coding competitions, hackathon projects, competitive programming',
    },
    '/achievements': {
      title: 'Key Achievements | Hetavi Panchotia',
      description: 'Professional milestones, academic excellence, and technical accolades earned by Hetavi Panchotia.',
      keywords: 'Hetavi Panchotia achievements, awards, milestones, honors, credentials',
    },
  };

  const currentSEO = seoData[pathname] || seoData['/'];
  const siteUrl = 'https://hetavipanchotia-sigma.vercel.app'; // From robots.txt/sitemap
  const profileImage = 'https://res.cloudinary.com/dob3ay5xe/image/upload/v1770363238/Screenshot_2026-02-06_130334_sxhzkg.png';

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <meta name="author" content="Hetavi Panchotia" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:image" content={profileImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}${pathname}`} />
      <meta property="twitter:title" content={currentSEO.title} />
      <meta property="twitter:description" content={currentSEO.description} />
      <meta property="twitter:image" content={profileImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
    </Helmet>
  );
};

export default SEO;
