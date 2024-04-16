import './TimeLine.css'
import { FaEarthAsia } from "react-icons/fa6";
const timelineData = [
  {
    icon: 1,
    title: "Empathetic Engagement",
    description: [
      "Understand Prospect Needs",
      "Active Listening",
      "Building Trust",
      "Personalized Approach"
    ]
  },
  {
    icon: 2,
    title: "Strategic Scripting",
    description: [
      "Crafting Conversational Scripts",
      "Highlighting Key Points",
      "Ensuring Clarity",
      "Fluid Conversation Flow"
    ]
  },
  {
    icon: 3,
    title: "Personalized Outreach",
    description: [
      "Tailoring Solutions",
      "Addressing Specific Needs",
      "Showing Genuine Interest",
      "Connecting on a Human Level"
    ]
  },
  {
    icon: 4,
    title: "Continuous Training and Development",
    description: [
      "Ongoing Learning",
      "Adopting Latest Techniques",
      "Industry Insights",
      "Skill Enhancement"
    ]
  },
  {
    icon: 5,
    title: "Data-Driven Insights",
    description: [
      "Analyzing Metrics",
      "Call-to-Conversion Rates",
      "Prospect Feedback",
      "Optimization Strategies"
    ]
  },
  {
    icon: 6,
    title: "Transparent Communication",
    description: [
      "Honesty and Integrity",
      "Keeping Clients Informed",
      "Progress Updates",
      "Collaborative Partnership"
    ]
  }
];

const Timeline = () => {
  return (
    <div className="bg">
      <div className="container mt-5">
        <h2 className="text-center">Our Process</h2>
        <div className="row py-5">
          <div className="col-md-12">
            <div className="main-timeline">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline">
                  <a href="#" className="timeline-content">
                    <div className="timeline-icon">
                      <i>{item.icon}</i>
                    </div>
                    <h3 className="title">{item.title}</h3>
                    <p className="description">
                      {item.description.map((desc, idx) => (
                        <span key={idx}>
                          {idx + 1}. {desc}
                          <br />
                        </span>
                      ))}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
