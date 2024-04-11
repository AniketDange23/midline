import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  { name: "Mr. Komal Kumbhare", role: "Founder & CEO", imgSrc: "/team-2.jpg", companyName:"MIDLINE Media Solution" },
];

const TeamSection = () => {
  return (

        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <div className="team-member text-center shadow  py-2" style={{width:"330px"}}>
                <div className="team-member-img position-relative mb-2">
                  <img className="img-fluid w-100" src={member.imgSrc} alt={`Portrait of ${member.name}`} />
                  <div className="hover-icon py-4">
                    <ul className="list-inline social-icon">
                      <li className="list-inline-item">
                        <a href="https://www.facebook.com" className="hover-ripple ripple-white"><FaFacebook style={{width:"25px" ,height:"25px"}}/> </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.twitter.com" className="hover-ripple ripple-white"><FaTwitter style={{width:"25px" ,height:"25px"}}/></a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com" className="hover-ripple ripple-white"><FaLinkedin style={{width:"25px" ,height:"25px"}}/></a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <h4><a href="team-single.html" className="text-dark">{member.name}</a></h4>
                <span>{member.role}</span> <br/>
                <h6> {member.companyName}</h6>
              </div>
            </div>
          ))}
        </div>
   
  );
}

export default TeamSection;
