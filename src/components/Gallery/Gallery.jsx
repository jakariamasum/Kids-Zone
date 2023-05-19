const Gallery = () => {
    const images = [
        'https://i.ibb.co/7by202m/31-B32-RE8x-AL-SX300-SY300-QL70-FMwebp.webp',
        'https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318378.jpg?w=1060&t=st=1684480705~exp=1684481305~hmac=e3cdd0433fc721383d268503289f943cf9d5b3b1261715d25ab9ffccd9ec6aac',
        'https://img.freepik.com/free-photo/close-up-toy-car-with-easter-eggs_23-2149318378.jpg?w=1060&t=st=1684480705~exp=1684481305~hmac=e3cdd0433fc721383d268503289f943cf9d5b3b1261715d25ab9ffccd9ec6aac',
        // ... add more image URLs here
    ];

    return (
        <div className="mt-10 lg:mx-28">
            <h1 className="text-center mb-2 font-bold text-3xl">Gallery</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                {images.map((img, indx) => (
                    <div key={indx} className="relative overflow-hidden">
                        <div className="relative">
                            <img src={img} alt={`Image ${indx + 1}`} className="w-full h-full object-cover" />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-50 bg-black">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
