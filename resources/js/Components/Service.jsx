import {
    faBowlFood,
    faCoins,
    faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Service = () => {
    return (
        <div className="w-full flex flex-wrap md:justify-around justify-center gap-y-10  items-center">
            <div className="flex flex-col lg:w-[12%] md:w-1/6 text-center ">
                <FontAwesomeIcon
                    icon={faTruck}
                    className="text-5xl text-orange-400"
                />
                <p className="moderustic font-light ">
                    Pengeriman cepat dan aman
                </p>
            </div>
            <div className="flex flex-col lg:w-[12%] md:w-1/6 text-center ">
                <FontAwesomeIcon
                    icon={faCoins}
                    className="text-5xl text-orange-400"
                />
                <p className="moderustic font-light ">
                    Harga murah dan terjangkau
                </p>
            </div>
            <div className="flex flex-col lg:w-[12%] md:w-1/6 text-center ">
                <FontAwesomeIcon
                    icon={faBowlFood}
                    className="text-5xl text-orange-400"
                />
                <p className="moderustic font-light ">
                    Rasa asli pempek Pelembang
                </p>
            </div>
        </div>
    );
};

export default Service;
