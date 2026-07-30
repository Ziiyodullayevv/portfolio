import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  LoaderCircle,
  MapPin,
  Send,
} from 'lucide-react';
import {
  motion,
  useReducedMotion,
  type Variants,
} from 'motion/react';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: easeOut },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.14 },
  },
};

const rowReveal: Variants = {
  hidden: { opacity: 0, x: -22 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.62, ease: easeOut },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const noMotion: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const revealViewport = { once: true, amount: 0.18 } as const;

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView='visible'
      viewport={revealViewport}
      variants={reduceMotion ? noMotion : fadeUp}
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    name: 'TMS Pro',
    description:
      'A complete transportation management platform for trucking companies to manage fleets, drivers, settlements, and finances.',
    link: 'https://tmspro.info/',
    stack: ['React.js', 'Supabase'],
    type: 'Logistics SaaS',
  },
  {
    name: 'Mock4IELTS',
    description:
      'A modern online platform that helps students prepare for IELTS and evaluate their progress through realistic practice.',
    link: 'https://mock4ielts.uz/',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'Tailwind'],
    type: 'EdTech',
  },
  {
    name: 'Lunch Drop',
    description:
      'A streamlined food-ordering experience designed to make discovering and ordering meals quick and intuitive.',
    link: 'https://lunchdrop.uz/',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'MUI'],
    type: 'FoodTech',
  },
  {
    name: 'Urokids',
    description:
      'A responsive digital learning experience created to make education more engaging and accessible for children.',
    link: 'https://www.urokids.uz/ru',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    type: 'Education',
  },
  {
    name: 'Emirates Academy',
    description:
      'A fast corporate website that presents the academy’s courses, services, and learning opportunities clearly.',
    link: 'https://emiratesacademy.uz/',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    type: 'Education',
  },
  {
    name: 'MyMotors Nurafshon',
    description:
      'An official automotive website combining a vehicle catalogue, dealership information, and customer enquiries.',
    link: 'https://www.mymotorsnurafshon.uz/',
    stack: ['Next.js', 'Tailwind'],
    type: 'Automotive',
  },
  {
    name: '1good',
    description:
      'A modern brand and commerce experience designed to make product discovery simple and visually engaging.',
    link: 'https://www.1good.uz/',
    stack: ['React', 'TypeScript', 'Tailwind'],
    type: 'E-commerce',
  },
  {
    name: 'Bulut Paper',
    description:
      'A corporate website showcasing the manufacturer’s products, capabilities, and business information.',
    link: 'https://www.bulutpaper.uz/',
    stack: ['React', 'TypeScript', 'Tailwind'],
    type: 'Corporate',
  },
];

const hardSkills = [
  ['React / Next.js', 93],
  ['TypeScript / JavaScript', 90],
  ['React Native', 85],
  ['HTML / CSS / Tailwind', 92],
  ['Redux / Zustand', 85],
  ['REST API / Integration', 83],
  ['Figma / design handoff', 80],
] as const;

const softSkills = [
  'Problem solving',
  'Explaining complex things simply',
  'Attention to detail',
  'Team collaboration',
  'Adaptability',
  'Problem framing',
  'Consistency',
  'Knowing when to ask',
];

const learningNow = [
  'Advanced React Patterns',
  'DevOps',
  'System Design',
  'Node.js',
];

const experience = [
  {
    period: '2023 — Present',
    role: 'Frontend Mentor',
    company: 'Mars IT',
    description:
      'Teaching HTML, CSS, JavaScript, and React through structured lessons and practical projects, helping students build strong frontend fundamentals and independent problem-solving skills.',
    current: true,
  },
  {
    period: '2024 — 2025',
    role: 'Frontend Developer',
    company: 'XXB LLC',
    description:
      'Built modern, responsive interfaces with React and translated product requirements into reliable web features with a focus on maintainability and user experience.',
    current: false,
  },
];

const education = [
  {
    period: '2022 — 2023',
    program: 'Frontend Development',
    school: 'Webbrain Academy',
    description:
      'Advanced my practical frontend skills through project-based learning focused on JavaScript, React, modern UI development, and real-world application workflows.',
  },
  {
    period: '2021 — 2022',
    program: 'Frontend Development',
    school: 'Albison Academy',
    description:
      'Built a strong foundation in HTML, CSS, JavaScript, responsive design, and the core principles of modern web development.',
  },
];

