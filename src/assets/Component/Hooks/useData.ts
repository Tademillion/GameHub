import { useEffect, useState } from "react";
import apiclient from "../apiclient";
import { AxiosRequestConfig } from "axios";
 export interface GameProps <T>{
    count: number;
    results: T[];
  }
const UseData=<T>(endpoint:string,requestconfig?:AxiosRequestConfig,dependency?:any[])=>{
    
    const [data,setdata]= useState<T[]>([]);
    const [error,setError]= useState("");
    const [isLoading,setLoading]= useState(false);

   useEffect(()=>{
   setLoading(true)
         apiclient.get<GameProps<T>>(endpoint,{ ...requestconfig}).then((res)=>{
          setdata(res.data.results)
         }).catch((error)=>{
          setError(error)
         }).finally(()=>{
          setLoading(false)
         });
    }, dependency?[...dependency]:[])
    
    return{data,error,isLoading}
}
export default UseData;
// this is generic data fetching way  this alway works for every data types we can give the datatypes by our selves
//  its simply the way of passing the datatypes of the data we fetch  as props is used 
//to pass data from one components to another component