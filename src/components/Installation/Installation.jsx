import "./Installation.css";
import Navbar from "../Navbar/Navbar";
import Syntax from "../SyntaxHighlighter/Syntax";
import SideBar from "../sideBar/SideBar";
import data from "../Information.json";
export default function Installation() {
  return (
    <>
      <Navbar />
      <section className="sec-1">
        <SideBar />
        <div>
          <h1 className="sec-h1">Get started with ak-macros</h1>
          <div>
            {" "}
            <div className="des">
              AK-Macros is: Rust library To speed up the development process and
              make it easy AK-Macros It is a group of the most popular and
              frequently used macros
            </div>
          </div>
          <div className="install-title">Installation</div>
          <div className="">
            Run the following Cargo command in your project directory:
          </div>
          <Syntax code={`cargo add ak_macros`} />
          <div>Or add the following line to your Cargo.toml:</div>
          <Syntax code={`ak_macros = "${data.version}"`} />
        </div>
      </section>
    </>
  );
}
