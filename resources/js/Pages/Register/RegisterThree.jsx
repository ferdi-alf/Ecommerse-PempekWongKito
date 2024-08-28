import PasswordRule from "@/Components/PasswordRule";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegisterThree = ({ data, setData }) => {
    const [password, setPassword] = useState(data.password || "");
    const [confirmPassword, setConfirmPassword] = useState(
        data.confirmPassword || ""
    );
    const [rules, setRules] = useState({
        length: false,
        specialChar: false,
        number: false,
        uppercase: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        const passwordField = document.getElementById("outlined-password");
        const start = passwordField.selectionStart;
        const end = passwordField.selectionEnd;

        setShowPassword(!showPassword);

        setTimeout(() => {
            passwordField.setSelectionRange(start, end);
        }, 0);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (e) => {
        const input = e.target.value;
        setPassword(input);
        validatePassword(input);
    };

    const handleConfirmPasswordChange = (e) => {
        const input = e.target.value;
        setConfirmPassword(input);
        setData("confirmPassword", input); // Update the data in useForm
    };

    const validatePassword = (input) => {
        const length = input.length >= 8;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(input);
        const number = /\d/.test(input);
        const uppercase = /[A-Z]/.test(input);

        setRules({
            length,
            specialChar,
            number,
            uppercase,
        });
    };

    return (
        <div className="grid grid-cols-1 gap-y-10">
            <div className="w-full flex flex-col">
                <TextField
                    className="w-full"
                    id="outlined-password"
                    label="Password"
                    variant="outlined"
                    color="warning"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <div className="md:w-[100%] lg:w-[90%] mt-3 w-full gap-x-5 gap-y-3 grid grid-cols-2">
                    <PasswordRule
                        isValid={rules.length}
                        text="Panjang 8 karakter"
                    />
                    <PasswordRule
                        isValid={rules.specialChar}
                        text="Karakter unik"
                    />
                    <PasswordRule
                        isValid={rules.number}
                        text="Memiliki angka"
                    />
                    <PasswordRule
                        isValid={rules.uppercase}
                        text="Memiliki Huruf Kapital"
                    />
                </div>
            </div>
            <TextField
                className="w-full"
                type="password"
                id="outlined-basic"
                label="Konfirmasi Password"
                variant="outlined"
                color="warning"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
        </div>
    );
};

export default RegisterThree;
