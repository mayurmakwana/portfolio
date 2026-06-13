import { FaPhp, FaNode, FaReact, FaDatabase, FaJsSquare, FaGit, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript, SiPostman, SiDocker, SiJquery } from 'react-icons/si';

export const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 'Expert', icon: FaReact },
      { name: 'Next.js', level: 'Expert', icon: SiNextdotjs },
      { name: 'JavaScript', level: 'Expert', icon: FaJsSquare },
      { name: 'TypeScript', level: 'Advanced', icon: SiTypescript },
      { name: 'Tailwind CSS', level: 'Advanced', icon: SiTailwindcss },
      { name: 'jQuery', level: 'Advanced', icon: SiJquery },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Expert', icon: FaNode },
      { name: 'PHP', level: 'Expert', icon: FaPhp },
      { name: 'REST APIs', level: 'Expert', icon: FaGithub },
      { name: 'TypeScript', level: 'Advanced', icon: SiTypescript },
      { name: 'Docker', level: 'Intermediate', icon: SiDocker },
      { name: 'Postman', level: 'Advanced', icon: SiPostman },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Expert', icon: SiMongodb },
      { name: 'MySQL', level: 'Expert', icon: SiMysql },
      { name: 'Database Design', level: 'Expert', icon: FaDatabase },
      { name: 'Query Optimization', level: 'Advanced', icon: FaDatabase },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 'Expert', icon: FaGit },
      { name: 'GitHub', level: 'Expert', icon: FaGithub },
      { name: 'Docker', level: 'Intermediate', icon: SiDocker },
      { name: 'CI/CD', level: 'Intermediate', icon: SiDocker },
    ],
  },
];
