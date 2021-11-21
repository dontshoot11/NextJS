import React, { useEffect, useState } from "react";
import { Tag, Htag,Ptag, Button, Rating } from "../components";



export default function Home(): JSX.Element {  
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(0)

  useEffect(()=>{
    console.log('Counter '+ counter);
    return function cleanup() {
      console.log('Unmount');
    }; //вызывается каждый раз при перерендере, в данном случае каждый раз, когда обновляется counter и перерисовывается h1 соотв. но это подписка именно на перерендер, а не изменение стора
  });
  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Ptag >Текст</Ptag>      <Ptag size='big' >Текст</Ptag>
      <Tag>Приветик</Tag>
      <Tag size="big" color="green">Приветик</Tag>
      <Tag size="big" color="green" href="www.ya.ru">Ссылка</Tag>
      <Button appearance='primary' arrow='right' onClick={()=>setCounter(x => x+1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='down' onClick={() => console.log('sdsd')}>Кнопка</Button>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
    </>
  );
}