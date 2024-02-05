// Write your code here

import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="main-container">
    <Header />
    <div className="notfound-img-container">
      <div className="not-fount-responsive-container">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <h1 className="heading">Lost Your Way?</h1>
        <p className="content">
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  </div>
)
export default NotFound
