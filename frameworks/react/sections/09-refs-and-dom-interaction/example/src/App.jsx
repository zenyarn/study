import { useEffect, useRef } from "react";
export default function App(){
 const inputRef=useRef(null);
 const boxRef=useRef(null);
 useEffect(()=>{ inputRef.current?.focus(); },[]);
 return <div className="container"><h1>09 Ref 与 DOM</h1><input ref={inputRef} placeholder="进入页面自动聚焦"/><div ref={boxRef} className="card">目标区域</div><div className="row"><button onClick={()=>inputRef.current?.focus()}>再次聚焦</button><button className="secondary" onClick={()=>boxRef.current?.scrollIntoView({behavior:'smooth'})}>滚动到区域</button></div></div>;
}
