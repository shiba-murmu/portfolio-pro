import React from 'react'
/**
 * 
 * @returns Here so many modules has to imports
 */
// import ProjectCard '.'
// import <Projectcard></Projectcard>
// import { FaProjectDiagram } from 'react-icons/fa'
// from 
import Projectcard from '../Projectcard/Projectcard'
import Blogimage from '../../assets/abc.jpeg'
import youtubeimage from '../../assets/bcd.jpg'
import Netfliximage from '../../assets/netflix.jpg'




function Projects() {
  return (
    <>
      <div id='Projects' className='p-10 md:p-18 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 pb-6 px-10 flex flex-wrap gap-5'>
          {/* Some code here to written... */}
          < Projectcard
          bannerImg={Blogimage}
          title="Blogging website"
          main="this is blogging website created in next.js and used some component library used some 
          component library" />
          < Projectcard
          bannerImg={youtubeimage}
          title="Youtube Clone"
          main="this is blogging website created in next.js and used some component library used some 
          component library" />
          < Projectcard
          bannerImg={Netfliximage}
          title="Netflix Clone"
          main="this is blogging website created in next.js and used some component library used some 
          component library" />
        </div>
      </div>
    </>
  )
}

export default Projects