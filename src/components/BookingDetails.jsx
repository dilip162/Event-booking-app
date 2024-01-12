import Info from "./Info";

const BookingDetails = () => {
  const benefits = [
    {
      imgSrc:
        "https://toppng.com/uploads/preview/file-svg-event-registration-registration-icon-115631876750lom6ofawp.png",
      head: "Quick and easy registration",
      para: "complete your registration with just one PAN card and bank details",
    },
    {
      imgSrc:
        "https://w7.pngwing.com/pngs/413/755/png-transparent-clock-computer-icons-symbol-timer-clock-angle-digital-clock-time.png",
      head: "Take your events live superfast!",
      para: "Publish your events within just 15 minutes! add events details, dates and ticket and BAM! your event is ready",
    },
    {
      imgSrc: "https://i.pngimg.me/thumb/f/720/comhiclipartyyoup.jpg",
      head: "Monitor analytics and insights",
      para: "Track event sales, daily ticketing, get daily insights and more in real time",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen py-8 px-16 w-1/2">
      <div>
        <h1 className="text-4xl text-center font-bold">
          Benefits of using-Do it Yourself our new event management tool
        </h1>
        <div className="mt-6 flex flex-col items-center">
          {benefits.map((benefit, idx) => (
            <Info
              key={idx}
              imgSrc={benefit.imgSrc}
              head={benefit.head}
              para={benefit.para}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
