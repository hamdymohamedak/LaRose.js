import React from 'react'
import Default from '../Defualt'

export default function Use_lower_case() {
  return (
    <section>
        <Default
        title={"Use_lower_case"}
        des={"macro can convert the string from upperCase to lowerCase"}
        p={""}
        code={`use_lower_case!(name);
println!("{}",name);
        `}
        />
    </section>
  )
}
