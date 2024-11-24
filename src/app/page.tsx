
'use client'

import { 
  Github, Linkedin, Mail, FileText, Monitor, 
  Palette, Database, FileSpreadsheet, ArrowRight,
  Code, Globe, Server, GraduationCap
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Adding SectionTitle component definition
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white">{children}</h2>
    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
  </div>
);



export default function Portfolio() {
  const education = [
    {
      degree: "Intermediate",
      institution: "DHACSS Degree College",
      board: "Board of Intermediate Education Karachi",
      year: "2024",
      location: "Karachi, Pakistan",
      achievement: "Successfully completed Intermediate studies"
    },
    {
      degree: "Matriculation",
      institution: "Kids Campus Grammar School",
      board: "Board of Secondary Education Karachi",
      year: "2022",
      location: "Karachi, Pakistan",
      achievement: "Successfully completed Matriculation studies"
    }
  ];

  const projects = [
    
    {
      title: "Student Data Managment Application",
      category: "Full Stack Development",
      description: "Created an Data Managment Application for Institute",
      tech: ["HTML", "CSS", "JavaScript", "BootStrap", "PHP"],
      image: "/images/download (1).jpeg"
    },
    {
      title: "Corporate Website Redesign",
      category: "UI/UX Design",
      description: "Complete redesign and responsive of a corporate website",
      tech: ["JavaScript", "CSS", "HTML", "Bootstrap"],
      image: "/images/download.jpeg"
    }
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React & Next.js", level: 88 },
        { name: "Bootstrap & Tailwind", level: 92 }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "PHP", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Full Stack Developer", level: 80 },
        
        
      ]
    },
    {
      category: "Professional Skills",
      items: [
        { name: "Canva Design", level: 90 },
        { name: "MS Office Suite", level: 92 },
        { name: "Data Entry", level: 95 },
        { name: "Project Management", level: 88 }
      ]
    }
  ];

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );

  const ContactInfo = ({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) => (
    <Link
      href={href}
      className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">S.S.H</span>
            <div className="hidden md:flex space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About Me</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-8 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">SH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Syed Sajid Hussain
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">
              Full Stack Developer & Designer
            </h2>
            <p className="text-gray-300 max-w-2xl mb-8 text-lg">
              Transforming ideas into exceptional digital experiences with cutting-edge 
              web development, elegant design, and efficient data management solutions.
            </p>
            <div className="flex space-x-4">
            <Link href="#contact" scroll={true}>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transition-all flex items-center group">
                Hire Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
              <a href="/images/sajidcv.pdf" download="sajidcv.pdf"></a>
              <button className="px-8 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-all">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
<section id="about" className="py-20 px-6 bg-gray-800/50">
  <div className="container mx-auto">
    <SectionTitle>About Me</SectionTitle>
    <div className="max-w-4xl mx-auto mt-12 text-center">
      <p className="text-gray-300 text-lg leading-relaxed">
        Hi, I'm <span className="text-blue-400 font-bold">Syed Sajid Hussain</span>, a versatile PHP Developer skilled in multiple web technologies including{' '}
        <span className="text-blue-400 font-bold">HTML, CSS, JavaScript, TypeScript, Bootstrap, jQuery, React, Next.js, and PHP</span>.
        I also have expertise in <span className="text-blue-400 font-bold">Canva designing, MS Office Suite, project management</span>, and
        <span className="text-blue-400 font-bold"> web designing</span>.
      </p>
      <p className="text-gray-300 text-lg leading-relaxed mt-4">
        I have successfully completed my <span className="text-blue-400 font-bold">Intermediate in Pre-Engineering</span> from the{' '}
        <span className="text-blue-400 font-bold">Board of Intermediate Education Karachi</span>.
        I am passionate about transforming creative ideas into functional and visually appealing web applications.
      </p>
    </div>
  </div>
</section>


      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <SectionTitle>Education</SectionTitle>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30" />
              {education.map((edu, index) => (
                <div key={index} className={`relative flex items-center justify-between md:justify-normal gap-8 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900" />
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className="bg-gray-800/50 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2 text-blue-400">
                        <GraduationCap className="w-5 h-5" />
                        <span className="font-bold">{edu.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h3>
                      <div className="text-gray-300 font-medium mb-2">
                        {edu.institution}
                      </div>
                      <div className="text-gray-400 text-sm mb-2">
                        {edu.board}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-blue-400 text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto">
          <SectionTitle>Professional Skills</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
            {skills.map((category, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-6">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let's Talk
                </h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new projects, creative ideas or 
                  opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <ContactInfo
                    icon={<Mail className="w-5 h-5" />}
                    text="s9766730@gmail.com"
                    href="mailto:your.email@example.com"
                  />
                  <ContactInfo
                    icon={<Linkedin className="w-5 h-5" />}
                    text="LinkedIn Profile"
                    href="#"
                  />
                  <ContactInfo
                    icon={<Github className="w-5 h-5" />}
                    text="GitHub Profile"
                    href="#"
                  />
                </div>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Footer */}
            <footer className="py-8 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            {/* Footer Brand */}
            <span className="text-2xl font-bold text-white">S.S.H</span>
            <p className="text-gray-400 mt-2">
              © {new Date().getFullYear()} Syed Sajid Hussain. All rights reserved.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-6 mt-4">
              <Link href="https://github.com/your-github" target="_blank">
                <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com/in/your-linkedin" target="_blank">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors" />
              </Link>
              <Link href="mailto:your.email@example.com">
                <Mail className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
