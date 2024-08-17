import React from 'react'
import Default from '../Defualt'

export default function input_prompt() {
  return (
    <section>
        <Default
        title={"input_prompt"}
        des={"input_prompt can get input from user"}
        p={"Example"}
        code={`let user_name = input_prompt!("Enter Your Name:");
akp!("User Name is:{}",user_name);`}
        />
    </section>
  )
}
