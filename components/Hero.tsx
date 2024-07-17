import React from 'react'
import { Spotlight } from './ui/Spotlight'
import ToggleMode from './ToggleMode'
import { TextRevealCard } from './ui/text-reveal-card'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
      <div className="pb-20 pt-36 relative">
      <div className='absolute top-0 right-0 m-4 z-20'><ToggleMode/></div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-teal-300 dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
  {/* Radial gradient for the container to give a faded look */}
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
</div>


    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

        <h1 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
          A software Engineering Student
        </h1>
        <TextRevealCard
        className='text-center text-[40px] md:text-5xl lg:text-6xl'
        text="Hover to know about me"
        revealText='Jasmine Garg'
        >
         <h2 className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Jasmine, a software engineer and an AI/ML enthusiast.
          </h2>

        </TextRevealCard>
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
  Mission : Serve and Change the world through&nbsp;
  <span style={{ 
    background: 'linear-gradient(to right, blue, purple)', 
    WebkitBackgroundClip: 'text', 
    color: 'transparent',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
  }}>
    computer science
  </span>.
</p>



         <a href='#about'>
          <MagicButton
           title='Show my work  '
           icon={<FaLocationArrow/>}
           position='right'
          />
          </a>

         
      </div>
    </div>
      </div>
    )
  }

export default Hero