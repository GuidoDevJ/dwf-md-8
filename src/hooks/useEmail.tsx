import { sendEmail } from "../lib/User"
import { dataUsuario } from './atoms';
import { useRecoilState } from 'recoil';

export const useEmail = () => {
  const [userData, setDataUser] = useRecoilState(dataUsuario);

    async function handlerSubmit(e:Event,to:string,petName:string,){
        e.preventDefault()
        const target:any = e.target
        const fullName = target.fullname.value 
        const telephone = (target as any).telephone.value
        const data = (target as any).mensaje.value
        console.log(fullName,telephone,data )
        let res = await sendEmail(userData.token,to,petName,fullName,telephone,data)
    }
    return {
        handlerSubmit
    }
}
