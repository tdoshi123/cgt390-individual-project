import Navbar from '../components/Navbar'
import '../styles/About.css'

function About() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <h1>About Cosmobucks</h1>
        <div className="about-content">          
          <div className="origin-story">
            <h2>The Cosmic Origin</h2>
            <p>
              One day, Professor Hannah Zong gave us what seemed like a simple assignment: 
              "Create a website that showcases your skills." Little did she know, this would 
              spark the birth of a cosmic coffee empire (well, at least a virtual one)!
            </p>
            <p>
              While other students were building portfolio sites, I thought, 
              "Why not create an intergalactic coffee shop?" And thus, Cosmobucks was born – 
              where your coffee is literally out of this world. Professor Zong probably didn't 
              expect her assignment to result in a coffee company that serves espresso with a 
              side of stellar puns, but here we are!
            </p>
            <p>
              So thank you, Professor Zong, for inadvertently inspiring a coffee website that 
              takes "shooting for the stars" quite literally. This may not be a real coffee chain 
              (yet), but we're definitely serving up the most astronomical coffee experience on 
              the internet!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About