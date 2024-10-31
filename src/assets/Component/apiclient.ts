
 import axios from "axios";
     export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"fa673e4ccb444e1aaf73df4b275c44de"
    }
  })