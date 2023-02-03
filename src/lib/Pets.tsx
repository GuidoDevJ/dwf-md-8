export async function getPetById(token:string,id:string){
    try {
        const res = await fetch(`https://des-k648.onrender.com/getPet/${id}`, {
          method: "get",
          headers: { "Content-Type": "application/json",
          Authorization: "Bearer " + token, },
        });
        let data = await res.json()
        return data;
      } catch (error) {
        return new Error("error" + error);
      }
}