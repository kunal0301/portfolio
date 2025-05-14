import React, { useState, useEffect } from 'react'

function Experience() {
  const [selectedCompany, setSelectedCompany] = useState('DTskill')
  const [isAnimating, setIsAnimating] = useState(false)
  const [showContent, setShowContent] = useState(true)

  const companies = {
    DTskill: {
      title: 'Software Developer',
      company: 'DTskill',
      period: 'Feb 2024 - Present',
      description: [
        "Developed a fully-fledged microservice application using Django and FastAPI. Leveraging FastAPI as a gateway to connect all the Django services.",
        "Using redis in the gateway to store the authentication token of a valid user. And all the details of users are stored in MySQL DataBase.",
        "Developed a system to categorize users reviews on the basis of improvement areas mentioned using AzureAI model (GPT4omini)",
        "Developed an application for a client that integrated Smartsheets with Python to automate document generation. The application processed each row in the Smartsheet, dynamically filling a DOCX template by replacing placeholders with corresponding values from the Smartsheet. This solution streamlined the document creation process, significantly reducing manual work by almost 99% and ensuring consistency across generated documents."
      ]
    }
    
  }

  const handleCompanyChange = (company) => {
    if (company === selectedCompany) return;
    
    setIsAnimating(true);
    setShowContent(false);
    
    // Add a small delay before changing the company to let the fade-out animation complete
    setTimeout(() => {
      setSelectedCompany(company);
      // After changing company, start showing content with animation
      setTimeout(() => {
        setShowContent(true);
        setIsAnimating(false);
      }, 100);
    }, 300);
  }

  // Initial content animation on component mount
  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-12">
          <span className="text-gray-400">/</span> experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company list with custom scrollbar */}
          <div className="md:col-span-1">
            <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              <style jsx>{`
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: #1f2937;
                    border-radius: 3px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: #4b5563;
                    border-radius: 3px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                    background: #6b7280;
                }
              `}</style>
              <ul className="space-y-2 pr-2">
                {Object.keys(companies).map((company) => (
                  <li key={company}>
                    <button
                      onClick={() => handleCompanyChange(company)}
                      className={`text-left w-full px-4 py-2 border-l-2 transition-all duration-300 ${
                        selectedCompany === company
                          ? 'border-emerald-400 text-emerald-400 bg-gray-800/20'
                          : 'border-gray-600 text-gray-400 hover:text-emerald-400 hover:border-emerald-400 hover:bg-gray-800/10'
                      }`}
                    >
                      {company}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experience details with animation */}
          <div className="md:col-span-3">
            <div className="pl-0 md:pl-8">
              {/* Title and period with fade animation */}
              <div className={`transition-all duration-500 ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <h2 className="text-2xl font-semibold mb-2">
                  {companies[selectedCompany].title}{' '}
                  <span className="text-emerald-400">@ {companies[selectedCompany].company}</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  {companies[selectedCompany].period}
                </p>
              </div>
              
              {/* Description list with staggered animations */}
              <ul className="space-y-4">
                {companies[selectedCompany].description.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start transition-all duration-700 ease-out ${
                      showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                    }`}
                    style={{
                      transitionDelay: `${index * 200 + 300}ms`
                    }}
                  >
                    <span className="text-emerald-400 mr-3 mt-1">▸</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience