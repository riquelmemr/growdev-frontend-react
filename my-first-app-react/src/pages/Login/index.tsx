import React from "react";
import { Title } from "../../components/Title";
import TextInput from "../../components/TextInput";

const Login: React.FC = () => {
  return (
    <div>
      <Title title={"Login"} />
      <TextInput type={"email"} placeholder={"Write your email"} label={"E-mail"} className="p-2 rounded-2 ms-2" />
    </div>
  )
}

export default Login;