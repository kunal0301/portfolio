import React, { useState, useEffect, useRef } from 'react'

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Projects data
  const projects = [
    {
      title: "TDSB Homework Management Interface",
      description: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
      tech: "Python (Flask), Vue.js, Bootstrap, SQL",
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Adam A.I.",
      description: "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
      tech: "Javascript, HTML / CSS",
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Distributed Logging and Monitoring System",
      description: "A system that establishes an ORM connection to a Prisma client in order to communicate logs from microservices.",
      tech: "Node.js (Express.js), React.js, PostgreSQL",
      githubLink: "#"
    },
    {
      title: "Odin Bot",
      description: "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
      tech: "Node.js, Telegram API, NLP",
      githubLink: "#"
    },
    {
      title: "Game Centre",
      description: "An Android app consisting of three board games, including multiplayer.",
      tech: "Java, Android SDK",
      githubLink: "#"
    },
    {
      title: "Minimax Stonehenge",
      description: "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      tech: "Python, AI algorithms",
      githubLink: "#"
    }
  ]

  // Animation on component mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // optional: reset animation if you want it to replay each time
        }
      },
      {
        threshold: 0.2, // Adjust based on when you want animation to trigger
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12">
          <span className="text-gray-400">/</span> projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-slate-800 rounded-lg p-6 flex flex-col transition-all duration-700 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Folder icon */}
              <div className="flex justify-between items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V9.2C21 8.07989 21 7.51984 20.782 7.09202C20.5903 6.71569 20.2843 6.40973 19.908 6.21799C19.4802 6 18.9201 6 17.8 6H12L10 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.07989 3 7.2V8.2Z" 
                  stroke="#00E5B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                <div className="flex space-x-2">
                  {project.githubLink && (
                    <a href={project.githubLink} className="text-gray-300 hover:text-white transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.5 9C13.5 8 11.5 7.5 10 9C8.5 10.5 9 12 10 12.5C11 13 13 13 14 13.5C15 14 15.5 15.5 14 17C12.5 18.5 10.5 18 9.5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                  
                  {project.demoLink && (
                    <a href={project.demoLink} className="text-gray-300 hover:text-white transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5H8C6.89543 5 6 5.89543 6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V12M12 5L18 11M12 5V11H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project title */}
              <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
              
              {/* Project description */}
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              {/* Tech stack */}
              <p className="text-sm text-emerald-400 mt-auto">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects