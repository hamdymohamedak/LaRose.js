import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { ModernBtn } from "../AMT_Package";

export default function SideBar() {
  let [titles] = useState([
    { title: "akp", path: "/akp" },
    { title: "open_Web", path: "/open_web" },
    { title: "set_String", path: "/set_string" },
    { title: "Get_CPU", path: "/get_cpu" },
    { title: "input_prompt", path: "/input_prompt" },
    { title: "if_cond", path: "/if_cond" },
    { title: "terminal", path: "/terminal" },
    { title: "this_OS", path: "/this_os" },
    { title: "use_loop", path: "/use_loop" },
    { title: "Negative_number", path: "/negative_number" },
    { title: "Positive_number", path: "/positive_number" },
    { title: "use_createFile", path: "/use_createfile" },
    { title: "this_year", path: "/this_year" },
    { title: "Ram_size", path: "/ram_size" },
    { title: "this_month", path: "/this_month" },
    { title: "remove_all_folders", path: "/remove_all_folders" },
    { title: "remove_file", path: "/remove_file" },
    { title: "remove_folder", path: "/remove_folder" },
    { title: "use_fetch", path: "/use_fetch" },
    { title: "use_loopAt", path: "/use_loopat" },
    { title: "use_lower_case", path: "/use_lower_case" },
    { title: "use_rand", path: "/use_rand" },
    { title: "use_upper_case", path: "/use_upper_case" },
    { title: "use_time", path: "/use_time" },
  ]);

  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="AMT_btn" onClick={toggleSidebar}>
        <ModernBtn allColor={"green"} color={"white"} hoverColor={"black"} title={isSidebarVisible ? `Hide Sidebar ` : `Show Sidebar `} />
      </div>
      <aside className={`sideBar ${isSidebarVisible ? "visible" : `hidden`}`}>
        <div> <Link to={"/Installation"}>Installation</Link> </div>
        {titles.map((item, index) => (
          <div key={index}>
            Macro:{" "}
            <span>
              <Link to={item.path}>{item.title}</Link>
            </span>
          </div>
        ))}
      </aside>
    </>
  );
}
