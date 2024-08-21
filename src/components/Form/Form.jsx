import React from 'react'

export default function Form() {
    return (
        <>
            <style>{`.container {
  max-width: 21.875rem; /* 350px */
  background: #F8F9FD;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
  border-radius: 2.5rem; /* 40px */
  padding: 1.5625rem 2.1875rem; /* 25px 35px */
  border: 0.3125rem solid rgb(255, 255, 255); /* 5px */
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 1.875rem 1.875rem -1.25rem; /* 0px 30px 30px -20px */
  margin: 1.25rem; /* 20px */
}

.heading {
  text-align: center;
  font-weight: 900;
  font-size: 1.875rem; /* 30px */
  color: rgb(16, 137, 211);
}

.form {
margin-top: 1.25rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 18.8rem;
}

.form .input {
  width: 100%;
  background: white;
  border: none;
  padding: 0.9375rem 1.25rem; /* 15px 20px */
  border-radius: 1.25rem; /* 20px */
  margin-top: 0.9375rem; /* 15px */
  box-shadow: #cff0ff 0px 0.625rem 0.625rem -0.3125rem; /* 10px 10px -5px */
  border-inline: 0.125rem solid transparent; /* 2px */
}

.form .input::-moz-placeholder {
  color: rgb(170, 170, 170);
}

.form .input::placeholder {
  color: rgb(170, 170, 170);
}

.form .input:focus {
  outline: none;
  border-inline: 0.125rem solid #12B1D1; /* 2px */
}

.form .forgot-password {
  display: block;
  margin-top: 0.625rem; /* 10px */
  margin-left: 0.625rem; /* 10px */
}

.form .forgot-password a {
  font-size: 0.6875rem; /* 11px */
  color: #0099ff;
  text-decoration: none;
}

.form .login-button {
  display: block;
  width: 100%;
  font-weight: bold;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  padding-block: 0.9375rem; /* 15px */
  margin: 1.25rem auto; /* 20px auto */
  border-radius: 1.25rem; /* 20px */
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 1.25rem 0.625rem -0.9375rem; /* 20px 10px -15px */
  border: none;
  transition: all 0.2s ease-in-out;
}

.form .login-button:hover {
  transform: scale(1.03);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 1.4375rem 0.625rem -1.25rem; /* 23px 10px -20px */
}

.form .login-button:active {
  transform: scale(0.95);
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 0.9375rem 0.625rem -0.625rem; /* 15px 10px -10px */
}

.social-account-container {
  margin-top: 1.5625rem; /* 25px */
}

.social-account-container .title {
  display: block;
  text-align: center;
  font-size: 0.625rem; /* 10px */
  color: rgb(170, 170, 170);
}

.social-account-container .social-accounts {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.9375rem; /* 15px */
  margin-top: 0.3125rem; /* 5px */
}

.social-account-container .social-accounts .social-button {
  background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
  border: 0.3125rem solid white; /* 5px */
  padding: 0.3125rem; /* 5px */
  border-radius: 50%;
  width: 2.5rem; /* 40px */
  aspect-ratio: 1;
  display: grid;
  place-content: center;
  box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 0.75rem 0.625rem -0.5rem; /* 12px 10px -8px */
  transition: all 0.2s ease-in-out;
}

.social-account-container .social-accounts .social-button .svg {
  fill: white;
  margin: auto;
}

.social-account-container .social-accounts .social-button:hover {
  transform: scale(1.2);
}

.social-account-container .social-accounts .social-button:active {
  transform: scale(0.9);
}

.agreement {
  display: block;
  text-align: center;
  margin-top: 0.9375rem; /* 15px */
}

.agreement a {
  text-decoration: none;
  color: #0099ff;
  font-size: 0.5625rem; /* 9px */
}
        `}</style>
            <div className="container">
                <div className="heading">Sign In</div>
                <form action="" className="form">
                    <input
                        required=""
                        className="input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                    />
                    <input
                        required=""
                        className="input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                    <span className="forgot-password">
                        <a href="#">Forgot Password ?</a>
                    </span>
                    <input className="login-button" type="submit" defaultValue="Sign In" />
                </form>
                <div className="social-account-container">
                    <span className="title">Or Sign in with</span>
                    <div className="social-accounts">
                        <button className="social-button google">
                            <svg
                                className="svg"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 488 512"
                            >
                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg>
                        </button>
                        <button className="social-button apple">
                            <svg
                                className="svg"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 384 512"
                            >
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                        </button>
                        <button className="social-button twitter">
                            <svg
                                className="svg"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                            >
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <span className="agreement">
                    <a href="#">Learn user licence agreement</a>
                </span>
            </div>
        </>
    )
}
