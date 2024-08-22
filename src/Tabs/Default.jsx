import "./Default.css";
import { ModernBtn, SplitText } from "../LaRose";
import BgSvg from "../components/bg_svg";
import { useRouter } from "../components/RoseRouter/RoseRouter";
import BlurText from "../components/BlurText/BlurText";
import AnimatedText from "../components/BlurText/BlurText";
import WaveText from "../components/WaveText/WaveText";
import ShinyText from "../components/Shiny/ShinyText";
import ShinyButton from "../components/Shiny/ShinyButton";


function Default() {
    const { navigate } = useRouter();

    return (
        <>



            <div className="App">
                <BgSvg />
                <ModernBtn color={"white"} allColor={"red"} title={"Go To Home"} clickEvent={() => navigate("/Home")} />
                {/* <SplitText speed={0.2} delay={0.5} edit={{
                    fontSize: "2rem"
                }} >Hello world</SplitText> */}
                {/* 
                <AnimatedText RoseName="fade-animation" RoseId="fade1" animationType="fadeIn">
                    Faded Text
                </AnimatedText>

                <AnimatedText RoseName="slide-animation" RoseId="slide1" animationType="slideIn">
                    Sliding Text
                    </AnimatedText>

                <AnimatedText RoseName="zoom-animation" RoseId="zoom1" animationType="zoomIn">
                    Zooming Text
                </AnimatedText> */}
                {/* 
<WaveText 
RoseName="wave-animation" 
RoseId="wave1"
    speed={0.6}
    delay={0.1}
    amplitude={15}
>
                    <BlobCursor>
                    Wave Animation
</WaveText> */}

                <ShinyButton edit={{ fontSize: "1rem", height: "3rem", minWidth: "2rem" }} >
                    <ShinyText
                        speed={3}
                        edit={{ color: "white" }}
                    >
                        Shiny Animation
                    </ShinyText>
                </ShinyButton>

            </div>
        </>
    );
}

export default Default;
