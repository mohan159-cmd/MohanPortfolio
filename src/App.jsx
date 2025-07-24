import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, Download, Code, Database, Cloud, Award, Calendar, Building, GraduationCap, Trophy, ExternalLink, Github, Star, ArrowRight } from 'lucide-react';

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Redux", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 92, category: "Frontend" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 88, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 83, category: "Backend" },
    { name: "ASP.NET", level: 75, category: "Backend" },
    { name: "MSSQL", level: 80, category: "Database" },
    { name: "Azure Cloud", level: 78, category: "Cloud" },
    { name: "Python", level: 82, category: "Programming" }
  ];

  const experience = [
    {
      title: "Front-end Developer",
      company: "Fusion Foundry",
      location: "Hyderabad",
      period: "Apr 2023 - Present",
      type: "Full-time",
      description: "A technology solutions provider specializing in web development",
      achievements: [
        "Strong understanding and practical application of component-based architecture in React",
        "Proficient in creating and managing reusable React components, handling state and props efficiently",
        "Worked on projects involving dynamic UI updates, form handling, and integration with RESTful APIs",
        "Solid experience in using Redux for managing complex state in large-scale applications",
        "Effective team collaboration using version control systems like Git"
      ]
    },
    {
      title: "Student Trainee",
      company: "Nokia Networks",
      location: "Bangalore",
      period: "Aug 2022 - Mar 2023",
      type: "Internship",
      description: "A leader in telecommunications and networking equipment",
      achievements: [
        "Worked on Python Automation Scripting and developed automation frameworks",
        "Focused on Binding Support Function BSF component in 5G technology",
        "Gained knowledge about Kubernetes, Docker, and Linux operating systems",
        "Contributed to telecommunications networking solutions"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "KL Deemed To Be University",
      location: "Guntur",
      period: "Jun 2019 - May 2023",
      grade: "Computer Science Engineering"
    },
    {
      degree: "Class 12",
      institution: "Sri Chaitanya Junior College",
      location: "Guntur",
      period: "Jun 2017 - Apr 2019"
    },
    {
      degree: "Class 10",
      institution: "Dr. KKR Gowtham School",
      location: "Guntur",
      period: "Jun 2015 - Apr 2017"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect Associate",
      issuer: "Amazon Web Services",
      icon: <Cloud className="w-6 h-6" />,
      description: "Demonstrates ability to design distributed systems and cloud-native applications using AWS infrastructure including EC2, S3, RDS, VPC, IAM, Lambda, and CloudFormation."
    },
    {
      name: "Google Cloud Certified Associate Cloud Engineer",
      issuer: "Google Cloud Platform",
      icon: <Cloud className="w-6 h-6" />,
      description: "Demonstrates skills in deploying and managing applications using GCP services such as Compute Engine, IAM, Cloud SQL, and BigQuery."
    }
  ];

  const projects = [
    {
      name: "Activity Tracker Application",
      period: "Jan 2025 - Apr 2025",
      description: "A comprehensive web application that assists users in tracking various activities to enhance productivity and manage daily tasks efficiently.",
      features: [
        "Enable users to monitor and manage their daily activities efficiently",
        "Log and track daily tasks, workouts, hobbies, or any other activities",
        "Review past activities and analyze trends over time",
        "Provide insights to help users stay consistent and improve productivity",
        "Customizable categories for personalized tracking experience"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MSSQL", "Azure"],
      status: "Completed",
      achievement: "Successfully developed and deployed, streamlining user engagement for daily productivity management"
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const ExperienceCard = ({ exp, index }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <Building className="w-4 h-4" />
            {exp.company}
          </div>
        </div>
        <div className="flex flex-col items-end text-sm text-gray-500 mt-2 md:mt-0">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">{exp.type}</span>
          <span className="mt-1">{exp.period}</span>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3" />
            {exp.location}
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 italic">{exp.description}</p>
      
      <div className="space-y-2">
        {exp.achievements.map((achievement, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 text-sm">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            {project.period}
          </div>
        </div>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
          {project.status}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <div className="space-y-1">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700 text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-yellow-600" />
          <span className="text-sm font-medium text-yellow-800">Achievement</span>
        </div>
        <p className="text-sm text-yellow-700 mt-1">{project.achievement}</p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl font-bold">NM</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimmala Mohan</h1>
                    <p className="text-xl md:text-2xl mb-4 opacity-90">Full Stack Developer</p>
                    <p className="text-lg opacity-80 mb-6 max-w-2xl">
                      Innovative and passionate full-stack developer with 2+ years of experience specializing in React.js, Redux, 
                      and modern web technologies. Dedicated to creating high-quality user experiences and scalable applications.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+91 8008980460</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>mohannimmala159@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Hyderabad, India</span>
                      </div>
                    </div>
                    <div className="flex gap-4 justify-center md:justify-start">
                      <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Resume
                      </button>
                      <a href="https://www.linkedin.com/in/mohan-nimmala-a63738209/" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center gap-2">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Stats */}
            <section className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <div className="text-gray-600">Cloud Certifications</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                <div className="text-gray-600">Major Project</div>
              </div>
            </section>

            {/* Featured Skills */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Technologies</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend Development</h3>
                  <p className="text-gray-600 text-sm">React.js, Redux, JavaScript, HTML5, CSS3</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend Development</h3>
                  <p className="text-gray-600 text-sm">Node.js, Express.js, ASP.NET, MSSQL</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Cloud className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud & DevOps</h3>
                  <p className="text-gray-600 text-sm">Azure, AWS, Docker, Kubernetes</p>
                </div>
              </div>
            </section>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                My journey in software development, from telecommunications to web development
              </p>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Proficiency levels in various technologies and programming languages
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Frontend & Programming</h3>
                {skills.filter(skill => ['Frontend', 'Programming'].includes(skill.category)).map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Backend & Infrastructure</h3>
                {skills.filter(skill => ['Backend', 'Database', 'Cloud'].includes(skill.category)).map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Certifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-blue-600">{cert.icon}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                        <p className="text-blue-600 font-medium text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Showcase of my development work and key achievements
              </p>
            </div>
            
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                My academic journey and educational background
              </p>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                        <p className="text-blue-600 font-semibold">{edu.institution}</p>
                        {edu.grade && <p className="text-gray-600 text-sm">{edu.grade}</p>}
                      </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-gray-500 text-sm">{edu.period}</p>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600">
                I'm always interested in discussing new opportunities and innovative projects
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid gap-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:mohannimmala159@gmail.com" className="text-blue-600 hover:text-blue-800">
                      mohannimmala159@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+918008980460" className="text-green-600 hover:text-green-800">
                      +91 8008980460
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                  <Linkedin className="w-6 h-6 text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/mohan-nimmala-a63738209/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 flex items-center gap-1">
                      Connect with me <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-orange-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NM</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Nimmala Mohan</h1>
                <p className="text-sm text-gray-600">Full Stack Developer</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Home' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
        <div className="grid grid-cols-6 gap-1 p-2">
          {[
            { id: 'home', label: 'Home', icon: <Star className="w-4 h-4" /> },
            { id: 'experience', label: 'Work', icon: <Building className="w-4 h-4" /> },
            { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
            { id: 'projects', label: 'Projects', icon: <Trophy className="w-4 h-4" /> },
            { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
            { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg text-xs font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2025 Nimmala Mohan. Built with React.js - Passionate about creating amazing web experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;