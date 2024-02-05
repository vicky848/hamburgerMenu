// Write your code here

import './index.css'
import Header from '../Header'

const About = () => (
  <div className="main-container">
    <Header />
    <div className="about-img-container">
      <img
        className="mobile-img"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png "
        alt="about"
      />

      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
        alt="about"
      />
    </div>
  </div>
)
export default About
