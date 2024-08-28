const PasswordRule = ({ isValid, text }) => {
    return (
        <div
            className={`flex flex-nowrap text-xs sm:text-sm gap-x-2 items-center moderustic ${
                isValid ? "text-green-500" : "text-red-500"
            }`}
        >
            <i className={`fa-solid ${isValid ? "fa-check" : "fa-x"}`}></i>
            <p>{text}</p>
        </div>
    );
};
export default PasswordRule;
