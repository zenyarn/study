import { useState } from "react";
function WrongCounter(){
  const [n,setN]=useState(0);
  // TODO 1: 禁止在渲染中 setState
  if(n===0){ /* setN(1); */ }
  return <button onClick={()=>setN(n+1)}>计数 {n}</button>;
}
function WrongList({ items }){
  // TODO 2: 不要直接 sort props 原数组
  items.sort();
  return <div>{items.join(' / ')}</div>;
}
export default function App(){
  return <div className="container"><h1>11 规则与纯粹性（练习）</h1><WrongCounter /><WrongList items={["b","a","c"]} /></div>;
}
