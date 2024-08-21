import "./Default.css";
import { ModernBtn } from "../LaRose";
import BgSvg from "../components/bg_svg";
import { useRouter } from "../components/RoseRouter/RoseRouter"; 

function Default() {
    const { navigate } = useRouter();

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
