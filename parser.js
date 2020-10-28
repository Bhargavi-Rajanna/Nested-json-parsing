var jsonData = require('./response.txt');
function parseJson(obj , genrekey){
  
   if(typeof obj ==='object'){
      for(var key in obj){
        
        if(typeof obj[key]==='object'){
          for(var nestedKey in obj[key]){
            if(key == genrekey){
              
              var genreMap = new Map();
              genreMap['Titles']=  obj[key][nestedKey].title;
              console.log(genreMap);
            }
            
             parseJson(obj[key][nestedKey],genrekey);
          }
          
        }else{
          console.log(obj[key])
        }
      }
   }else {
    console.log(obj)
   }
}
parseJson(jsonData, 'fiction'); // gets the list of title of books under the given genreKey