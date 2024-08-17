import React from 'react'
import Default from '../Defualt'

export default function remove_file() {
  return (
    <section>
        <Default
        title={"remove_file"}
        des={"this macro can remove any file at your PC, this macro take one value this value is folder Path"}
        p={`when macro remove file the macro will print Done...! at terminal`}
        code={`remove_file!("/home/ak/Desktop/new_file/");`}
        />
    </section>
  )
}
