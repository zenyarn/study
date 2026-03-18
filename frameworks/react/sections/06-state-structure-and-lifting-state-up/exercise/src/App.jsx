import { useState } from "react";
function CInput({ value,onChange }){ return <input value={value} onChange={e=>onChange(e.target.value)} placeholder="摄氏"/>; }
function FInput({ value,onChange }){ return <input value={value} onChange={e=>onChange(e.target.value)} placeholder="华氏"/>; }
export default function App(){
 const [c,setC]=useState(0);
 // TODO 1: 由 c 计算 f
 const f=0;
 return <div className="container"><h1>06 状态提升（练习）</h1><div className="row"><CInput value={c} onChange={setC}/><FInput value={f} onChange={(v)=>{ /* TODO 2: 反向转换并更新 c */ }}/></div></div>;
}
