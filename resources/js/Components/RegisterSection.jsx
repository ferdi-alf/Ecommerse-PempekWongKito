const RegisterSection = () => {
    return (
        <div className="w-full sm:w-5/6 justify-center items-center mt-20 mb-10 flex flex-col gap-y-3">
            <p className=" moderustic font-bold text-center text-xl">
                Ingin mendaftarkan toko oleh-oleh anda? <br />
                <p className="pulse">Klik di bawah ini </p>
            </p>
            <button className="btn text-white flex flex-nowrap justify-center items-center gap-x-2 font-semibold bg-transparent w-60 bg-gradient-to-br from-red-700 to-orange-400">
                <i class="fa-solid fa-shop"></i>
                Daftar
            </button>
        </div>
    );
};

export default RegisterSection;
