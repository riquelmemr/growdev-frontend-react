import React from "react";
import Heading from "../../pages/Home/styles";

interface TitleProps {
   title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Heading>{title}</Heading>
  )
}

export { Title };