import "./Default.css";
import { Ak_Alert, Register, Slider } from "../LaRose";
import BgSvg from "../components/bg_svg";

function Default() {
    return (
        <>
            <div className="App">
                <BgSvg />
                <div className="sliderStyle">
                    <Slider>
                        <div className="slide">
                            <div className="alert">
                                <Ak_Alert title={"Easy to customize Code"} time={Infinity} />
                                <hr />
                                <div style={{ cursor: "pointer" }} onClick={() => { window.open("/Home", "_self") }}><Ak_Alert title={"Go To Home Page"} time={Infinity} /></div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="alert2">
                                <Ak_Alert title={"Easy to Code"} time={Infinity} />
                            </div>
                        </div>
                    </Slider>
                </div>

                {/* Register Component */}
                <div className="register">
                    <Register Name={"Example@gmail.com"} Pass={"123456"} />
                </div>
            </div>
        </>
    );
}

export default Default;
