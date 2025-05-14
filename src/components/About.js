import React from 'react'
import myPhoto from '../assets/myPhoto.jpg';

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
                I am currently working as a <span className="text-white font-semibold">Software Developer</span> at{' '}
                <span className="text-[#00E5B4] font-semibold">DTskill</span>, working with different AWS services like SES, S3, Lambda (Serveless) and RDS.
                I hold a B.Tech in <span className="text-white font-semibold">Computer Science and Engineering.</span>
              </p>

              <p className="text-lg">
                Here are some technologies I have been working with:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00E5B4] mr-2">▸</span>
                    <span>Python</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5B4] mr-2">▸</span>
                    <span>Django</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5B4] mr-2">▸</span>
                    <span>Javascript ES6+</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#00E5B4] mr-2">▸</span>
                    <span>FastAPI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5B4] mr-2">▸</span>
                    <span>Redis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5B4] mr-2">▸</span>
                    <span>SQL</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg">
                Outside of work, I enjoy keeping up with emerging trends in tech.
                I’m also an sports enthusiast and love playing badminton and cricket.
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