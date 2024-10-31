import { useEffect, useState } from "react";
import apiclient from "../Component/apiclient";
export interface GenraResultForms {
  name: string;
  id: number;
  image_background: string;
}
export interface GenrasProps {
  count: number;
  results: GenraResultForms[];
}
const useGenres=()=>{
    const [genra, setGenera] = useState<GenraResultForms[]>([]);
    const [error, seteror] = useState("");
   const[isLoading,setLoading]= useState(false);
   useEffect(() => {
    setLoading(true);
      apiclient.get<GenrasProps>("/genres")
        .then((res) => {
          setGenera(res.data.results);
        })
        .catch((error) => {
          seteror(error);
        }).finally(()=>{
          setLoading(false)
        });
    },[]);
    return {genra,error,isLoading}
}
export default useGenres;