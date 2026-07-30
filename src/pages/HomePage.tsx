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
import { useEffect, useState } from 'react';

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
  return (
    <div className='section-label'>
      <span>({number})</span>
      <span>{children}</span>
    </div>
  );
}

export default function HomePage() {
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
      const response = await fetch('/my-cv.pdf');
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
      <aside className='scroll-indicator' aria-hidden='true'>
        <span>{Math.round(scrollProgress).toString().padStart(2, '0')}%</span>
        <div>
          <i style={{ height: `${scrollProgress}%` }} />
        </div>
        <small>Scroll</small>
      </aside>

      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <a className='wordmark' href='#top' aria-label='Home'>
          akobir<span>.dev</span>
        </a>
        <nav aria-label='Asosiy navigatsiya'>
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
      </header>

      <main>
        <section className='hero-section'>
          <div className='hero-status'>
            <span />
            Open to new opportunities
          </div>
          <h1>
            Frontend developer
            <br />
            building <em>fast, thoughtful</em>
            <br />
            digital products.
          </h1>
          <div className='hero-bottom'>
            <p>
              I’m <strong>Akobir Ziyodullayev</strong> — a frontend developer
              based in Tashkent. I turn ideas into fast, responsive, and
              enjoyable digital products.
            </p>
            <div className='hero-actions'>
              <a className='button button-primary' href='#work'>
                <span>View projects</span> <ArrowDown size={17} />
              </a>
              <button
                className='button button-ghost'
                type='button'
                onClick={handleCvDownload}
                disabled={isDownloadingCv}
                aria-busy={isDownloadingCv}
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
              </button>
            </div>
          </div>
          <div className='hero-meta'>
            <span><MapPin size={15} /> Tashkent, Uzbekistan</span>
            <span>GMT +5</span>
            <span>Web & mobile development</span>
          </div>
        </section>

        <div className='ticker' aria-hidden='true'>
          <div>
            React <span>✦</span> Next.js <span>✦</span> TypeScript <span>✦</span>
            React Native <span>✦</span> Tailwind CSS <span>✦</span> Redux
            <span>✦</span> Figma <span>✦</span> Git <span>✦</span>
            React <span>✦</span> Next.js <span>✦</span> TypeScript <span>✦</span>
            React Native <span>✦</span>
          </div>
        </div>

        <section id='about' className='content-section about-section'>
          <SectionLabel number='01'>About</SectionLabel>
          <div className='section-content about-grid'>
            <div>
              <p className='statement'>
                I build digital products where business goals, user needs, and
                <em> thoughtful details</em> work together as one clear
                experience.
              </p>
              <div className='about-copy'>
                <p>
                  My core stack is React, Next.js, and TypeScript. I translate
                  product ideas and designs into clean, maintainable interfaces,
                  connect them to real APIs, and make sure the experience stays
                  consistent across every screen size.
                </p>
                <p>
                  I have delivered products across logistics, education,
                  automotive, e-commerce, and corporate sectors. Alongside
                  development, I mentor future frontend engineers at Mars IT,
                  which has strengthened how I communicate, collaborate, and
                  explain complex technical ideas.
                </p>
              </div>
              <dl className='stats'>
                <div><dt>Projects</dt><dd>10+</dd></div>
                <div><dt>Featured</dt><dd>08</dd></div>
                <div><dt>Based</dt><dd>Tashkent</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id='work' className='content-section'>
          <SectionLabel number='03'>Selected work</SectionLabel>
          <div className='section-content'>
            <div className='section-heading'>
              <h2>Selected projects</h2>
              <p>
                Real digital products built for businesses and users across
                multiple industries.
              </p>
            </div>
            <div className='project-list'>
              {projects.map((project, index) => (
                <a
                  className='project-row'
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  key={project.name}
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
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id='toolkit' className='content-section toolkit-section'>
          <SectionLabel number='02'>Toolkit</SectionLabel>
          <div className='section-content'>
            <div className='toolkit-details'>
              <div className='hard-skills'>
                <h3>Hard skills</h3>
                <div className='skill-meters'>
                  {hardSkills.map(([name, value]) => (
                    <div className='skill-meter' key={name}>
                      <span>{name}</span>
                      <div aria-hidden='true'>
                        <i style={{ width: `${value}%` }} />
                      </div>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className='people-skills'>
                <div>
                  <h3>Soft skills</h3>
                  <div className='skill-pills'>
                    {softSkills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
                <div className='learning-block'>
                  <h3>Currently learning</h3>
                  <div className='skill-pills learning-pills'>
                    {learningNow.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='experience' className='content-section experience-section'>
          <SectionLabel number='04'>Experience</SectionLabel>
          <div className='section-content'>
            <div className='experience-list'>
              {experience.map((item) => (
                <article className='experience-item' key={`${item.company}-${item.period}`}>
                  <span className={`timeline-dot${item.current ? ' is-current' : ''}`} />
                  <time>{item.period}</time>
                  <div>
                    <h3>
                      {item.role} <span>@ {item.company}</span>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='education' className='content-section education-section'>
          <SectionLabel number='05'>Education</SectionLabel>
          <div className='section-content'>
            <div className='experience-list'>
              {education.map((item) => (
                <article className='experience-item' key={item.school}>
                  <span className='timeline-dot' />
                  <time>{item.period}</time>
                  <div>
                    <h3>
                      {item.program} <span>@ {item.school}</span>
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='interests' className='content-section interests-section'>
          <SectionLabel number='06'>Interests & activities</SectionLabel>
          <div className='section-content'>
            <div className='interests-grid'>
              {interests.map(([name, role, detail], index) => (
                <article className='interest-card' key={name}>
                  <span className='interest-index'>0{index + 1}</span>
                  <h3>{name}</h3>
                  <p>{role}</p>
                  <small>{detail}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='contact' className='contact-section'>
          <SectionLabel number='07'>Contact</SectionLabel>
          <div className='contact-content'>
            <p>Have a project, a collaboration, or simply a good idea in mind?</p>
            <h2>
              Let’s build
              <br />
              <a href='https://t.me/akobirjs' target='_blank' rel='noreferrer'>
                something great.<ArrowUpRight />
              </a>
            </h2>
            <div className='social-grid'>
              {socials.map(({ label, value, href, icon: Icon }) => (
                <a href={href} target='_blank' rel='noreferrer' key={label}>
                  <Icon size={18} />
                  <span><small>{label}</small>{value}</span>
                  <ArrowUpRight size={17} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className='site-footer'>
        <p>© {new Date().getFullYear()} Akobir Ziyodullayev</p>
        <p>Built with React, TypeScript & attention to detail.</p>
        <a href='#top'>Back to top ↑</a>
      </footer>
    </div>
  );
}
