import "./Default.css";
import { Ak_Alert, Register, Slider } from "../LaRose";
import RoseBox from "../components/RoseBox/RoseBox"
import BgSvg from "../components/bg_svg";

function Default() {
    return (
        <>
            <div className="App">
                <BgSvg />




                <RoseBox AutoHandling outlineOffset={"5px"}>
                    Hello World
                </RoseBox>



            </div>
        </>
    );
}

export default Default;
