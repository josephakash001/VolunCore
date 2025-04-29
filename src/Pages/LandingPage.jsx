import React, { useEffect } from "react";
import { Search, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css';
import '/custom.scss';
import Navbar from "../Components/NavBar";
import { Container, Row, Col, Tab, Nav, Card,} from 'react-bootstrap';
import { HeartFill, Globe2, PeopleFill, LightbulbFill, ShieldLockFill, ChatDotsFill } from 'react-bootstrap-icons';


const categories = [
  { name: "Education", slug: "education", image: "/Assets/Edu1.png" ,description: "Improve literacy and support learning."},
  { name: "Environment", slug: "environment", image: "/Assets/Env1.png",description: "Protect nature and promote sustainability." },
  { name: "Healthcare", slug: "healthcare", image: "/Assets/Heal1.png",description: "Support health and well-being for all." },
  { name: "Humanitarian", slug: "humanitarian", image: "/Assets/Hum1.png",description: "Help communities in crisis or need."},
  { name: "Animal Welfare", slug: "animal-welfare", image: "/Assets/AnWel1.png",description: "Care for animals and protect wildlife." },
  { name: "Community", slug: "community", image: "/Assets/Comm1.png",description: "Strengthen and support local communities." },
];
const opportunities = [
  {
    id: 1,
    orgName: "Literacy First",
    title: "Literacy Program Volunteer",
    mode: "In-person",
    location: "New York, NY",
    schedule: "Weekly",
    duration: "3–6 months",
    skills: ["Teaching", "Communication", "Patience"],
    applicants: 12,
    description: "Help adults improve their reading and writing skills through our community literacy program. No...",
    delay: "0",
  },
  {
    id: 2,
    orgName: "Wildlife Alliance",
    title: "Web Developer for Conservation Project",
    mode: "Remote",
    location: "Remote",
    schedule: "10 hours/week",
    duration: "2–3 months",
    skills: ["React", "Node.js", "UI/UX"],
    applicants: 8,
    description: "Use your coding skills to help us build a platform to track endangered species. Looking for...",
    delay: "100",
  },
  {
    id: 3,
    orgName: "Community Food Network",
    title: "Food Bank Assistant",
    mode: "In-person",
    location: "Chicago, IL",
    schedule: "Flexible",
    duration: "Ongoing",
    skills: ["Organization", "Teamwork", "Physical Activity"],
    applicants: 5,
    description: "Join our team sorting and distributing food to families in need. Help us fight hunger in our...",
    delay: "200",
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

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
    <section className="w-100 py-5 bg-light" data-aos="fade-up">
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
    <section className="py-5" data-aos="fade-up">
        <Container className="text-center">
          <h2 className="display-5 fw-bold">Our Values</h2>
          <p className="text-muted mx-auto mb-5" style={{ maxWidth: '700px' }}>
            The principles that guide everything we do
          </p>
          <Row className="g-4 justify-content-center">
            {[
              { icon: <HeartFill size={24} />, title: 'Compassion', desc: 'We believe in the power of empathy and kindness to drive meaningful change in communities.' },
              { icon: <Globe2 size={24} />, title: 'Inclusivity', desc: 'We\'re committed to making volunteering accessible to everyone, regardless of background or ability.' },
              { icon: <PeopleFill size={24} />, title: 'Community', desc: 'We foster connections between people and organizations to build stronger communities.' },
              { icon: <LightbulbFill size={24} />, title: 'Innovation', desc: 'We continuously improve our platform to better serve volunteers and organizations.' },
              { icon: <ShieldLockFill size={24} />, title: 'Integrity', desc: 'We operate with transparency and honesty in all our interactions and decisions.' },
              { icon: <ChatDotsFill size={24} />, title: 'Collaboration', desc: 'We believe in the power of working together to achieve greater impact than any of us could alone.' },
            ].map((value, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 text-center border rounded-4 p-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto" style={{ width: "40px", height: "40px" }}>
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <Card.Title className="fw-bold">{value.title}</Card.Title>
                  <Card.Text className="text-muted small">{value.desc}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-light py-5" data-aos="fade-up">
        <Container className="text-center">
          <h2 className="display-5 fw-bold">How It Works</h2>
          <p className="text-muted mx-auto mb-5" style={{ maxWidth: '700px' }}>
            Our platform makes it easy to connect volunteers with organizations
          </p>

          <Tab.Container defaultActiveKey="volunteers">
            <Nav variant="tabs" className="justify-content-center mb-4">
              <Nav.Item>
                <Nav.Link eventKey="volunteers">For Volunteers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="organizations">For Organizations</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="volunteers">
                <Row className="g-4">
                  {[
                    { step: '1', title: 'Create a Profile', desc: 'Sign up and create your volunteer profile highlighting your skills, interests, and availability.' },
                    { step: '2', title: 'Find Opportunities', desc: 'Browse and search for volunteer opportunities that match your interests, skills, and schedule.' },
                    { step: '3', title: 'Apply & Connect', desc: 'Apply to opportunities, connect with organizations, and start making a difference.' },
                  ].map((item, index) => (
                    <Col md={4} key={index}>
                      <Card className="h-100 text-center p-3">
                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '48px', height: '48px' }}>
                          <strong>{item.step}</strong>
                        </div>
                        <Card.Title className="fw-bold">{item.title}</Card.Title>
                        <Card.Text className="text-muted small">{item.desc}</Card.Text>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="organizations">
                <Row className="g-4">
                  {[
                    { step: '1', title: 'Register Your Organization', desc: 'Create a detailed profile for your organization, highlighting your mission and impact.' },
                    { step: '2', title: 'Post Opportunities', desc: 'Create detailed listings for volunteer opportunities, specifying skills needed and time commitments.' },
                    { step: '3', title: 'Review & Connect', desc: 'Review applications from interested volunteers and connect with the right people for your needs.' },
                  ].map((item, index) => (
                    <Col md={4} key={index}>
                      <Card className="h-100 text-center p-3">
                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '48px', height: '48px' }}>
                          <strong>{item.step}</strong>
                        </div>
                        <Card.Title className="fw-bold">{item.title}</Card.Title>
                        <Card.Text className="text-muted small">{item.desc}</Card.Text>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
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
        <section className="py-5 bg-light text-center" data-aos="fade-up">
  <div className="container">
    <h2 className="display-5 fw-bold mb-3" data-aos="fade-up">Explore Opportunities</h2>
    <p className="text-muted mb-4" data-aos="fade-up" data-aos-delay="100">
      Find the perfect volunteer opportunity that matches your skills and interests
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
  {opportunities.map((opportunity, index) => (
    <div className="col" key={opportunity.id} data-aos="zoom-in-up" data-aos-delay={opportunity.delay}>
      <div className="card h-100 border rounded-4 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <strong>{opportunity.orgName}</strong>
            <span className="badge bg-secondary">{opportunity.mode}</span>
          </div>
          <h5 className="card-title">{opportunity.title}</h5>
          <p className="text-muted small">{opportunity.description}</p>
          <ul className="list-unstyled text-start small mb-2">
            <li><i className="bi bi-geo-alt-fill me-1"></i> {opportunity.location}</li>
            <li><i className="bi bi-calendar-week-fill me-1"></i> {opportunity.schedule}</li>
            <li><i className="bi bi-clock me-1"></i> {opportunity.duration}</li>
          </ul>
          <div className="mb-3">
            {opportunity.skills.map((skill, i) => (
              <span key={i} className="badge bg-secondary me-1">{skill}</span>
            ))}
          </div>
        </div>
        <div className="card-footer bg-transparent border-top d-flex justify-content-between align-items-center">
          <small className="text-muted">{opportunity.applicants} applicants</small>
          <a href="#" className="btn btn-outline-secondary btn-sm">View Details</a>
        </div>
      </div>
    </div>
  ))}
</div>

    <div className="mt-4" data-aos="fade-up" data-aos-delay="300">
      <a href="/opportunities" className="btn btn-outline-secondary d-inline-flex align-items-center">
        View All Opportunities <i className="bi bi-arrow-right ms-2"></i>
      </a>
    </div>
  </div>
</section>
{ /*Featured Organisations*/ }
<section><div className="container my-5">
      <h2 className="mb-4 text-center">Featured Organizations</h2>
      <div className="row">
        {organizations.map((org) => (
          <div key={org.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
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
        <section className="py-5 bg-secondary text-white">
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

      <footer className="border-top py-3 mt-auto">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0 text-muted small">© 2025 VolunCore. All rights reserved.</p>
          <div className="d-flex gap-3 small">
            <a href="/terms" className="text-muted text-decoration-none">Terms</a>
            <a href="/privacy" className="text-muted text-decoration-none">Privacy</a>
            <a href="/contact" className="text-muted text-decoration-none">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
