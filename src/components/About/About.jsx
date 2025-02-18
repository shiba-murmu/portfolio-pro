import React from 'react'
import {IoArrowForward} from 'react-icons/io5'

function About() {
  return (
    <>
      <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity roounded-lg p-12'>
        <div>
          <h2 className='text-2xl md:text-4xl font-bold'>
            About Me
          </h2>
          <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
            className='md:h-80' alt="About image" />
            <ul>
              <div className='flex gap-3 py-4'>
                < IoArrowForward  size={30} className='mt-1'/>
                <span className='w-96'>
                  <h1 className='text-sm md:text-2xl front-semibold leading-normal'>
                    Frontend developer
                  </h1>
                  <p className='text-sm md:text-md leading-tight'>
                    Frontend Developer skilled in building responsive and interactive web applications 
                    using React.js. Passonate about creating seamless user experiences and writing clean, efficient code.
                  </p>
                </span>
              </div>
              <div className='flex gap-3 py-4'>
                < IoArrowForward  size={30} className='mt-1'/>
                <span className='w-96'>
                  <h1 className='text-sm md:text-2xl front-semibold leading-normal'>
                    Database developer
                  </h1>
                  <p>
                    Database Developer specializing in building and maintiaining robust server-side
                    applications using backend languages such as Node.js, Python, and java. Experienced in
                    API developement, database management, and optimizing system performance.
                  </p>
                </span>
              </div>
              <div className='flex gap-3 py-4'>
                < IoArrowForward  size={30} className='mt-1'/>
                  <span className='w-96'>
                    <h1 className='text-xl md:text-2xl front-semibold leading-normal'>
                      Backend developer
                    </h1>
                    <p>
                      Backend Developer specilizing in building and maintining robust server-side
                      applications using backend languages such as Node.js and Python. Proficient in
                      RESTful APIs
                    </p>
                  </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default About