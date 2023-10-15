import { createClient,groq } from "next-sanity";
import { BasicConfigue } from "./basicConfigue";
import { Project } from "@/types/Project";

export async function getProject():Promise <Project[]>{
    const client = createClient(BasicConfigue)
    return client.fetch(
        groq`*[_type=="project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`
    )
}