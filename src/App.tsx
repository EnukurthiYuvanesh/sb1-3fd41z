import React, { useState } from 'react';
import { Menu, X, Download, Mail, Linkedin, Globe, ChevronRight, Github, Award, BookOpen, Briefcase, Code } from 'lucide-react';
import NavLink from './components/NavLink';
import Section from './components/Section';
import SkillBadge from './components/SkillBadge';
import ProjectCard from './components/ProjectCard';
import CertificationCard from './components/CertificationCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    "Python (Basic)", "HTML, CSS", "Mobile Testing", "UI/UX Design (Figma)",
    "Time Management", "Problem Solving", "Team Work", "Web Development",
    "N-map/Wireshark", "Cybersecurity", "Web Hosting"
  ];

  const certifications = [
    {
      title: "NPTEL Proctored Exam - Machine Learning",
      link: "https://yuvanesh.s3.amazonaws.com/Introduction+to+Machine+Learning+5.jpg"
    },
    {
      title: "IBM Powered Exam - Python for Data Science",
      link: "#"
    },
    {
      title: "ALISON Exam - Mobile Application Testing",
      link: "#"
    },
    {
      title: "EC-COUNCIL - Ethical Hacking Essentials (EHE)",
      link: "https://yuvanesh.s3.amazonaws.com/EHE+certificate.png"
    },
    {
      title: "CISCO ORG - Cyber Security Certification",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Yuvanesh</h1>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#certifications">Certifications</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-4">
              <NavLink href="#home" mobile>Home</NavLink>
              <NavLink href="#about" mobile>About</NavLink>
              <NavLink href="#experience" mobile>Experience</NavLink>
              <NavLink href="#projects" mobile>Projects</NavLink>
              <NavLink href="#certifications" mobile>Certifications</NavLink>
              <NavLink href="#contact" mobile>Contact</NavLink>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20 text-center">
          <img 
            src="https://media.licdn.com/dms/image/D5616AQFZ4orwNo4KnA/profile-displaybackgroundimage-shrink_200_800/0/1704647773376?e=2147483647&v=beta&t=WbI8vXcLsGqxWEAnylVm1bjVWP-mMuKj8lYlw8omg6w" 
            alt="Yuvanesh" 
            className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-xl mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enukurthi Yuvanesh</h1>
          <p className="text-xl mb-8 text-gray-200">B.Tech in AI & Data Science | Cybersecurity Enthusiast</p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://enukurthiyuvanesh.cloud/yuvanesh%20sep%2011%20Resume.pdf"
              className="flex items-center px-6 py-3 bg-white text-purple-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        <Section id="about" icon={<BookOpen />} title="About Me">
          <p className="text-lg text-gray-700 mb-8">
            B-Tech in Artificial Intelligence Data Science, Completed in 2024. Passionate about Machine Learning, UI/UX Design, and Cybersecurity.
          </p>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={index}>{skill}</SkillBadge>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" icon={<Briefcase />} title="Experience">
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Web Development Intern</h3>
              <p className="text-gray-600 mb-4">TechEdu Online (Oct 2023)</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Developed skills in HTML, CSS</li>
                <li>Interned at CIT Internship Studio</li>
                <li>Experienced in UI/UX Design using Figma</li>
                <li>Working Intern as a Plasmid Innovations Role of CYBER SECURITY</li>
                <li>Intern In EXPOSYS LAB ORG as Web Developer/Cyber Security</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" icon={<Code />} title="Projects">
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Crop Infection Monitoring"
              description="Developed a machine learning-based system for real-time infection detection."
            />
            <ProjectCard 
              title="Deep Fake Detection Using AI"
              description="Research and development in deepfake identification using powerful machine learning algorithms."
              link="https://yuvanesh.s3.amazonaws.com/DEEP+FACE+AI++project.pdf"
            />
          </div>
        </Section>

        {/* Certifications Section */}
        <Section id="certifications" icon={<Award />} title="Certifications">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard 
                key={index}
                title={cert.title}
                link={cert.link}
              />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" icon={<Mail />} title="Contact">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a 
              href="mailto:yuvanesh@enukurthiyuvanesh.cloud"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Mail size={20} />
              <span>yuvanesh@enukurthiyuvanesh.cloud</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/enukurthi-yuvanesh-306552232"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
            <a 
              href="https://enukurthiyuvanesh.cloud/sep%20portfolio.html"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={20} />
              <span>Portfolio Website</span>
            </a>
          </div>
        </Section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Enukurthi Yuvanesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;