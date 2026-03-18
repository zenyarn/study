import { useState } from "react";
export default function App(){
 const [count,setCount]=useState(0);
 const [likes,setLikes]=useState(["React"]);
 return <div className="container"><h1>05 事件与状态（答案）</h1><div className="row"><button onClick={()=>setCount(c=>c+1)}>+1</button><span>count: {count}</span></div><div className="row"><button onClick={()=>setLikes(prev=>[...prev,`Like ${prev.length+1}`])}>点赞</button><small className="muted">{likes.join(" , ")}</small></div></div>;
}
