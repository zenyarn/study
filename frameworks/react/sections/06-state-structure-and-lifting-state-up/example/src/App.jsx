import { useState } from "react";
function CInput({ value,onChange }){ return <input value={value} onChange={e=>onChange(e.target.value)} placeholder="摄氏"/>; }
function FInput({ value,onChange }){ return <input value={value} onChange={e=>onChange(e.target.value)} placeholder="华氏"/>; }
export default function App(){
 const [c,setC]=useState(0);
 const f=((Number(c)*9)/5+32).toFixed(1);
 return <div className="container"><h1>06 状态提升</h1><div className="row"><CInput value={c} onChange={setC}/><FInput value={f} onChange={(v)=>setC(((Number(v)-32)*5/9).toFixed(1))}/></div></div>;
}
