import { createClient } from "next-sanity";

const client = createClient({
    projectId: "h21s50x0",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
})
export async function fetchSanity({query,params={}}:{query:string,params?:any}){
    const data = await client.fetch(query,params)
    return data
    
}