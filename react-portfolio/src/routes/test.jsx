import { useState } from "react"


export const Test = () => {

  const [valor, setValor]= useState(0)
  const inputChange = (evt) => {
    evt.preventDefault();
    setValor(evt.target.value);
}

const [valor2, setValor2]= useState(0)
  const inputChange2 = (evt) => {
    evt.preventDefault();
    setValor2(evt.target.value);
}


  return <>

    <input onChange={inputChange} value={valor}/>
    <input onChange={inputChange2} value={valor2}/>

    <div>test1 = {valor}|</div>
    <div>test 2= {valor2}|</div>
    <div>resultado= {valor} + {valor2}={valor*1+valor2*1}|</div>
    </>
}
