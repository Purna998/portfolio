import React, { useState, useEffect } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Database,
  Server,
  Globe,
  Brain,
  Users,
  Mountain,
  Trophy,
  BookOpen,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      // Scroll animations
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    'Programming Languages': [
      { name: 'Python', icon: <Code style={{ width: '20px', height: '20px' }} /> },
      { name: 'JavaScript', icon: <Code style={{ width: '20px', height: '20px' }} /> },
      { name: 'Java', icon: <Code style={{ width: '20px', height: '20px' }} /> },
      { name: 'HTML/CSS', icon: <Globe style={{ width: '20px', height: '20px' }} /> }
    ],
    'Frameworks & Libraries': [
      { name: 'React', icon: <Code style={{ width: '20px', height: '20px' }} /> },
      { name: 'Django', icon: <Server style={{ width: '20px', height: '20px' }} /> },
      { name: 'Django REST', icon: <Server style={{ width: '20px', height: '20px' }} /> },
      { name: 'Tailwind CSS', icon: <Globe style={{ width: '20px', height: '20px' }} /> }
    ],
    'Technologies': [
      { name: 'AWS', icon: <Server style={{ width: '20px', height: '20px' }} /> },
      { name: 'WebSockets', icon: <Globe style={{ width: '20px', height: '20px' }} /> },
      { name: 'JWT Auth', icon: <Code style={{ width: '20px', height: '20px' }} /> },
      { name: 'Google Maps API', icon: <MapPin style={{ width: '20px', height: '20px' }} /> }
    ],
    'Data Science & AI': [
      { name: 'Machine Learning', icon: <Brain style={{ width: '20px', height: '20px' }} /> },
      { name: 'Data Preprocessing', icon: <Database style={{ width: '20px', height: '20px' }} /> },
      { name: 'Data Structures', icon: <Code style={{ width: '20px', height: '20px' }} /> },
      { name: 'Artificial Intelligence', icon: <Brain style={{ width: '20px', height: '20px' }} /> }
    ]
  };

  const projects = [
    {
      title: 'StudVerse',
      description: 'A full-stack authentication chat application with real-time messaging, Google Maps integration, location-based friend search, and modern UI themes.',
      technologies: ['React', 'Django', 'WebSockets', 'Google Maps', 'JWT'],
      features: ['Real-time messaging', 'Location-based search', 'Theme management', 'User authentication']
    }
  ];

  const experiences = [
    {
      title: 'President',
      company: 'LTU TechGeeks Nepal',
      description: 'Successfully organized inter-college quiz competition and led technical community initiatives.',
      icon: <Users style={{ width: '24px', height: '24px' }} />
    },
    {
      title: 'HTML Developer',
      company: 'Professional Experience',
      description: 'Developed and maintained web applications using modern HTML, CSS, and JavaScript.',
      icon: <Code style={{ width: '24px', height: '24px' }} />
    },
    {
      title: 'Trek Organizer',
      company: 'Poon Hill Expedition',
      description: 'Planned and managed trekking trip for 30 students and 2 professors without external guides.',
      icon: <Mountain style={{ width: '24px', height: '24px' }} />
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#111827',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #e5e7eb',
      zIndex: 50
    },
    navContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    },
    navFlex: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '64px',
      position: 'relative'
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '20px',
      color: '#2563eb'
    },
    desktopMenu: {
      display: 'none',
      gap: '32px'
    },
    // ...existing code...
