import React, { useState } from 'react';

const Slider = () => {
  const [presentSlide, setPresentSlide] = useState(0);
  const slides = [
    {
      image: 'https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686884.jpg?w=1060&t=st=1684478599~exp=1684479199~hmac=4421c4ea2f59569917b26cbd9a6de4f9c77a766c16dcd35b83a2b96045584506',
      text: 'Slide 1',
    },
    {
      image: 'https://img.freepik.com/free-photo/play-dough-background-with-frog_23-2149700373.jpg?w=1060&t=st=1684478625~exp=1684479225~hmac=3610b8b3c579c6d0d70d1b8d332ecd879b0a82276cbc2b43132ec71e49a2c006',
      text: 'Slide 2',
    },
    {
      image: 'https://img.freepik.com/free-photo/child-perspective-motorcar-generic-race_1232-3545.jpg?w=1060&t=st=1684478647~exp=1684479247~hmac=0bd979d30b25f1d711368d430be7608f0d7dc927f1b9535602a119441089bdf1',
      text: 'Slide 3 dsjnfjksbfbsefwiegfiw sacbshicb asbid abdhbdbs sefbiesbfb sfebsbfb fhbdfbd fkhbdb dfhbdf bdhbfbs s erbr ',
    },
  ];

  const handleSlide = (slideIndex) => {
    setPresentSlide(slideIndex);
  };

  const handlePreviousSlide = () => {
    setPresentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setPresentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className=" mx-auto mt-10">
      <div className="relative">
        <img src={slides[presentSlide].image} alt={slides[presentSlide].text} className="w-full h-[100vh] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
          <h3 className="text-2xl font-bold mb-4">{slides[presentSlide].text}</h3>
          <div className="flex space-x-4">
            {slides.map((slide, indx) => (
              <button
                key={indx}
                className={`w-4 h-4 rounded-full ${indx === presentSlide ? 'bg-white' : 'bg-gray-300'}`}
                onClick={() => handleSlide(indx)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={handlePreviousSlide}>
          Previous
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
