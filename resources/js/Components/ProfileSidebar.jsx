import { Link } from "@inertiajs/react";

const ProfileSidebar = ({ auth, noAvatar }) => {
    return (
        <>
            {auth ? (
                <>
                    <img
                        className="h-12 w-15 rounded-full"
                        src={noAvatar}
                        alt=""
                    />
                    <div className="flex flex-col">
                        <p className="text-sm font-light moderustic">
                            Muhammad Ferdi Alfian
                        </p>
                        <p className="text-xs font-bold">
                            ferdialfianferdi@gmail.com
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <img
                        className="h-12 w-15 rounded-full"
                        src={noAvatar}
                        alt=""
                    />
                    <div className="flex flex-col text-center">
                        <Link className="text-blue-500 hover:underline">
                            login
                        </Link>
                    </div>
                </>
            )}
        </>
    );
};

export default ProfileSidebar;
