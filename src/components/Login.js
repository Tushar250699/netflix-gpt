import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://www.dishtv.in/adobe/dynamicmedia/deliver/dm-aid--fcfd47a9-a4a5-47f3-8431-f87ccd9ada05/2-good-to-be-true-desk.png?quality=82&preferwebp=true" alt="logo" />
      </div>
      <div>
        <form className="w-3/12 absolute p-12 bg-black my-20 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
          <h1 className="font-bold text-3xl p-3">
            {isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {isSignInForm && <input type="text" placeholder="Full Name" className="p-3 m-2 w-full bg-gray-800" />}
          <input type="text" placeholder="Email Address" className="p-3 m-2 w-full bg-gray-800" />
          <input type="password" placeholder="Password" className="p-3 m-2 w-full bg-gray-800" />

          <button className="p-4 mx-2 my-2 bg-red-700 w-full rounded-lg font-bold">{isSignInForm ? "Sing In" : "Sing Up"}</button>
          <p className="py-3 m-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>
      </div>
    </div>
  )
}
export default Login;