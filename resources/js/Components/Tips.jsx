import { useTheme } from "@mui/material";

const Tips = () => {
    const theme = useTheme();
    return (
        <div className="">
            <article
                className={`format lg:format-lg mt-10 ${
                    theme.palette.mode === "dark" ? "text-white" : ""
                }`}
            >
                <h1 className="dark:text-white">
                    Tips & Triks ketika pempek sudah sampai
                </h1>
                <ol>
                    <ul className="list-item ">
                        <strong className="dark:text-white">
                            Cara Penyimpanan
                        </strong>
                        <li className="list-decimal">
                            Jika tidak langsung dikonsumsi, simpan pempek di
                            dalam kulkas. Pempek bisa bertahan 3-5 hari dalam
                            kondisi dingin.
                        </li>
                        <li className="list-decimal">
                            Untuk penyimpanan lebih lama, simpan pempek di dalam
                            freezer. Pempek bisa bertahan hingga 1 bulan.
                            Sebelum dimakan, cukup thaw (mencairkan) pempek di
                            suhu ruangan.
                        </li>
                    </ul>
                    <ul className="list-item">
                        <strong className="dark:text-white">
                            Cara Menggoreng:
                        </strong>
                        <li className="list-decimal">
                            Gunakan minyak dengan panas sedang agar pempek tidak
                            terlalu kering atau gosong.
                        </li>
                        <li className="list-decimal">
                            Goreng pempek dalam minyak yang cukup sehingga
                            terendam sempurna untuk hasil yang lebih crispy.
                        </li>
                        <li className="list-decimal">
                            Jika pempek beku, sebaiknya biarkan thawing terlebih
                            dahulu sebelum digoreng.
                        </li>
                    </ul>
                    <ul className="list-item">
                        <strong className="dark:text-white">
                            Cara Penyajian:
                        </strong>
                        <li className="list-decimal">
                            Sajikan pempek dengan kuah cuko yang sudah
                            disediakan. Kuah cuko yang khas ini bisa dihangatkan
                            sebentar jika diinginkan.
                        </li>
                        <li className="list-decimal">
                            Tambahkan irisan timun dan mie kuning untuk
                            menikmati cita rasa asli Palembang.
                        </li>
                    </ul>
                </ol>
            </article>
        </div>
    );
};

export default Tips;
