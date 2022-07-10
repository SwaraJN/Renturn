import React from 'react'

const Signin = () => {
  return (
    <div>
      <div id="login">
  <h2>Login</h2>
  <form id="login">
    <p>
    <input type="text" id="username" name="username" placeholder="Username" required/>
    </p>
    <p>
    <input type="email" id="email" name="email" placeholder="Email Address" required/>
    </p>
    <p>
    <input type="submit" id="login" value="Login"/>
    </p>
  </form>
  <div id="create-account-wrap">
    <p>Not a member? <a href="">Create Account</a></p>
  </div>
</div>

    </div>
  )
}

export default Signin