import React from "react";
import { Tag, Htag,Ptag, Button } from "../components";



export default function Home(): JSX.Element {  
  return (
    <div>
      <Htag tag='h1'>Hello world</Htag>
      <Ptag >Текст</Ptag>
      <Ptag size='big' >Текст</Ptag>
      <Tag>Приветик</Tag>
      <Tag size="big" color="green">Приветик</Tag>
      <Tag size="big" color="green" href="www.ya.ru">Ссылка</Tag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
    </div>
  );
}
