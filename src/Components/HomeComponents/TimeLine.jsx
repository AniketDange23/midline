import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AiOutlineFileSearch } from "react-icons/ai";
import { RiFileTextFill } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";

const timelineData = [
  {
    "title": "Research",
    "icon": <AiOutlineFileSearch />,
    "description": "Identify potential clients and their industries. Gather information about their needs and pain points."
  },
  {
    "title": "Script Development",
    "icon": <RiFileTextFill />,
    "description": "Create a conversational script with key talking points. Customize the script to resonate with different types of businesses."
  },
  {
    "title": "Introduction Call",
    "icon": <AiOutlinePhone />,
    "description": "Make the first call to introduce yourself and your services. Keep the conversation friendly and brief to pique interest."
  },
  {
    "title": "Qualification and Needs Assessment",
    "icon": <FaRegHandshake />,
    "description": "Engage the prospect in conversation to understand their specific needs. Qualify leads based on their level of interest and fit for your services."
  },
  {
    "title": "Tailored Pitch",
    "icon": <IoIosRocket />,
    "description": "Present your services as solutions to the prospect’s pain points. Highlight benefits relevant to their business goals."
  },
  {
    "title": "Demonstration (if applicable)",
    "icon": <AiOutlineExclamationCircle />,
    "description": "Offer a live demo or provide examples to showcase the effectiveness of your services."
  },
  {
    "title": "Address Concerns",
    "icon": <AiFillStar />,
    "description": "Listen actively to objections and address them with empathy. Provide relevant examples or testimonials to build credibility."
  },
  {
    "title": "Establish Trust",
    "icon": <AiOutlineProfile />,
    "description": "Share success stories or case studies to demonstrate past results. Offer a satisfaction guarantee or trial period to alleviate concerns."
  },
  {
    "title": "Proposal Delivery",
    "icon": <AiOutlineCheckCircle />,
    "description": "Present a tailored proposal outlining the services, pricing, and timeline. Clearly communicate the next steps for moving forward."
  },
  {
    "title": "Overcome Final Hurdles",
    "icon": <AiOutlineQuestionCircle />,
    "description": "Handle any remaining objections or negotiation points with confidence. Ask for the sale and confirm their commitment to moving forward."
  },
  {
    "title": "Thank You",
    "icon": <AiOutlineMail />,
    "description": "Send a personalized thank-you email or note after the call. Express gratitude for their time and interest in your services."
  },
  {
    "title": "Post-Sale Support",
    "icon": <AiOutlineMessage />,
    "description": "Provide ongoing support and assistance to ensure a smooth transition. Stay in touch to nurture the relationship and explore future opportunities."
  }
];

const TimeLine = () => {
  return (
    <div className="container py-5">
    <h3 className='text-center py-4'>Our Process</h3>
       <VerticalTimeline>
      {timelineData.map((item, index) => (
        
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--${item.type}`}
          contentStyle={{ background: '#fff' , boxShadow:' 2px 2px 3px 3px #e5e5e5', color: '#000' }}
          contentArrowStyle={{ borderRight: '8px solid #f9f9f9', }}
          iconStyle={{ background: '#007bff', color: '#fff' }} // assuming blue color for all icons
          icon={item.icon} // Using the icon from the timelineData array
        >
        
          <h4 className="vertical-timeline-element-title">{item.title}</h4>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    </div>
   
  );
};

export default TimeLine;
