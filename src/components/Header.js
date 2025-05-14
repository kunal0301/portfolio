import React from 'react'
import { Mail, Github, Linkedin, Edit } from 'lucide-react'


function Header() {
    return (
        <div>
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">

                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">

                                    <a href="" class="rounded-md px-3 py-2 text-sm font-medium text-white" aria-current="page">Kunal Srivastava</a>
                                    <a href="" className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Home</a>
                                    <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium">About</a>
                                    <a href="#experience" className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Experience</a>
                                    <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 text-base font-medium">Projects</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <a href="mailto:kunalsrivastava0301@gmail.com" className="text-gray-300 hover:text-white">
                                    <Mail size={20} />
                                </a>
                                <a href="https://github.com/kunal0301" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/kunal-srivastava-7b8b431b5/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                    <Linkedin size={20} />
                                </a>
                                {/* <a href="#" className="text-gray-300 hover:text-white">
                                <Edit size={20} />
                            </a> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pt-2 pb-3">
                        <a href="" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
                        <a href="#about" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                        <a href="#experience" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Experience</a>
                        <a href="#projects" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header