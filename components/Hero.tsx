import React from 'react'
import { Spotlight } from './ui/Spotlight'
import ToggleMode from './ToggleMode'
import { TextRevealCard } from './ui/text-reveal-card'

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

      <div className="h-screen w-full dark:bg-black-100 bg-teal-300 flex items-center justify-center absolute top-0 left-0">
  {/* Radial gradient for the container to give a faded look */}
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
</div>


    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
          A software Engineering Student
        </h2>
        <TextRevealCard
        className='text-center text-[40px] md:text-5xl lg:text-6xl'
        text="Hover to know about me"
        revealText='Jasmine Garg'
        >


        </TextRevealCard>
      </div>
    </div>
      </div>
    )
  }

export default Hero