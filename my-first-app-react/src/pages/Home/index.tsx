import React from "react";
import './styles.css';
import { Title } from "../../components/Title";
import TextInput from "../../components/TextInput";

const Home: React.FC = () => {
  return (
    <div>
      <Title title={"Home"}/>
      <TextInput type={"text"} placeholder={"Write your name"} label={"Name"} className="p-2 rounded-2 ms-2" />
    </div>
  )
}

export default Home;