navButton: {
  padding: '8px 12px',
  fontSize: '14px',
  fontWeight: '500',
  transition: 'color 0.3s',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#374151',
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'transparent'
},
navButtonActive: {
  color: '#2563eb',
  borderBottomColor: '#2563eb'
},
// ...existing code...
    mobileMenuButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      background: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '6px',
      cursor: 'pointer',
      minWidth: '40px',
      minHeight: '40px',
      transition: 'all 0.2s ease',
      zIndex: 10
    },
    mobileMenu: {
      padding: '16px 0',
      borderTop: '1px solid #e5e7eb'
    },
    mobileMenuItem: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      padding: '8px 16px',
      color: '#374151',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    hero: {
      paddingTop: '64px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f9fafb'
    },
    heroContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '80px 16px'
    },
    heroGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '48px',
      alignItems: 'center'
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '24px',
      color: '#374151',
      marginBottom: '24px'
    },
    heroDescription: {
      fontSize: '18px',
      color: '#6b7280',
      marginBottom: '32px',
      lineHeight: '1.6'
    },
    buttonGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    },
    primaryButton: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '8px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    secondaryButton: {
      border: '2px solid #2563eb',
      color: '#2563eb',
      padding: '12px 32px',
      borderRadius: '8px',
      fontWeight: '600',
      background: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    heroImage: {
      display: 'flex',
      justifyContent: 'center'
    },
    heroImageCircle: {
      width: '320px',
      height: '320px',
      backgroundColor: '#dbeafe',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    chevronDown: {
      position: 'absolute',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      animation: 'bounce 2s infinite'
    },
    section: {
      padding: '80px 0'
    },
    sectionGray: {
      padding: '80px 0',
      backgroundColor: '#f9fafb'
    },
    sectionContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 16px'
    },
    sectionTitle: {
      fontSize: '36px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '64px'
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '48px'
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '24px',
      color: '#2563eb'
    },
    skillCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    },
    skillGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    },
    skillItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px',
      borderRadius: '8px',
      backgroundColor: '#f9fafb',
      transition: 'background-color 0.3s'
    },
    projectCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      transition: 'box-shadow 0.3s'
    },
    projectTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#2563eb'
    },
    projectDescription: {
      color: '#6b7280',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '8px',
      marginBottom: '24px'
    },
    feature: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    featureDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#2563eb',
      borderRadius: '50%'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '24px'
    },
    techTag: {
      padding: '4px 12px',
      backgroundColor: '#dbeafe',
      color: '#1e40af',
      borderRadius: '9999px',
      fontSize: '14px',
      fontWeight: '500'
    },
    experienceCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '24px'
    },
    experienceIcon: {
      backgroundColor: '#dbeafe',
      padding: '12px',
      borderRadius: '8px',
      color: '#2563eb'
    },
    experienceTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px'
    },
    experienceCompany: {
      color: '#2563eb',
      fontWeight: '600',
      marginBottom: '12px'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '32px'
    },
    contactCard: {
      textAlign: 'center',
      padding: '24px',
      borderRadius: '12px',
      backgroundColor: '#f9fafb'
    },
    contactIcon: {
      backgroundColor: '#dbeafe',
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      color: '#2563eb'
    },
    footer: {
      backgroundColor: '#111827',
      color: 'white',
      padding: '48px 0'
    },
    footerTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '48px'
    },
    socialLink: {
      backgroundColor: '#dbeafe',
      padding: '12px',
      borderRadius: '50%',
      color: '#2563eb',
      textDecoration: 'none',
      transition: 'background-color 0.3s'
    }
  };

  // Add responsive styles
  const responsiveStyles = `
    /* Mobile First - Base styles already defined above */
    
    /* Small screens */
    @media (max-width: 640px) {
      .nav-content { padding: 0 16px !important; }
      .nav-flex { padding: 0 !important; }
      .logo { font-size: 18px !important; }
      .mobile-menu-button { 
        padding: 12px !important;
        margin-right: -8px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-width: 44px !important;
        min-height: 44px !important;
        background-color: #f3f4f6 !important;
        border-radius: 8px !important;
        border: 1px solid #e5e7eb !important;
      }
      .mobile-menu-button:active {
        background-color: #e5e7eb !important;
      }
      .hero-content { padding: 40px 16px !important; }
      .section-content { padding: 0 16px !important; }
      .hero-title { font-size: 36px !important; }
      .hero-subtitle { font-size: 20px !important; }
      .hero-description { font-size: 16px !important; }
      .section-title { font-size: 28px !important; }
      .button-group { flex-direction: column !important; }
      .button-group button { width: 100% !important; justify-content: center !important; }
      .hero-image-circle { width: 200px !important; height: 200px !important; }
      .hero-image-circle svg { width: 100px !important; height: 100px !important; }
      .skill-grid { grid-template-columns: 1fr !important; }
      .experience-card { flex-direction: column !important; text-align: center !important; }
    }

    /* Medium screens (tablets) */
    @media (min-width: 640px) {
      .nav-content { padding: 0 16px !important; }
      .hero-content { padding: 60px 16px !important; }
      .section-content { padding: 0 16px !important; }
    }

    /* Large tablets and small desktops */
    @media (min-width: 768px) {
      .desktop-menu { display: flex !important; }
      .mobile-menu-button { display: none !important; }
      .hero-grid { grid-template-columns: 1fr 1fr !important; }
      .hero-title { font-size: 56px !important; }
      .hero-subtitle { font-size: 28px !important; }
      .grid-2 { grid-template-columns: 1fr 1fr !important; }
      .contact-grid { grid-template-columns: 1fr 1fr 1fr !important; }
      .feature-grid { grid-template-columns: 1fr 1fr !important; }
      .nav-content { padding: 0 24px !important; }
      .hero-content { padding: 80px 24px !important; }
      .section-content { padding: 0 24px !important; }
      .button-group { flex-direction: row !important; }
      .experience-card { flex-direction: row !important; text-align: left !important; }
    }

    /* Large desktops */
    @media (min-width: 1024px) {
      .skills-grid { grid-template-columns: 1fr 1fr !important; }
      .hero-title { font-size: 64px !important; }
      .hero-subtitle { font-size: 32px !important; }
      .nav-content { padding: 0 32px !important; }
      .hero-content { padding: 80px 32px !important; }
      .section-content { padding: 0 32px !important; }
    }

    /* Extra large screens */
    @media (min-width: 1280px) {
      .hero-grid { gap: 64px !important; }
      .grid-2 { gap: 64px !important; }
    }

    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% { transform: translateY(0) translateX(-50%); }
      40%, 43% { transform: translateY(-30px) translateX(-50%); }
      70% { transform: translateY(-15px) translateX(-50%); }
      90% { transform: translateY(-4px) translateX(-50%); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(60px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-60px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(60px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .animate-on-scroll {
      opacity: 0;
      transition: all 0.8s ease-out;
    }

    .animate-on-scroll.animated {
      opacity: 1;
    }

    .fade-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }

    .fade-left {
      animation: fadeInLeft 0.8s ease-out forwards;
    }

    .fade-right {
      animation: fadeInRight 0.8s ease-out forwards;
    }

    .scale-in {
      animation: scaleIn 0.8s ease-out forwards;
    }

    .skill-item:hover {
      background-color: #eff6ff !important;
    }

    .primary-button:hover {
      background-color: #1d4ed8 !important;
    }

    .secondary-button:hover {
      background-color: #2563eb !important;
      color: white !important;
    }

    .project-card:hover {
      box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
    }

    .mobile-menu-item:hover {
      color: #2563eb !important;
      background-color: #f9fafb !important;
    }

    .mobile-menu-button:hover {
      background-color: #f3f4f6 !important;
      border-color: #d1d5db !important;
    }

    .mobile-menu-button:active {
      background-color: #e5e7eb !important;
      transform: scale(0.95) !important;
    }

    .social-link:hover {
      background-color: #bfdbfe !important;
    }
  `;

  

  return (
    <div style={styles.container}>
      <style>{responsiveStyles}</style>
      
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent} className="nav-content">
          <div style={styles.navFlex} className="nav-flex">
            <div style={styles.logo} className="logo">Purna Acharya</div>
            
            {/* Desktop Menu */}
            <div style={styles.desktopMenu} className="desktop-menu">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={{
                    ...styles.navButton,
                    ...(activeSection === item.toLowerCase() ? styles.navButtonActive : {})
                  }}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={styles.mobileMenuButton}
              className="mobile-menu-button"
            >
              {isMenuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div style={styles.mobileMenu}>
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  style={styles.mobileMenuItem}
                  className="mobile-menu-item"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent} className="hero-content">
          <div style={styles.heroGrid} className="hero-grid">
            <div className="animate-on-scroll fade-left">
              <h1 style={styles.heroTitle} className="hero-title">
                Hi, I'm <span style={{ color: '#2563eb' }}>Purna</span>
              </h1>
              <h2 style={styles.heroSubtitle} className="hero-subtitle">
                CS & AI Student | Full-Stack Developer | Tech Leader
              </h2>
              <p style={styles.heroDescription} className="hero-description">
                Passionate about building innovative solutions with cutting-edge technologies. 
                Currently pursuing BTech in Computer Science & Artificial Intelligence while 
                leading tech communities and developing impactful projects.
              </p>
              <div style={styles.buttonGroup} className="button-group">
                <button
                  onClick={() => scrollToSection('projects')}
                  style={styles.primaryButton}
                  className="primary-button"
                >
                  View Projects <ExternalLink style={{ width: '16px', height: '16px' }} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  style={styles.secondaryButton}
                  className="secondary-button"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div style={styles.heroImage} className="animate-on-scroll fade-right">
  <div style={styles.heroImageCircle} className="hero-image-circle">
    <img
      src="./src/assets/profile.png"
      alt="Profile"
      style={{
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '4px solid #2563eb',
        background: '#fff'
      }}
    />
  </div>
