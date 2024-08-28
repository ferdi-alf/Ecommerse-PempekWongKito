import { Head, useForm } from "@inertiajs/react";
import { useTheme } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import RegisterOne from "./RegiterOne";
import RegisterTwo from "./RegisterTwo";
import "../../../../public/css/style.css";
import RegisterThree from "./RegisterThree";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: "#eaeaf0",
        borderRadius: 1,
        ...theme.applyStyles("dark", {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                backgroundImage:
                    "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
                boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
            },
        },
        {
            props: ({ ownerState }) => ownerState.completed,
            style: {
                backgroundImage:
                    "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
            },
        },
    ],
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const steps = [
    "Buat Account Toko",
    "Settings profile toko",
    "Buat sandi yang kuat",
];

export default function Index() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [animate, setAnimate] = React.useState(false);

    const { data, setData, post, processing, errors } = useForm({
        username: "",
        namaToko: "",
        email: "",
        contact: "",
        gmaps: "",
        logo: "",
        deskripsi: "",
        linkInstagram: "",
        linkTiktok: "",
        password: "",
        confirmPassword: "",
        remember: true,
    });

    const handleSubmit = (e) => {
        post("/register-store");
    };

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            handleSubmit();
        } else {
            setAnimate(true);
            setTimeout(() => {
                setActiveStep((prevStep) => prevStep + 1);
                setAnimate(false);
            }, 300);
        }
    };

    const handleBack = () => {
        setAnimate(true);
        setTimeout(() => {
            setActiveStep((prevStep) => prevStep - 1);
            setAnimate(false);
        }, 300);
    };

    return (
        <>
            <Head title="register" />
            <div
                className={`${
                    theme.palette.mode === "dark"
                        ? "bg-slate-950 text-white"
                        : "bg-slate-50"
                } flex justify-center  h-screen `}
            >
                <div className="md:w-4/5 w-full md:p-0 p-3 h-full  flex flex-col justify-center items-center">
                    <div
                        className={`${
                            theme.palette.mode === "dark"
                                ? "bg-gray-900"
                                : "bg-white"
                        }  md:w-1/2 w-full rounded-lg shadow-md p-3`}
                    >
                        <Stack sx={{ width: "100%" }} spacing={4}>
                            <Stepper
                                alternativeLabel
                                activeStep={activeStep}
                                connector={<ColorlibConnector />}
                            >
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel
                                            StepIconComponent={ColorlibStepIcon}
                                        >
                                            {label}
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Stack>
                    </div>
                    <div
                        className={`${
                            theme.palette.mode === "dark"
                                ? "bg-gray-900"
                                : "bg-white"
                        }  md:w-1/2 mt-3 w-full ${
                            activeStep === 0 ? "h-[71%]" : ""
                        } rounded-lg shadow-md p-3`}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className={`step-content ${
                                animate ? "slide-out" : "slide-in"
                            }`}
                        >
                            {activeStep === 0 && (
                                <RegisterOne data={data} setData={setData} />
                            )}
                            {activeStep === 1 && (
                                <RegisterTwo data={data} setData={setData} />
                            )}
                            {activeStep === 2 && (
                                <RegisterThree data={data} setData={setData} />
                            )}
                        </form>

                        <div className="w-full flex justify-between">
                            <button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className="p-2 rounded-lg w-20 font-semibold mt-10 bg-transparent bg-gradient-to-br from-red-700 to-orange-400 text-white"
                            >
                                Kembali
                            </button>
                            <button
                                onClick={handleNext}
                                type={
                                    activeStep === steps.length - 1
                                        ? "submit"
                                        : "button"
                                }
                                className="p-2 rounded-lg w-20 font-semibold mt-10 bg-transparent bg-gradient-to-br from-red-700 to-orange-400 text-white"
                            >
                                {activeStep === steps.length - 1
                                    ? "Submit"
                                    : "Lanjut"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
