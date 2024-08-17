import React, { useEffect } from "react";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Installation from "./components/Installation/Installation.jsx";
import Defualt from "./components/macrosUI/Defualt.jsx";
import Akp from "./components/macrosUI/All_Macros/Akp.jsx";
import Open_web from "./components/macrosUI/All_Macros/Open_Web.jsx";
import Set_String from "./components/macrosUI/All_Macros/ Set_String.jsx";
import Get_cpu from "./components/macrosUI/All_Macros/Get_cpu.jsx";
import If_cond from "./components/macrosUI/All_Macros/ If_cond.jsx";
import Input_prompt from "./components/macrosUI/All_Macros/input_prompt.jsx";
import Terminal from "./components/macrosUI/All_Macros/Terminal.jsx";
import This_os from "./components/macrosUI/All_Macros/This_os.jsx";
import Use_loop from "./components/macrosUI/All_Macros/Use_loop.jsx";
import Negative_number from "./components/macrosUI/All_Macros/Negative_number.jsx";
import Positive_number from "./components/macrosUI/All_Macros/Positive_number.jsx";
import Use_createfile from "./components/macrosUI/All_Macros/Use_createfile.jsx";
import This_year from "./components/macrosUI/All_Macros/this_year.jsx";
import Ram_size from "./components/macrosUI/All_Macros/ Ram_size.jsx";
import This_month from "./components/macrosUI/All_Macros/this_month.jsx";
import Remove_all_folders from "./components/macrosUI/All_Macros/remove_all_folders.jsx";
import Remove_file from "./components/macrosUI/remove_file.jsx";
import Remove_folder from "./components/macrosUI/All_Macros/remove_folder.jsx";
import Use_fetch from "./components/macrosUI/All_Macros/Use_fetch.jsx";
import Use_loopat from "./components/macrosUI/All_Macros/Use_loopat.jsx";
import Use_lower_case from "./components/macrosUI/All_Macros/Use_lower_case.jsx";
import Use_rand from "./components/macrosUI/All_Macros/Use_rand.jsx";
import Use_upper_case from "./components/macrosUI/All_Macros/Use_upper_case.jsx";

function App() {
  const api = "https://count-website-views.onrender.com/count";
  useEffect(() => {
    const postViewCount = async () => {
      "use server";
      try {
        await fetch(api, {
          method: "POST",
        });
      } catch (error) {
        console.error("Error posting view count:", error);
      }
    };

    postViewCount();
  }, []);

  return (
    <main className="mainApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/defualt" element={<Defualt />} />
        <Route path="/akp" element={<Akp />} />
        <Route path="/open_web" element={<Open_web />} />
        <Route path="/set_string" element={<Set_String />} />
        <Route path="/Get_cpu" element={<Get_cpu />} />
        <Route path="/if_cond" element={<If_cond />} />
        <Route path="/input_prompt" element={<Input_prompt />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/this_os" element={<This_os />} />
        <Route path="/use_loop" element={<Use_loop />} />
        <Route path="/negative_number" element={<Negative_number />} />
        <Route path="/positive_number" element={<Positive_number />} />
        <Route path="/use_createfile" element={<Use_createfile />} />
        <Route path="/this_year" element={<This_year />} />
        <Route path="/ram_size" element={<Ram_size />} />
        <Route path="/this_month" element={<This_month />} />
        <Route path="/remove_all_folders" element={<Remove_all_folders />} />
        <Route path="/remove_file" element={<Remove_file />} />
        <Route path="/remove_folder" element={<Remove_folder />} />
        <Route path="/use_fetch" element={<Use_fetch />} />
        <Route path="/use_loopat" element={<Use_loopat />} />
        <Route path="/use_lower_case" element={<Use_lower_case />} />
        <Route path="/use_rand" element={<Use_rand />} />
        <Route path="/use_upper_case" element={<Use_upper_case />} />
      </Routes>
    </main>
  );
}

export default App;
