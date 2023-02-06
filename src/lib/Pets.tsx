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
export async function createPetDB(token:string,data:{}){
  console.log(data)
  try {
    console.log(token)
    const res = await fetch(`https://des-k648.onrender.com/createPetDb`, {
      method: "post",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token, },
      body:JSON.stringify(data)
    });
    let datos = await res.json()
    return datos
  } catch (error) {
    return new Error("error" + error);
  }
}

export async function uploadImagePet(token:string,url:string){
  try {
    console.log(token)
    const res = await fetch(`https://des-k648.onrender.com/uploadimage`, {
      method: "post",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token, },
      body:JSON.stringify({url})
    });
    let data = await res.json()
    return data;
  } catch (error) {
    return new Error("error" + error);
  }
}

export async function uploadDataAlgolia(token:string,obj:{}){
  try {
    console.log(token)
    const res = await fetch(`https://des-k648.onrender.com/createPetAlgolia`, {
      method: "post",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token, },
      body:JSON.stringify(obj)
    });
    let data = await res.json()
    return data;
  } catch (error) {
    return new Error("error" + error);
  }
}
export async function updateDataDB(token:string,obj:{},id:number){
  console.log(obj)
  try {
    console.log(token)
    const res = await fetch(`https://des-k648.onrender.com/updatePetDb/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token, },
      body:JSON.stringify(obj)
    });
    let data = await res.json()
    return data;
  } catch (error) {
    return new Error("error" + error);
  }
}
export async function updateDataAlgolia(token:string,obj:{},id:number){
  console.log(obj)

  try {
    console.log(token)
    const res = await fetch(`https://des-k648.onrender.com/updatePetAlgolia/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token, },
      body:JSON.stringify(obj)
    });
    let data = await res.json()
    return data;
  } catch (error) {
    return new Error("error" + error);
  }
}