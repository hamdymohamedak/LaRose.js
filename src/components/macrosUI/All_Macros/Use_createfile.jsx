import React from "react";
import Default from "../Defualt";

export default function Use_createfile() {
  return (
    <section>
      <Default
        title={"Use_createFile"}
        des={"macro can create a file and add text at him"}
        p={`the macro take three value
1 - File name
2 - File Path
3 - Text`}
        code={`fn main() -> std::io::Result<()> {
use_createFile!("ak2","/home/ak/Desktop","Hello from ak-macros");
Ok(())
}
        `}
      />
    </section>
  );
}
