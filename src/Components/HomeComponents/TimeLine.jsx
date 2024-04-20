import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TimeLine.css'
import { FaCheckCircle, FaDatabase, FaPhoneAlt, FaQuestionCircle, FaRegHandshake, FaTools, FaUserAlt } from "react-icons/fa";

import { FaEarDeaf } from 'react-icons/fa6';

const timelineData = [
  {
    step: "Call Routing",
    description: "An inbound call from a customer experiencing internet connectivity issues is routed to an agent with technical support skills.",
    icon: <FaPhoneAlt />
  },
  {
    step: "Initial Interaction",
    description: "The agent greets the customer, identifies themselves, and asks about the problem.",
    icon: <FaUserAlt />
  },
  {
    step: "Active Listening",
    description: "The agent listens patiently as the customer describes their internet issues, allowing them to vent their frustration.",
    icon: <FaEarDeaf />
  },
  {
    step: "Information Gathering",
    description: "The agent asks clarifying questions to pinpoint the specific problem (e.g., no internet connection, slow browsing speed).",
    icon: <FaQuestionCircle />
  },
  {
    step: "Knowledge Base Access",
    description: "The agent utilizes the internal knowledge base to find troubleshooting steps for the reported issue.",
    icon: <FaDatabase />
  },
  {
    step: "Resolution",
    description: "The agent guides the customer through the troubleshooting steps, successfully resolving the internet connectivity issue.",
    icon: <FaTools />
  },
  {
    step: "Wrap-Up",
    description: "The agent confirms that the internet is now working properly, offers further technical support resources if needed, documents the call details, and thanks the customer for their patience.",
    icon: <FaCheckCircle />
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
          iconStyle={{ background: '#26589E', color: '#fff' }} // assuming blue color for all icons
          icon={item.icon} // Using the icon from the timelineData array
        >
        
          <h4 className="vertical-timeline-element-title">{item.step}</h4>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
    </div>
   
  );
};

export default TimeLine;
