import React from 'react'
import Default from '../Defualt'

export default function remove_folder() {
  return (
    <section>
        <Default
        title={"remove_folder"}
        des={"this macro can remove any folder at your PC,"}
        p={`this macro take one value this value is folder Path
when macro remove folder the macro will print Done...! at terminal`}
        code={`remove_folder!("/home/ak/Desktop/new_Folder/");`}
        />
    </section>
  )
}
