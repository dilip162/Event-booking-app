import { useState } from "react";
import { checkValidData } from "../../utils/validate";

const FormComponent = () => {
  const [errorMessage, seterrorMessage] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBottonClick = async () => {
    const message = checkValidData(email, password);
    seterrorMessage(message);
    if (message) return;

    let item = { email, password };
    let result = await fetch("http://3.95.174.17:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("./home");
  };

  return (
    <div className="md:w-1/2 py-8 bg-gray-200 flex items-center justify-center">
      <div className="border  md:px-6 mx-10 w-4/5 md:w-2/3">
        <div className="flex mb-6">
          <img
            className="w-16"
            src="https://e7.pngegg.com/pngimages/919/445/png-clipart-bookmyshow-office-android-ticket-android-text-logo.png"
            alt=""
          />
          <h1 className="text-center text-3xl font-bold">Do it Yourself</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <label
            className="text-lg md:text-md font-bold md:font-semibold text-gray-800"
            htmlFor="mobile"
          >
            Email
          </label>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="mb-5 mt-2 rounded-md text-lg md:text-md  p-2 outline-none w-full"
              id="mobile"
              type="text"
              placeholder="Enter email"
            />
          </div>

          <label
            className="text-lg md:text-md font-bold md:font-semibold text-gray-800"
            htmlFor="password"
          >
            Password
          </label>
          <div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 rounded-md text-lg md:text-md p-2 w-full outline-none"
              id="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <a
            href="#"
            className="text-right border block font-semibold text-lg md:text-md text-blue-800"
          >
            Forgot password?
          </a>

          <p className="font-bold text-md text-red-600">{errorMessage}</p>

          <button
            type="submit"
            onClick={handleBottonClick}
            className="my-4 md:my-8 rounded-md text-lg md:text-md border text-white bg-black bg-opacity-40 p-2 w-full"
          >
            Proceed
          </button>

          <button className="font-semibold rounded-md text-lg md:text-md border text-blue-800 p-2 w-full">
            Login with OTP
          </button>

          <div className="border my-4 md:my-8 border-gray-600 rounded-lg"></div>

          <div className="text-center">
            <h3 className="font-bold">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-blue-800">
                Sign Up
              </a>
            </h3>
            {/* <p>Incase of any query, please write to</p>
            <a href="#" className="text-blue-800">
              bdbookmyshow.com
            </a> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
