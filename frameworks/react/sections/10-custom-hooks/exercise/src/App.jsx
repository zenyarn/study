import { useEffect, useState } from "react";
function useToggle(initial=false){ const [v,setV]=useState(initial); /* TODO 1: 返回值与 toggle */ return [v,()=>{}]; }
function useLocalStorage(key,init){ const [v,setV]=useState(init); useEffect(()=>{ /* TODO 2: 同步到 localStorage */ },[key,v]); return [v,setV]; }
function useDebounce(value,delay=300){ const [d,setD]=useState(value); useEffect(()=>{const t=setTimeout(()=>setD(value),delay); return ()=>clearTimeout(t);},[value,delay]); return d; }
export default function App(){
 const [on,toggle]=useToggle(false); const [name,setName]=useLocalStorage('name',''); const d=useDebounce(name,300);
 return <div className="container"><h1>10 自定义 Hooks（练习）</h1><div className="row"><button onClick={toggle}>{on?"ON":"OFF"}</button><input value={name} onChange={e=>setName(e.target.value)} placeholder="输入名字"/></div><p>Debounce 后：{d}</p></div>;
}
