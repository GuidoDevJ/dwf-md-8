import { sendEmail } from "../lib/User";
import { dataUsuario } from "./atoms";
import { useRecoilState } from "recoil";
import { useLocalStorage } from "./useLocalStorage";
import Swal from "sweetalert2";

export const useEmail = () => {
  const data = useLocalStorage();
  const [userData, setDataUser] = useRecoilState(dataUsuario);

  async function handlerSubmit(e: Event, to: string, petName: string,cb:any) {
    e.preventDefault();
    const target: any = e.target;
    const fullName = target.fullname.value;
    const telephone = (target as any).telephone.value;
    const data = (target as any).mensaje.value;
    let res = await sendEmail(
      userData.token,
      to,
      petName,
      fullName,
      telephone,
      data
    );
    if (res) {
      cb()
      Swal.fire({
        icon: "success",
        title: "Exitos",
        text: "El mensaje fue enviado",
      });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo ocurrio, intentalo mas tarde',
      })
    }
  }
  return {
    handlerSubmit,
  };
};
