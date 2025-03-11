import Navbar from '../components/Navbar'

function About() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <h1>About Cosmobucks</h1>
        <div className="about-content">
          <p>Welcome to Cosmobucks Coffee Company, where every cup tells a story.</p>
        </div>
      </div>
    </div>
  )
}

export default About