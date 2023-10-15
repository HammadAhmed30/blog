import React from 'react'
import { getProject } from '@/sanity/sanity-utils'


export default async function Page() {

  const projects = await getProject()

  return (
    <div>

      <h1>Hello World </h1>
      {
        projects.map((project,index:number)=>{
          return (
            <h1>{project.name}</h1>
          )
        })
      }
    </div>
  )
}
