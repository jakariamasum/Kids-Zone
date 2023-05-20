const Gallery = () => {
    const images = [
        'https://i.ibb.co/v30KbDW/81t-Pz-EJ25-HL-AC-SX679.jpg',
        'https://i.ibb.co/WHFpk5T/61-KOpu-EL1c-L-AC-SX679.jpg',
        'https://i.ibb.co/kgBZm5q/81-SUMOj-Wsa-L-AC-SY879.jpg',
        'https://i.ibb.co/6s3txDw/71-4-H60-Rex-L-AC-SX679.jpg',
        'https://i.ibb.co/N9FpR6j/71l2-Mfrh-Wk-L-AC-SX679.jpg',
        'https://i.ibb.co/wWKvWXC/61-F3p01-Op-L-AC-SX679.jpg',
        'https://i.ibb.co/bFxPc3n/81r-Xh06ult-L-AC-SX679.jpg',
        'https://i.ibb.co/kDtdRVF/81-POT1g-M6d-L-AC-SX679.jpg',
        'https://i.ibb.co/yyLDBTR/61-GXE3005-VL-AC-SX679.jpg',
        'https://i.ibb.co/MNczTSZ/71zs-Ycf-J7-L-AC-SX679.jpg',
        'https://i.ibb.co/wzgZ0V8/61-C41f9r9-DL-AC-SX679.jpg',
        'https://i.ibb.co/jZShTNv/71o-Ablu-K58-S-AC-SX679.jpg'
    ];

    return (
        <div className="mt-10 lg:mx-28">
            <h1 className="text-center mb-2 font-bold text-3xl">Gallery</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
                {images.map((img, indx) => (
                    <div key={indx} className="relative overflow-hidden">
                        <div className="relative">
                            <img src={img} alt={`Image ${indx + 1}`} className="w-full p-2 h-[350px] object-cover border" />
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
