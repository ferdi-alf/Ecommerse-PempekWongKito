const Service = () => {
    return (
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            <div className="flex flex-col  text-center ">
                <i class="fa-solid fa-bag-shopping text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-orange-400"></i>
                <p className="moderustic font-light ">
                    Menyediakan segala macam tokoh oleh-oleh dari palembang
                </p>
            </div>
            <div className="flex flex-col  text-center ">
                <i class="fa-solid fa-coins text-5xl  text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-orange-400"></i>
                <p className="moderustic font-light ">
                    Gratis pendaftaran tanpa biaya untuk toko
                </p>
            </div>
            <div className="flex flex-col  text-center ">
                <i class="text-5xl fa-solid fa-location-dot text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-orange-400"></i>
                <p className="moderustic font-light ">
                    Navigasi dan petunjuk arah langsung
                </p>
            </div>
        </div>
    );
};

export default Service;
