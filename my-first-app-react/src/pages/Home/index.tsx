import React from "react";
import { Title } from "../../components/Title";
import TextInput from "../../components/TextInput";
import Container from "../../components/Container";

const Home: React.FC = () => {
  return (
    <Container display="flex" alignItems="center" flexDirection="column" justifyContent="center">
      <Title title={"Home"}/>
      <TextInput type={"text"} placeholder={"Write your name"} label={"Name"} id={"name"} name={"name"}/>
      <TextInput type={"email"} placeholder={"Write your email"} label={"Email address"} id={"email"} name={"email"}/>
    </Container>
  )
}

export default Home;