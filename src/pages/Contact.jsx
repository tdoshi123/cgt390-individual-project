import Navbar from '../components/Navbar'

function Contact() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <p>Get in touch with Cosmobucks</p>
          {/* Add contact form or information here */}
        </div>
      </div>
    </div>
  )
}

export default Contact