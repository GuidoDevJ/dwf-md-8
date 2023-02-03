import { Btn } from "../ui/Btn";
import ContImg from "../ui/ContImg";
import { Input } from "../ui/Input";
import userImg from "../assets/user.png";
import css from "./CreateUser.module.css";
import { useCreateUser } from "../hooks/useCreateUser";

export const CreateUser = () => {
  const { handlerSubmit } = useCreateUser();

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={(e: any) => handlerSubmit(e)}>
        <ContImg url={userImg} />
        <div className={css.inputs}>
          <Input typeInput="text" name="Nombre" />
          <Input typeInput="email" name="email" />
          <Input typeInput="password" name="password" />
        </div>
        <Btn color="#F8FFAB">Crear</Btn>
      </form>
    </div>
  );
};
