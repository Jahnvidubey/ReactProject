import React from 'react'

export default function Login() {
  return (
      <div className="body">
    <div className="container">
        <dive className="formWraper">
 
            <div className="formDiv">
                <h2>Create Account</h2>
                <p className="text"> Sign Up with Social Media</p>
 
                <div className="socialBtn">
                    <div className="facebook icon"><i className="fab fa-facebook-f"></i></div>
                    <div className="twitter icon"><i className="fab fa-twitter"></i></div>
                    <div className="instagram icon"><i className="fab fa-instagram"></i></div>
                </div>
                 
               
                <hr/>
                <div className="orDiv">Or</div>
 
                <p className="text">Sign Up with Email Address</p>
                <div className="formGroup">
                    <i className="far fa-user"></i>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div className="formGroup">
                    <i className="far fa-envelope"></i>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                </div>
                <div className="formGroup">
                    <i className="fas fa-lock"></i>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>
                <div className="checkBox">
                    <input type="checkbox" name="checkbox" id="checkbox"/>
                    <span className="text">I Agree with Term & Conditions.</span>
                </div>
                <button className="btn">SIGN UP</button>
            </div>
           
            <div className="welcomeDiv">
                <h2>Welcome Back!</h2>
                <p className="text">Get in touch with us for our news letter and more updates.</p>
                <button className="btn2">SIGN IN</button>
            </div>
 
        </dive>
    </div>
    </div>
  )
}
