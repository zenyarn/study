import { useEffect, useState } from "react";
function useToggle(initial=false){ const [v,setV]=useState(initial); return [v,()=>setV(x=>!x)]; }
function useLocalStorage(key,init){ const [v,setV]=useState(()=>JSON.parse(localStorage.getItem(key) || JSON.stringify(init))); useEffect(()=>{ localStorage.setItem(key,JSON.stringify(v)); },[key,v]); return [v,setV]; }
function useDebounce(value,delay=300){ const [d,setD]=useState(value); useEffect(()=>{const t=setTimeout(()=>setD(value),delay); return ()=>clearTimeout(t);},[value,delay]); return d; }
export default function App(){
 const [on,toggle]=useToggle(false); const [name,setName]=useLocalStorage('name',''); const d=useDebounce(name,300);
 return <div className="container"><h1>10 自定义 Hooks（答案）</h1><div className="row"><button onClick={toggle}>{on?"ON":"OFF"}</button><input value={name} onChange={e=>setName(e.target.value)} placeholder="输入名字"/></div><p>Debounce 后：{d}</p></div>;
}
