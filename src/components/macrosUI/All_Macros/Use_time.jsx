import React from "react";
import Default from "../Defualt";

export default function Use_time() {
    return (
        <section>
            <Default
                title={""}
                des={
                    "use_time macro, this macro can generate a time out event "}
                p={`the macro take a one value the time with ms
Example`}
                code={`akp!("before time out");
use_time!(2000);
apk!("after time out")`}
            />
        </section>
    );
}
