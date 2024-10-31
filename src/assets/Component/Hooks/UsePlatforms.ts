import UseData from "./useData";
 export interface PlatFormResult{
    id:number
    slug:string,
    name:string
}   
  const UsePlatForms=()=>UseData<PlatFormResult>("/platforms/lists/parents")    
   export default UsePlatForms