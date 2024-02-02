const Info = ({ imgSrc, head, para }) => {
  return (
    <div className="flex items-center my-6 px-2 md:px-0">
      <div className="p-4">
        <img className="w-16" src={imgSrc} alt="easy registration" />
      </div>

      <div className="max-w-96">
        <h2 className="text-xl font-bold">{head}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Info;
