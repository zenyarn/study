import { useMemo, useState } from "react";
const products=[{id:1,name:'Apple',price:10,inStock:true},{id:2,name:'Orange',price:8,inStock:false},{id:3,name:'Banana',price:6,inStock:true}];
export default function App(){
 const [q,setQ]=useState(''); const [onlyStock,setOnlyStock]=useState(false);
 const list=useMemo(()=>products.filter(p=>p.name.toLowerCase().includes(q.toLowerCase())).filter(p=>onlyStock?p.inStock:true),[q,onlyStock]);
 return <div className="container"><h1>12 Thinking in React</h1><div className="row"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索商品"/><label><input type="checkbox" checked={onlyStock} onChange={e=>setOnlyStock(e.target.checked)}/>仅看有货</label></div>{list.map(p=><div className="card" key={p.id}>{p.name} - ￥{p.price} {p.inStock?'✅':'❌'}</div>)}</div>;
}
