
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center bg-gray-200 p-4 px-8 md:px-32 mx-auto">
      <div className="flex-shrink-0 md:mr-4">
        <img
          src="https://i.ibb.co/rQcbmqs/christmas-toys-background-flat-design-23-2148350472.jpg"
          alt="Banner Image"
          className="ml-6 w-full md:w-auto"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold">Welcome to Our Website</h2>
        <p className="mt-2 md:w-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum, urna in finibus auctor, ligula dui
          ullamcorper nunc, a facilisis odio augue sed mi.
        </p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Read More</button>
      </div>
    </div>
  );
};

export default Banner;
