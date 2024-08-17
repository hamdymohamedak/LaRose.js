import React from 'react'
import Default from '../Defualt'

export default function remove_all_folders() {
  return (
    <section>
        <Default
        title={"remove_all_folders"}
        des={"/// remove_all_folders macro can remove all folders and file at the path you will set it"}
        p={""}
        code={`remove_all_folders!("/home/ak/Desktop/new_Folder/");`}
        />
    </section>
  )
}
