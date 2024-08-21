import "./Default.css";
import { Ak_Alert, ModernBtn, Register, Slider } from "../LaRose";
import RoseBox from "../components/RoseBox/RoseBox";
import BgSvg from "../components/bg_svg";
import { RoseMouse } from "../components/RoseMouse";
import { useRouter } from "../components/RoseRouter/RoseRouter"; // Import the custom hook to use the navigate function
import { useState } from "react";

function Default() {
    const { navigate } = useRouter(); // Get the navigate function from the custom router

    return (
        <>
            <div className="App">
                <BgSvg />
                <ModernBtn color={"white"} allColor={"red"} title={"Go To Home"} clickEvent={() => navigate("/Home")} />
            </div>
        </>
    );
}

export default Default;
