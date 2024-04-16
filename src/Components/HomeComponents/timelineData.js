import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const timelineData = [
  {
    year: "2023",
    title: "Bootstrap 5",
    description: "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."
  },
  {
    year: "2022",
    title: "Bootstrap 4",
    description: "Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page. Bootstrap 4 has no active support."
  },
  {
    year: "2019",
    title: "Bootstrap 3",
    description: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web. Bootstrap 3 has no active support."
  },
  {
    year: "2013",
    title: "Bootstrap 2",
    description: "Sleek, intuitive, and powerful front-end framework for faster and easier web development. Bootstrap 2 is no longer officially supported."
  }
];

const TimelineItem = ({ year, title, description, alignment }) => (
  <li className={`timeline-item ${alignment}`}>
    <div className="timeline-body">
      <div className="timeline-content timeline-indicator">
        <div className="card border-0 shadow">
          <div className="card-body p-xl-4">
            <h5 className="card-subtitle text-secondary mb-1">{year}</h5>
            <h2 className="card-title mb-3">{title}</h2>
            <p className="card-text m-0">{description}</p>
          </div>
        </div>
      </div>
    </div>
  </li>
);

const Timeline = () => (
  <section className="bsb-timeline-3 bg-light py-3 py-md-5 py-xl-8">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-12 col-xl-10 col-xxl-9">
          <ul className="timeline">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                alignment={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
