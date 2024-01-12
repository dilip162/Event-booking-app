const FormComponent = () => {
  return (
    <div className="w-1/2  bg-gray-200 flex items-center justify-center">
      <div className="border  px-6 mx-10 w-2/3">
        <div className="flex mb-6">
          <img
            className="w-16"
            src="https://e7.pngegg.com/pngimages/919/445/png-clipart-bookmyshow-office-android-ticket-android-text-logo.png"
            alt=""
          />
          <h1 className="text-3xl font-bold">Do it Yourself</h1>
        </div>

        <form>
          <label
            className="text-md font-semibold text-gray-800"
            htmlFor="mobile"
          >
            Mobile no.
          </label>
          <div>
            <input
              className="mb-5 mt-2 rounded-md text-md  p-2 outline-none w-full"
              id="mobile"
              type="text"
              placeholder="Enter Mobile no."
            />
          </div>

          <label
            className="text-md font-semibold text-gray-800"
            htmlFor="password"
          >
            Password
          </label>
          <div>
            <input
              className="mt-2 rounded-md text-md p-2 w-full outline-none"
              id="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <a
            href="#"
            className="text-right border block font-semibold text-md text-blue-800"
          >
            Forgot password?
          </a>

          <button className="my-8 rounded-md text-md border text-white bg-black bg-opacity-40 p-2 w-full">
            Proceed
          </button>

          <button className="font-semibold rounded-md text-md border text-blue-800 p-2 w-full">
            Login with OTP
          </button>

          <div className="border my-8 border-gray-600 rounded-lg"></div>

          <div className="text-center">
            <h3 className="font-bold">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-blue-800">
                Sign Up
              </a>
            </h3>
            <p>Incase of any query, please write to</p>
            <a href="#" className="text-blue-800">
              bdbookmyshow.com
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
