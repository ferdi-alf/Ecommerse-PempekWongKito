import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Product = () => {
    return (
        <div className="flex items-center p-2 justify-center rounded-md bg-gray-100  dark:bg-gray-800">
            <div className="w-full flex flex-col gap-y-1 sm:gap-y-4">
                <div className="">
                    <img
                        cla
                        src="https://linscakes.com/wp-content/uploads/2022/05/resep-pempek-ikan-tenggiri-palembang-gurih-scaled.jpg"
                        alt=""
                    />
                </div>
                <p className="moderustic text-lg sm:text-2xl font-semibold">
                    Pempek Telur
                </p>
                <div className="detail flex flex-col">
                    <p className="text-lg line-through">RP: 19.000</p>
                    <p className="text-xl font-bold moderustic bg-clip-text text-transparent bg-gradient-to-br from-red-600 to-orange-400">
                        Rp: 15.000
                    </p>
                </div>
                <div className="w-full flex mt-1 sm:mt-3 flex-nowrap justify-between">
                    <button className="text-2xl text-orange-400 w-[5%] font-semibold">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>

                    <button className="bg-gradient-to-br bb rounded-md from-red-600 to-orange-400 text-white bg-transparent w-4/5 sm:w-[85%]">
                        Beli
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
