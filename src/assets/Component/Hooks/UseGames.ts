
import UseData from "./useData";
import { GenraResultForms } from "./UseGeanras";
import { PlatFormResult } from "./UsePlatforms";
    export interface ResultForm {
    id: number;
    name: string;
    background_image: string;
  }
  const useGames=(selectedGenre:GenraResultForms | null,selectedPlatForms:PlatFormResult|null,selectedOrder:string|null,SearchInput:string|null)=>
    UseData<ResultForm>
  ("/games",{params:{
    genres:selectedGenre?.id,
    platforms:selectedPlatForms?.id,
    ordering:selectedOrder,
    search:SearchInput }},
    [selectedGenre?.id,selectedPlatForms?.id,selectedOrder,SearchInput],)
  
    
   export default useGames