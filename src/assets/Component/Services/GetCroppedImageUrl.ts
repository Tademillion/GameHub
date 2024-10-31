
import noimage from '../../../../src/assets/noimage.jpg'

 const getCroppedImageUrl=( url:string)=>{
  // if(!url) return '';  
  if(!url) return noimage;  // some image url may missed
 const target='media/';
  const index=url.indexOf(target)+target.length;//it returns the number of index upto /media
  return  url.slice(0,index)+'crop/600/400/'+url.slice(index); 
// url.slice means get all string from start to ende  if give only one paramtre means tha  start from index to end
 }
  export default getCroppedImageUrl;

