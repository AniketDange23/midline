import React from 'react';
import './TimeLine.css';

// Define a TimelineItem component to render each item in the timeline
const TimelineItem = ({ title, items, index }) => (
  <div className={`tl-container ${index % 2 === 0 ? 'tl-left' : 'tl-right'}`}>
    <div className="tl-content  ">
      <h5 className=" ">{title}</h5>
      <ul>
        {items.map((item, i) => (
          <li key={i}  style={{marginLeft:"-25px"}}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

// Define the array of timeline data
const timelineData = [
  {
    title: "Meeting & Research",
    items: [
      "Expert Assistance",
      "Efficient Operations",
      "Latest Technology",
      "Effective Workflows"
    ]
  },
  {
    title: "Design & Development",
    items: [
      "Start Design with Client",
      "List Required Content Submission Content & Photo",
      "Home Pages Design & Home Page Review & Feedback",
      "Pages Design & Inner Pages Review & Feedback",
      "Frontend & Backend Coding",
      "Content Uploading"
    ]
  },
  {
    title: "QA Testing",
    items: [
      "Cross Browser & Device testing",
      "Code Validation Testing",
      "Testing Review & Feedback",
      "Refinement Final Approval"
    ]
  },
  {
    title: "SEO Friendly Update",
    items: [
      "Webpages Speed Optimization",
      "Onpage SEO Optimization",
      "Generate Sitemap"
    ]
  },
  {
    title: "Launch",
    items: [
      "Upload On Server",
      "Testing On Live Environment",
      "Backend Training"
    ]
  },
  {
    title: "24/7 Services",
    items: [
      "Round-the-Clock Availability",
      "Rapid Response Time",
      "Expert Assistance",
      "Flexibility and Convenience"
    ]
  }
];

// Define a Timeline component to render the entire timeline
const Timeline = () => (
  <div className='py-5'>
    <h3 className='text-center mb-2'>Our Process</h3>
<div className="tl py-5">
    {timelineData.map((item, index) => (
      <TimelineItem key={index} index={index} title={item.title} items={item.items} />
    ))}
  </div>
  </div>
  
);

export default Timeline;
