import { useEffect, useRef } from "react";
export default function App(){
 const inputRef=useRef(null);
 const boxRef=useRef(null);
 useEffect(()=>{ /* TODO 1: 页面加载时聚焦 */ },[]);
 return <div className="container"><h1>09 Ref 与 DOM（练习）</h1><input placeholder="进入页面自动聚焦"/><div ref={boxRef} className="card">目标区域</div><div className="row"><button onClick={()=>{ /* TODO 2: 通过 ref 聚焦输入框 */ }}>再次聚焦</button><button className="secondary" onClick={()=>{ /* TODO 3: 调用 scrollIntoView */ }}>滚动到区域</button></div></div>;
}
