import React from 'react'
import Default from '../Defualt'

export default function open_Web() {
  return (
    <section>
      <Default
        title="open_web"
        des="open_web macro can open a url at browser the macro take one value this value is the URL Link"
        p="Example"
        code={`open_Web!("https://askander.vercel.app");`}
      />
    </section>
  )
}