const interests = [
  ['Table Tennis', 'Player', 'Favourite sport'],
  ['Chess', 'Player', 'Strategy & focus'],
  ['CS2', 'Player', 'Team-based competition'],
  ['Football', 'Player', 'Sport & teamwork'],
];

const socials = [
  {
    label: 'GitHub',
    value: 'Ziiyodullayevv',
    href: 'https://github.com/Ziiyodullayevv',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'Akobir Ziyodullayev',
    href: 'https://www.linkedin.com/in/akobir-ziyodullayev-9a26a2281/',
    icon: Linkedin,
  },
  {
    label: 'Telegram',
    value: '@akobirjs',
    href: 'https://t.me/akobirjs',
    icon: Send,
  },
  {
    label: 'Instagram',
    value: '@ziiyodullayevv',
    href: 'https://www.instagram.com/ziiyodullayevv/',
    icon: Instagram,
  },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className='section-label'
      initial={reduceMotion ? false : { opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.55, ease: easeOut }}
    >
      <span>({number})</span>
      <span>{children}</span>
    </motion.div>
  );
}

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDownloadingCv, setIsDownloadingCv] = useState(false);
  const [cvDownloadFailed, setCvDownloadFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

      setIsScrolled(window.scrollY > 24);
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCvDownload = async () => {
    if (isDownloadingCv) return;

    setIsDownloadingCv(true);
    setCvDownloadFailed(false);

    try {
      const response = await fetch('/Akobir-Ziyodullayev-CV.pdf');
      if (!response.ok) throw new Error('CV download failed');

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = objectUrl;
      link.download = 'Akobir-Ziyodullayev-CV.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch {
      setCvDownloadFailed(true);
    } finally {
      setIsDownloadingCv(false);
    }
  };

  return (
    <div id='top' className='portfolio-page'>
      <motion.aside
        className='scroll-indicator'
        aria-hidden='true'
        initial={reduceMotion ? false : { opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, delay: 0.8, ease: easeOut }}
      >
        <span>{Math.round(scrollProgress).toString().padStart(2, '0')}%</span>
        <div>
          <i style={{ height: `${scrollProgress}%` }} />
        </div>
        <small>Scroll</small>
      </motion.aside>

      <motion.header
        className={`site-header${isScrolled ? ' is-scrolled' : ''}`}
        initial={reduceMotion ? false : { opacity: 0, y: -90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <a className='wordmark' href='#top' aria-label='Home'>
          akobir<span>.dev</span>
        </a>
        <nav aria-label='Primary navigation'>
          <a href='#about'>01 About</a>
          <a href='#toolkit'>02 Toolkit</a>
          <a href='#work'>03 Work</a>
          <a href='#experience'>04 Experience</a>
          <a href='#education'>05 Education</a>
          <a href='#interests'>06 Interests</a>
          <a href='#contact'>07 Contact</a>
        </nav>
        <a className='header-cta' href='https://t.me/akobirjs' target='_blank' rel='noreferrer'>
          <span>Let’s talk</span> <ArrowUpRight size={15} />
        </a>
      </motion.header>

      <main>
        <motion.section
          className='hero-section'
          initial={reduceMotion ? false : 'hidden'}
          animate='visible'
          variants={reduceMotion ? noMotion : heroStagger}
        >
          <div className='hero-container'>
            <motion.div className='hero-status' variants={reduceMotion ? noMotion : fadeUp}>
              <span />
              Open to new opportunities
            </motion.div>
            <motion.h1 variants={reduceMotion ? noMotion : fadeUp}>
              Frontend developer
              <br />
              building <em>fast, thoughtful</em>
              <br />
              digital products.
            </motion.h1>
            <motion.div className='hero-bottom' variants={reduceMotion ? noMotion : fadeUp}>
              <motion.p variants={reduceMotion ? noMotion : fadeIn}>
                I’m <strong>Akobir Ziyodullayev</strong> — a frontend developer
                based in Tashkent. I turn ideas into fast, responsive, and
                enjoyable digital products.
              </motion.p>
              <motion.div className='hero-actions' variants={reduceMotion ? noMotion : stagger}>
                <motion.a
                  className='button button-primary'
                  href='#work'
                  variants={reduceMotion ? noMotion : popIn}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <span>View projects</span> <ArrowDown size={17} />
                </motion.a>
                <motion.button
                  className='button button-ghost'
                  type='button'
                  onClick={handleCvDownload}
                  disabled={isDownloadingCv}
                  aria-busy={isDownloadingCv}
                  variants={reduceMotion ? noMotion : popIn}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  <span>
                    {isDownloadingCv
                      ? 'Preparing CV…'
                      : cvDownloadFailed
                        ? 'Try again'
                        : 'Download CV'}
                  </span>
                  {isDownloadingCv
                    ? <LoaderCircle className='button-spinner' size={17} />
                    : <Download size={17} />}
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div className='hero-meta' variants={reduceMotion ? noMotion : fadeIn}>
              <span><MapPin size={15} /> Tashkent, Uzbekistan</span>
              <span>GMT +5</span>
              <span>Web & mobile development</span>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          className='ticker'
          aria-hidden='true'
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <div>
            React <span>✦</span> Next.js <span>✦</span> TypeScript <span>✦</span>
            React Native <span>✦</span> Tailwind CSS <span>✦</span> Redux
            <span>✦</span> Figma <span>✦</span> Git <span>✦</span>
            React <span>✦</span> Next.js <span>✦</span> TypeScript <span>✦</span>
            React Native <span>✦</span>
          </div>
        </motion.div>

        <section id='about' className='content-section about-section'>
          <SectionLabel number='01'>About</SectionLabel>
          <div className='section-content about-grid'>
            <motion.div
              initial={reduceMotion ? false : 'hidden'}
              whileInView='visible'
              viewport={revealViewport}
              variants={reduceMotion ? noMotion : stagger}
            >
              <motion.p className='statement' variants={reduceMotion ? noMotion : fadeUp}>
                I build digital products where business goals, user needs, and
                <em> thoughtful details</em> work together as one clear
                experience.
              </motion.p>
              <motion.div className='about-copy' variants={reduceMotion ? noMotion : stagger}>
                <motion.p variants={reduceMotion ? noMotion : fadeUp}>
                  My core stack is React, Next.js, and TypeScript. I translate
                  product ideas and designs into clean, maintainable interfaces,
                  connect them to real APIs, and make sure the experience stays
                  consistent across every screen size.
                </motion.p>
                <motion.p variants={reduceMotion ? noMotion : fadeUp}>
                  I have delivered products across logistics, education,
                  automotive, e-commerce, and corporate sectors. Alongside
                  development, I mentor future frontend engineers at Mars IT,
                  which has strengthened how I communicate, collaborate, and
                  explain complex technical ideas.
                </motion.p>
              </motion.div>
              <motion.dl className='stats' variants={reduceMotion ? noMotion : stagger}>
                {[
                  ['Projects', '10+'],
                  ['Featured', '08'],
                  ['Based', 'Tashkent'],
                ].map(([label, value]) => (
                  <motion.div key={label} variants={reduceMotion ? noMotion : popIn}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </motion.div>
          </div>
        </section>

        <section id='work' className='content-section'>
          <SectionLabel number='03'>Selected work</SectionLabel>
          <div className='section-content'>
            <Reveal className='section-heading'>
              <h2>Selected projects</h2>
              <p>
                Real digital products built for businesses and users across
                multiple industries.
              </p>
            </Reveal>
            <motion.div
              className='project-list'
              initial={reduceMotion ? false : 'hidden'}
              whileInView='visible'
              viewport={{ once: true, amount: 0.06 }}
              variants={reduceMotion ? noMotion : stagger}
            >
              {projects.map((project, index) => (
                <motion.a
                  className='project-row'
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  key={project.name}
                  variants={reduceMotion ? noMotion : rowReveal}
                >
                  <span className='project-number'>{String(index + 1).padStart(2, '0')}</span>
                  <div className='project-main'>
                    <div>
                      <span className='project-type'>{project.type}</span>
                      <h3>{project.name}</h3>
                    </div>
                    <p>{project.description}</p>
                  </div>
                  <div className='project-stack'>
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <ArrowUpRight className='project-arrow' size={23} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <section id='toolkit' className='content-section toolkit-section'>
          <SectionLabel number='02'>Toolkit</SectionLabel>
          <div className='section-content'>
            <motion.div
              className='toolkit-details'
              initial={reduceMotion ? false : 'hidden'}
              whileInView='visible'
              viewport={revealViewport}
              variants={reduceMotion ? noMotion : stagger}
            >
              <div className='hard-skills'>
                <motion.h3 variants={reduceMotion ? noMotion : fadeUp}>Hard skills</motion.h3>
                <motion.div className='skill-meters' variants={reduceMotion ? noMotion : stagger}>
                  {hardSkills.map(([name, value]) => (
                    <motion.div
                      className='skill-meter'
                      key={name}
                      variants={reduceMotion ? noMotion : rowReveal}
                    >
                      <span>{name}</span>
                      <div aria-hidden='true'>
                        <motion.i
                          initial={reduceMotion ? false : { width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 0.9, ease: easeOut }}
                        />
                      </div>
                      <strong>{value}</strong>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className='people-skills'>
                <motion.div variants={reduceMotion ? noMotion : fadeUp}>
                  <h3>Soft skills</h3>
                  <motion.div className='skill-pills' variants={reduceMotion ? noMotion : stagger}>
                    {softSkills.map((skill) => (
                      <motion.span key={skill} variants={reduceMotion ? noMotion : popIn}>
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div className='learning-block' variants={reduceMotion ? noMotion : fadeUp}>
                  <h3>Currently learning</h3>
                  <motion.div
                    className='skill-pills learning-pills'
                    variants={reduceMotion ? noMotion : stagger}
                  >
                    {learningNow.map((skill) => (
                      <motion.span key={skill} variants={reduceMotion ? noMotion : popIn}>
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id='experience' className='content-section experience-section'>
          <SectionLabel number='04'>Experience</SectionLabel>
          <div className='section-content'>
            <div className='experience-list'>
              {experience.map((item) => (
                <motion.article
                  className='experience-item'
                  key={`${item.company}-${item.period}`}
                  initial={reduceMotion ? false : 'hidden'}
                  whileInView='visible'
                  viewport={revealViewport}
                  variants={reduceMotion ? noMotion : rowReveal}
                >
                  <motion.span
                    className={`timeline-dot${item.current ? ' is-current' : ''}`}
                    variants={reduceMotion ? noMotion : popIn}
                  />
                  <time>{item.period}</time>
                  <div>
                    <h3>
                      {item.role} <span>@ {item.company}</span>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id='education' className='content-section education-section'>
          <SectionLabel number='05'>Education</SectionLabel>
          <div className='section-content'>
            <div className='experience-list'>
              {education.map((item) => (
                <motion.article
                  className='experience-item'
                  key={item.school}
                  initial={reduceMotion ? false : 'hidden'}
                  whileInView='visible'
                  viewport={revealViewport}
                  variants={reduceMotion ? noMotion : rowReveal}
                >
                  <motion.span
                    className='timeline-dot'
                    variants={reduceMotion ? noMotion : popIn}
                  />
                  <time>{item.period}</time>
                  <div>
                    <h3>
                      {item.program} <span>@ {item.school}</span>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id='interests' className='content-section interests-section'>
          <SectionLabel number='06'>Interests & activities</SectionLabel>
          <div className='section-content'>
            <motion.div
              className='interests-grid'
              initial={reduceMotion ? false : 'hidden'}
              whileInView='visible'
              viewport={revealViewport}
              variants={reduceMotion ? noMotion : stagger}
            >
              {interests.map(([name, role, detail], index) => (
                <motion.article
                  className='interest-card'
                  key={name}
                  variants={reduceMotion ? noMotion : fadeUp}
                >
                  <span className='interest-index'>0{index + 1}</span>
                  <h3>{name}</h3>
                  <p>{role}</p>
                  <small>{detail}</small>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id='contact' className='contact-section'>
          <SectionLabel number='07'>Contact</SectionLabel>
          <motion.div
            className='contact-content'
            initial={reduceMotion ? false : 'hidden'}
            whileInView='visible'
            viewport={revealViewport}
            variants={reduceMotion ? noMotion : stagger}
          >
            <motion.p variants={reduceMotion ? noMotion : fadeUp}>
              Have a project, a collaboration, or simply a good idea in mind?
            </motion.p>
            <motion.h2 variants={reduceMotion ? noMotion : fadeUp}>
              Let’s build
              <br />
              <a href='https://t.me/akobirjs' target='_blank' rel='noreferrer'>
                something great.<ArrowUpRight />
              </a>
            </motion.h2>
            <motion.div className='social-grid' variants={reduceMotion ? noMotion : stagger}>
              {socials.map(({ label, value, href, icon: Icon }) => (
                <motion.a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  key={label}
                  variants={reduceMotion ? noMotion : fadeUp}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={18} />
                  <span><small>{label}</small>{value}</span>
                  <ArrowUpRight size={17} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>

      <motion.footer
        className='site-footer'
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        <p>© {new Date().getFullYear()} Akobir Ziyodullayev</p>
        <p>Built with React, TypeScript & attention to detail.</p>
        <a href='#top'>Back to top ↑</a>
      </motion.footer>
    </div>
  );
}
