import { useState } from 'react'
import './LoginStatus.css'

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="login-status-container">
      <h1>Login Status</h1>
      
      {isLoggedIn ? (
        <div className="login-message welcome">
          <p>Welcome, User!</p>
        </div>
      ) : (
        <div className="login-message prompt">
          <p>Please Login</p>
        </div>
      )}

      <button onClick={handleToggle} className="toggle-btn">
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default LoginStatus
