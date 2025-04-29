import React, { useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css';
import '/custom.scss';
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";


const categories = [
  { name: "Education", slug: "education", image: "/Assets/Edu1.png" ,description: "Improve literacy and support learning."},
  { name: "Environment", slug: "environment", image: "/Assets/Env1.png",description: "Protect nature and promote sustainability." },
  { name: "Healthcare", slug: "healthcare", image: "/Assets/Heal1.png",description: "Support health and well-being for all." },
  { name: "Humanitarian", slug: "humanitarian", image: "/Assets/Hum1.png",description: "Help communities in crisis or need."},
  { name: "Animal Welfare", slug: "animal-welfare", image: "/Assets/AnWel1.png",description: "Care for animals and protect wildlife." },
  { name: "Community", slug: "community", image: "/Assets/Comm1.png",description: "Strengthen and support local communities." },
];
const activities = [
  {
    id: 1,
    orgName: "Helping Hands",
    title: "Food Distribution Volunteer",
    description: "Assist in distributing food to the needy in your locality.",
    location: "Chennai",
    schedule: "Weekends",
    duration: "3 hours/day",
    skills: ["Teamwork", "Organization"],
    applicants: 24,
    mode: "Onsite",
    delay: "100"
  },
  {
    id: 2,
    orgName: "Green Earth",
    title: "Tree Plantation Drive",
    description: "Join our team to plant more and more trees across the city.",
    location: "Bangalore",
    schedule: "Weekdays",
    duration: "2 hours/day",
    skills: ["Gardening", "Awareness"],
    applicants: 40,
    mode: "Remote",
    delay: "200"
  },
  {
    id: 3,
    orgName: "EduForAll",
    title: "Online Tutor for Underprivileged Kids",
    description: "Teach school subjects online to students in need.",
    location: "Online",
    schedule: "Flexible",
    duration: "1 hour/day",
    skills: ["Teaching", "Communication"],
    applicants: 55,
    mode: "Remote",
    delay: "300"
  },
];

const organizations = [
  {
    id: "1",
    name: "Literacy First",
    category: "Education",
    description:
      "Dedicated to improving literacy rates and providing educational resources to underserved communities.",
    location: "New York, NY",
    established: 2005,
    volunteers: 120,
    opportunities: 5,
    logo: "/Assets/dp1.png",
  },
  {
    id: "2",
    name: "Wildlife Alliance",
    category: "Environment",
    description:
      "Working to protect endangered species and their habitats through conservation efforts and education.",
    location: "San Francisco, CA",
    established: 1998,
    volunteers: 85,
    opportunities: 3,
    logo: "/Assets/dp1.png",
  },
  {
    id: "3",
    name: "Community Food Network",
    category: "Humanitarian",
    description:
      "Fighting hunger by distributing food to those in need and addressing the root causes of food insecurity.",
    location: "Chicago, IL",
    established: 2010,
    volunteers: 200,
    opportunities: 8,
    logo: "/Assets/dp1.png",
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // ensures animation only happens once
    });
    AOS.refresh(); // Force refresh after init
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="sticky-top bg-white border-bottom py-3 shadow-sm">
        <Navbar />
      </header>

      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="py-5 bg-light text-center hero-section" data-aos="fade-down">
          <div className="container">
            <h1 className="display-5 fw-bold mb-3 text-black">
              Connect with causes that matter to you
            </h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
              Find volunteer opportunities with NGOs making a difference in your community and around the world.
            </p>
            <div className="row justify-content-center mt-4 g-3" data-aos="fade-up" data-aos-delay="300">
            <div className="col-12 col-md-5 position-relative">
              <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={16} />
              <input type="text" className="form-control ps-5" placeholder="Search opportunities or organizations" />
            </div>
            <div className="col-12 col-md-3 position-relative">
              <MapPin className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={16} />
              <input type="text" className="form-control ps-5" placeholder="Location" />
            </div>
            <div className="col-12 col-md-auto">
              <button className="btn btn-primary d-flex align-items-center gap-1 w-100 w-md-auto">
                <Search size={16} /> Search
              </button>
            </div>
          </div>
          </div>
        </section>
    {/* About Section */}
    <section id="aboutUs" className="w-100 py-5 bg-light" data-aos="fade-up">
      <div className="container px-3 px-md-5">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-3">About VolunCore</h1>
            <h2 className="fw-bold mb-3">Connecting Passion with Purpose</h2>
            <p className="text-muted lead">
              VolunCore is a platform that bridges the gap between volunteers and organizations,
              making it easier for people to find meaningful opportunities and for NGOs to find the help they need.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-5">
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                <span>Find opportunities that match your skills and interests</span>
              </li>
              <li className="d-flex align-items-start mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                <span>Connect with reputable organizations making real impact</span>
              </li>
              <li className="d-flex align-items-start mb-2">
                <i className="bi bi-check-circle-fill text-primary me-2"></i>
                <span>Track your volunteer hours and build your impact profile</span>
              </li>
            </ul>

            <div className="mt-4 text-center">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Categories */}
      <section className="py-5 text-center" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Browse by Category</h2>
          <p className="text-muted mb-4">Discover volunteer opportunities in areas you're passionate about</p>
          <div className="container">
            <div className="row g-3">
            {categories.map((cat, i) => (
            <div
              key={cat.slug}
              className="col-6 col-md-4 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <a href={`/category/${cat.slug}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0">
                  <div className="ratio ratio-1x1">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="card-img-top rounded object-fit-contain p-2"
                      style={{ maxHeight: "120px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="card-body text-center px-2 py-3">
                    <h6 className="fw-bold mb-1 text-dark">{cat.name}</h6>
                    <p className="text-muted small mb-0 ">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
            </div>
          </div>
        </section>

        {/*Opportunities */}
        <section id="activity" className="py-5 bg-light text-center" data-aos="fade-up">
  <div className="container">
    <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Explore Activities</h2>
    <p className="text-muted mb-4" data-aos="fade-up" data-aos-delay="100">
      Find the perfect volunteer activity that matches your skills and interests
    </p>

    <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap" data-aos="fade-up" data-aos-delay="200">
      <button className="btn-primary btn text-white ">Featured</button>
      <button className="btn btn-outline-secondary">Remote</button>
      <button className="btn btn-outline-secondary">Urgent Needs</button>
      <button className="btn btn-outline-secondary d-flex align-items-center">
        <i className="bi bi-funnel-fill me-2"></i> Filters
      </button>
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-4">
  {activities.map((activity, index) => (
    <div className="col" key={activity.id} data-aos="zoom-in-up" data-aos-delay={activity.delay}>
      <div className="card h-100 border rounded-4 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <strong>{activity.orgName}</strong>
            <span className="badge bg-secondary">{activity.mode}</span>
          </div>
          <h5 className="card-title">{activity.title}</h5>
          <p className="text-muted small">{activity.description}</p>
          <ul className="list-unstyled text-start small mb-2">
            <li><i className="bi bi-geo-alt-fill me-1"></i> {activity.location}</li>
            <li><i className="bi bi-calendar-week-fill me-1"></i> {activity.schedule}</li>
            <li><i className="bi bi-clock me-1"></i> {activity.duration}</li>
          </ul>
          <div className="mb-3">
            {activity.skills.map((skill, i) => (
              <span key={i} className="badge bg-secondary me-1">{skill}</span>
            ))}
          </div>
        </div>
        <div className="card-footer bg-transparent border-top d-flex justify-content-between align-items-center">
          <small className="text-muted">{activity.applicants} applicants</small>
          <a href="#" className="btn btn-outline-secondary btn-sm">View Details</a>
        </div>
      </div>
    </div>
  ))}
</div>

    <div className="mt-4" data-aos="fade-up" data-aos-delay="300">
      <a href="/activities" className="btn btn-outline-secondary d-inline-flex align-items-center">
        View All Activities <i className="bi bi-arrow-right ms-2"></i>
      </a>
    </div>
  </div>
</section>
{ /*Featured Organisations*/ }
<section id="organization"><div className="container my-5" data-aos="fade-up">
      <h2 className="mb-4 text-center">Featured Organizations</h2>
      <div className="row">
        {organizations.map((org) => (
          <div key={org.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm" data-aos="zoom-in-up" data-aos-delay={organizations.delay} >
              <div className="card-body text-center d-flex flex-column">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h5 className="card-title">{org.name}</h5>
                <p className="text-muted">{org.category}</p>
                <p className="card-text">{org.description}</p>
                <ul className="list-unstyled mt-auto">
                  <li className="text-muted">
                    <i className="bi bi-geo-alt-fill me-1"></i> {org.location}
                  </li>
                  <li className="text-muted">
                    <i className="bi bi-calendar3 me-1"></i> Est. {org.established}
                  </li>
                  <li className="text-muted">
                    <i className="bi bi-people-fill me-1"></i> {org.volunteers} volunteers
                  </li>
                </ul>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <span className="badge bg-secondary">{org.opportunities} opportunities</span>
                <Link to={'/organizations/${org.id}'} className="btn btn-outline-primary btn-sm">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>

        {/* CTA Section */}
        <section className="py-4 bg-secondary text-white">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6" data-aos="fade-right">
                <h2 className="fw-bold mb-3">Make a difference today</h2>
                <p className="mb-4">Join thousands of volunteers using their skills and passion to create change.</p>
                <div className="d-flex flex-column flex-sm-row gap-2">
                  <a href="/signup?type=volunteer" className="btn btn-light text-dark">Become a Volunteer</a>
                  <a href="/signup?type=organization" className="btn btn-outline-light">Register Your Organization</a>
                </div>
              </div>
              <div className="col-lg-6 " data-aos="fade-left">
              <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9879739509036!2d-74.00601568459559!3d40.71277577933092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMTIuMiJX!5e0!3m2!1sen!2sus!4v1614379602222!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-5 bg-secondary">
      <Footer />
</footer>
    </div>
  );
}
