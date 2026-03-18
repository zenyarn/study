import { useState } from "react";
function FixedCounter(){
  const [n,setN]=useState(0);
  return <button onClick={()=>setN(n+1)}>计数 {n}</button>;
}
function FixedList({ items }){
  const sorted=[...items].sort();
  return <div>{sorted.join(' / ')}</div>;
}
export default function App(){
  return <div className="container"><h1>11 规则与纯粹性（答案）</h1><FixedCounter /><FixedList items={["b","a","c"]} /></div>;
}
