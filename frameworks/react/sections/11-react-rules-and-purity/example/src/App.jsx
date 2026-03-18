import { useState } from "react";
function FixedCounter(){ const [n,setN]=useState(0); return <button onClick={()=>setN(n+1)}>安全计数 {n}</button>; }
function PureList({ items }){ const sorted=[...items].sort(); return <div>{sorted.join(' / ')}</div>; }
export default function App(){
 return <div className="container"><h1>11 规则与纯粹性</h1><div className="card"><p>规则 1：Hook 只能在组件顶层调用。</p><p>规则 2：不要在 render 里修改外部数据。</p><FixedCounter /></div><PureList items={["b","a","c"]} /></div>;
}
