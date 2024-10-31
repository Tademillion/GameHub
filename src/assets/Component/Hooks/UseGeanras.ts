import { useEffect, useState } from "react";
import apiclient from "../apiclient";

export interface GenraResultForms {
  name: string;
  id: number;
  image_background: string;
}
export interface GameProps {
  count: number;
  results: GenraResultForms[];
}
const useGenres=()=>{
    
  const [data,setdata]= useState<GenraResultForms[]>([]);
  const [error,setError]= useState("");
  const [isLoading,setLoading]= useState(false);

 useEffect(()=>{
 setLoading(true)
       apiclient.get<GameProps>("/genres").then((res)=>{
        setdata(res.data.results)
       }).catch((error)=>{
        setError(error)
       }).finally(()=>{
        setLoading(false)
       });
  },[])
  return{data,error,isLoading}
}
export default useGenres;