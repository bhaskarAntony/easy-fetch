const easyFetch = async(url) =>{
    try {
      const responce = await fetch(url)
      if(!responce.ok){
         throw new Error("HTTP Error")
      }
     const data =  await responce.json()
     // console.log(responce.json());
     return data;
 } catch (error) {
     console.log(error);
     throw error;
 }

   
}

module.exports = easyFetch