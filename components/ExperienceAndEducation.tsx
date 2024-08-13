import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Timeline from './ui/Timeline';
import { ExpandableCardDemo } from './ui/expandable-card';

const ExperienceAndEducation = () => {
  return (
    <div className="py-20">
        <h1 className="heading" id="educationandcareer">
        Education and {" "}
        <span className="text-purple">Experience</span>
      </h1>
      <div className='pt-20'>
      <ExpandableCardDemo/>
      </div>

    </div>
  )
}

export default ExperienceAndEducation