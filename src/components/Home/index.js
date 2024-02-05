import './index.css'

import Header from '../Header'

// Write your code here
const Home = () => (
  <div className="main-container">
    <Header />
    <div className="home-img-container">
      <img
        className="mobile-img"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />

      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)
export default Home
