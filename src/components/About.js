import React from 'react'
import myPhoto from '../assets/myPhoto.jpeg';

function About() {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side content */}
          <div>
            <h1 className="text-5xl font-bold mb-8">
              <span className="text-gray-400">/</span> about me
            </h1>

            <div className="text-gray-300 space-y-6">
              <p className="text-lg">
                I am currently working as a <span className="text-white font-semibold">Software Engineer</span> at{' '}
                <span className="text-[#00E5B4] font-semibold">Nuvepro Technologies</span>, where I focus on LangChain, RAG pipelines, and AI agent workflows.
                I hold a B.Tech in <span className="text-white font-semibold">Computer Science and Engineering.</span>
              </p>

              <p className="text-lg">
                Here are some technologies I have been working with:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  {['Python', 'Django', 'FastAPI', 'JavaScript ES6+', 'Docker'].map((tech) => (
                    <li key={tech} className="flex items-start">
                      <span className="text-[#00E5B4] mr-2">▸</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {['Redis', 'PostgreSQL / MySQL', 'AWS (S3, SES, Lambda)', 'RAG / LangChain', 'AI Agents / LLMs'].map((tech) => (
                    <li key={tech} className="flex items-start">
                      <span className="text-[#00E5B4] mr-2">▸</span>
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg">
                Outside of work, I enjoy keeping up with the latest trends in AI and backend engineering.
                I'm also a sports enthusiast and like playing <span className="text-white font-semibold">badminton</span> and <span className="text-white font-semibold">cricket</span>.
              </p>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5B4] to-blue-500 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src={myPhoto}
                alt="Profile"
                className="relative z-10 rounded-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About