import { useRecoilState } from "recoil"
import { getAllPetsUser } from "../lib/User"
import { dataUsuario } from "./atoms"

export const useGetPets = async () => {
    let [dataUser,setDataUser] = useRecoilState(dataUsuario)
    let token =dataUser.token
    let petsReportedOfUser = await getAllPetsUser(token)   
    return petsReportedOfUser
}