</div>
          </div>
        </div>
        <div style={styles.chevronDown}>
          <ChevronDown style={{ width: '32px', height: '32px', color: '#9ca3af' }} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.sectionContent} className="section-content">
          <h2 style={styles.sectionTitle} className="animate-on-scroll fade-up section-title">About Me</h2>
          <div style={styles.grid2} className="grid-2">
            <div className="animate-on-scroll fade-left">
              <h3 style={styles.cardTitle}>Education & Background</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <BookOpen style={{ width: '24px', height: '24px', color: '#2563eb', marginTop: '4px' }} />
                  <div>
                    <p style={{ fontWeight: '600' }}>BTech in Computer Science & AI</p>
                    <p style={{ color: '#6b7280' }}>Currently pursuing advanced studies in CS and AI</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Award style={{ width: '24px', height: '24px', color: '#2563eb', marginTop: '4px' }} />
                  <div>
                    <p style={{ fontWeight: '600' }}>Class 12 Graduate</p>
                    <p style={{ color: '#6b7280' }}>Mathematics and Chemistry specialization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll fade-right">
              <h3 style={styles.cardTitle}>Leadership & Achievements</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Trophy style={{ width: '24px', height: '24px', color: '#2563eb', marginTop: '4px' }} />
                  <div>
                    <p style={{ fontWeight: '600' }}>President - LTU TechGeeks Nepal</p>
                    <p style={{ color: '#6b7280' }}>Leading technical community initiatives</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Mountain style={{ width: '24px', height: '24px', color: '#2563eb', marginTop: '4px' }} />
                  <div>
                    <p style={{ fontWeight: '600' }}>Adventure Trip Organizer</p>
                    <p style={{ color: '#6b7280' }}>Managed 30+ person Poon Hill expedition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '48px', textAlign: 'center' }} className="animate-on-scroll fade-up">
            <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '768px', margin: '0 auto', lineHeight: '1.6' }}>
              I'm passionate about leveraging technology to solve real-world problems. My journey spans 
              from organizing inter-college competitions to developing full-stack applications with modern 
              AI integration. I believe in continuous learning and sharing knowledge with the community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.sectionGray}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="animate-on-scroll fade-up">Technical Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} style={styles.skillCard} className={`animate-on-scroll ${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}>
                <h3 style={styles.cardTitle}>{category}</h3>
                <div style={styles.skillGrid}>
                  {skillList.map((skill) => (
                    <div key={skill.name} style={styles.skillItem} className="skill-item">
                      <div style={{ color: '#2563eb' }}>{skill.icon}</div>
                      <span style={{ fontWeight: '500' }}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="animate-on-scroll fade-up">Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectCard} className="project-card animate-on-scroll scale-in">
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontWeight: '600', marginBottom: '12px' }}>Key Features:</h4>
                  <div style={styles.featureGrid} className="feature-grid">
                    {project.features.map((feature, i) => (
                      <div key={i} style={styles.feature}>
                        <div style={styles.featureDot}></div>
                        <span style={{ color: '#374151' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={styles.techTags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.sectionGray}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="animate-on-scroll fade-up">Experience & Leadership</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp, index) => (
              <div key={index} style={styles.experienceCard} className={`animate-on-scroll ${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}>
                <div style={styles.experienceIcon}>
                  {exp.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={styles.experienceTitle}>{exp.title}</h3>
                  <p style={styles.experienceCompany}>{exp.company}</p>
                  <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="animate-on-scroll fade-up">Get In Touch</h2>
          <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }} className="animate-on-scroll fade-up">
              <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.6' }}>
                I'm always interested in hearing about new opportunities and projects. 
                Whether you want to discuss a potential collaboration or just say hello, 
                feel free to reach out!
              </p>
            </div>
            
            <div style={styles.contactGrid} className="contact-grid">
              <div style={styles.contactCard} className="animate-on-scroll fade-up">
                <div style={styles.contactIcon}>
                  <Mail style={{ width: '32px', height: '32px' }} />
                </div>
                <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Email</h3>
                <a href="mailto:acharyapurna2@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  acharyapurna2@gmail.com
                </a>
              </div>

              <div style={styles.contactCard} className="animate-on-scroll fade-up">
                <div style={styles.contactIcon}>
                  <Phone style={{ width: '32px', height: '32px' }} />
                </div>
                <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Phone</h3>
                <a href="tel:+9779804570445" style={{ color: '#2563eb', textDecoration: 'none' }}>
                  +977 9804570445
                </a>
              </div>

              <div style={styles.contactCard} className="animate-on-scroll fade-up">
                <div style={styles.contactIcon}>
                  <MapPin style={{ width: '32px', height: '32px' }} />
                </div>
                <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Location</h3>
                <p style={{ color: '#6b7280' }}>Nepal</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }} className="animate-on-scroll fade-up">
              <div style={styles.socialLinks}>
                <a href="#" style={styles.socialLink} className="social-link">
                  <Github style={{ width: '24px', height: '24px' }} />
                </a>
                <a href="#" style={styles.socialLink} className="social-link">
                  <Linkedin style={{ width: '24px', height: '24px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.sectionContent}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={styles.footerTitle}>Purna Acharya</h3>
            <p style={{ color: '#9ca3af', marginBottom: '24px' }}>
              Building the future with code, one project at a time.
            </p>
            <div style={{ borderTop: '1px solid #374151', paddingTop: '24px' }}>
              <p style={{ color: '#6b7280' }}>
                © 2025 Purna Acharya. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;