import React from "react";
import Default from "../Defualt";

export default function Use_fetch() {
  return (
    <section>
      <Default
        title={"use_fetch"}
        des={"use_fetch it's a fetch api macro,to use it add"}
        p={`
1 - reqwest
2 - tokio
3 - serde
4 - serde_json
at Cargo.toml
usage
the macro take two values
        `}
        code={`use_fetch!("api",HTTP_Request);
 /// example
 #[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
use_fetch!("https://fakestoreapi.com/products/", GET);
 Ok(())
}
        `}
      />
    </section>
  );
}
