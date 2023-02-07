export async function signIn(email: any, password: any) {
  try {
    const token = await fetch(`https://des-k648.onrender.com/auth/token`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const tokenJson = await token.json();
    return tokenJson;
  } catch (error) {
    return new Error("error" + error);
  }
}

export async function getDataUser(token:string){
  try {
    let result = await fetch(
      `https://des-k648.onrender.com/me`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    let datos = await result.json();
    return datos;
  } catch (error) {
    return new Error("error:" + error);
  }
}

export async function CreateAndAuthUser(
  email: string,
  password: string,
  name: string
) {
  try {
    const res = await fetch(`https://des-k648.onrender.com/auth`, {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    return res;
  } catch (error) {
    return new Error("error" + error);
  }
}

export async function getAllPetsNear(token: string, lat: number, lng: number) {
  try {
    let result = await fetch(
      `https://des-k648.onrender.com/pets-cerca-de?lat=${lat}&lng=${lng}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    let dogs = await result.json();
    return dogs;
  } catch (error) {
    return new Error("error:" + error);
  }
}

export async function getUserById(token: string, id: number) {
  console.log(token)
  try {
    let result = await fetch(`https://des-k648.onrender.com/getUser/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    let user = await result.json();
    console.log(user)
    return user;
  } catch (error) {
    return new Error("error:" + error);
  }
}

export async function sendEmail(token:string,to:string,petName:string,fullName:string,phone:string,data:string,){
  try {
    console.log("desde la api "+fullName)
    const res = await fetch(`https://des-k648.onrender.com/sendemail`, {
      method: "post",
      body: JSON.stringify({ to, petName,fullName,phone,data }),
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token, },
    });
    console.log(res)
    let datos = await res.json()
    return datos;
  } catch (error) {
    return new Error("error" + error);
  }
}

export async function getAllPetsUser(token:string){
  console.log(token)
  try {
    const res = await fetch(`https://des-k648.onrender.com/getPetsUserMe`, {
      method: "get",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token, },
    });
    let datos = await res.json()
    return datos;
  } catch (error) {
    return new Error("error" + error);
  }
}

export async function UpdateDataUserDB(token:string,data:{name:string,email:string}){
  console.log(token)

  try {
    const res = await fetch(`https://des-k648.onrender.com/updateUser`, {
      method: "put",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token, },
      body:JSON.stringify(data)
    });
    let datos = await res.json()
    return datos;
  } catch (error) {
    return new Error("error" + error);
  }
}
export async function UpdatePassword(token:string,data:{password:string}){
  console.log(token)
  try {
    const res = await fetch(`https://des-k648.onrender.com/updatepassword`, {
      method: "put",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token, },
      body:JSON.stringify(data)
    });
    let datos = await res.json()
    return datos;
  } catch (error) {
    return new Error("error" + error);
  }
}
