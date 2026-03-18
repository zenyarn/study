import { useEffect, useState } from "react";
export default function App(){
 const [keyword,setKeyword]=useState("");
 const [result,setResult]=useState("等待输入");
 useEffect(()=>{
   if(!keyword){setResult("等待输入");return;}
   const timer=setTimeout(()=>setResult(`搜索结果：${keyword}`),400);
   // TODO 1: 补全 cleanup
 },[]); // TODO 2: 修复依赖
 return <div className="container"><h1>08 Effect 与副作用（练习）</h1><input value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder="输入关键字"/><p>{result}</p></div>;
}
