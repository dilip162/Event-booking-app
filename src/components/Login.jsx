import BookingDetails from "./BookingDetails";
import FormComponent from "./FormComponent";
const Login = () => {
  return (
    <div className="flex flex-col-reverse md:flex md:flex-row  max-w-[1545px] mx-auto">
      <BookingDetails />
      <FormComponent />
    </div>
  );
};

export default Login;
