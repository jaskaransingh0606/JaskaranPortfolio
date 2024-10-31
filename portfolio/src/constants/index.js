export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Bytenamics',
      desc: 'The platform allows admins to create hackathons, manage participants, and supports both online and offline events. It also provides user registration and event joining functionalities.',
      subdesc:
        'Bytenamics is a comprehensive platform designed to streamline the creation and management of hackathons. For frontend creation React.js is used , it allows administrators to efficiently set up events, manage participant registrations, and monitor both online and offline hackathons',
      href: 'https://bytenamics.netlify.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      image: 'assets/bytenamics.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Mongo',
          path: '/assets/mongoLogo.png',
        },
        {
          id: 4,
          name: 'Nodejs',
          path: '/assets/js.png',
        },
      ],
    },
    {
      title: 'E-Com',
      desc: 'This e-commerce platform is developed using Spring Boot for the backend and React for the frontend, creating a dynamic and responsive shopping experience.',
      subdesc:
        'A full-stack e-commerce application built using Spring Boot for the backend and React for the frontend, with Spring Security for secure user authentication. The platform supports personalized user accounts with secure login and a seamless shopping experience, ensuring efficient communication between the frontend and backend.',
      href: 'https://github.com/jaskaransingh0606/ekart',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      image: 'assets/ecom.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/springbootLogo.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Carousel Website',
      desc: 'Developed using React, Framer, and Tailwind for smooth animations, responsive design, and a visually engaging user interface.',
      subdesc:
        'A visually engaging carousel website developed using React, Framer, and Tailwind CSS. The project emphasizes smooth animations and responsive design, featuring a responsive carousel component that adapts to various screen sizes. Key functionalities include mobile swipe gestures and desktop scroll transitions, enhancing the overall user experience with fluid navigation.',
      href: 'https://animated-crousel.netlify.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      image: 'assets/carousal.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Js',
          path: '/assets/js.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Nokia',
      pos: 'Software Developer Intern',
      duration: '(Oct 2024 - Present)',
      title: "In my role within Nokia’s Mobile Networks department, I am contributing to the ANESA project by developing backend solutions in Spring Boot to monitor and manage critical network functions. This experience is providing me with valuable insights into mobile network operations, and as the project evolves, I look forward to broadening my impact by taking on more complex challenges in network reliability and performance.",
      icon: '/assets/nokia.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'National Institute of Engineering',
      pos: 'Student',
      duration: '(Dec 2021 - Present)',
      title: "Currently completing my final year in the Information Science and Engineering (ISE) department, where I have developed a strong foundation in software development, data structures, and algorithmic problem-solving.",
      icon: '/assets/nieLogo.jpeg',
      animation: 'clapping',
    },
  ];