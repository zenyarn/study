import { useState } from "react";
export default function App(){
 const [count,setCount]=useState(0);
 const [likes,setLikes]=useState(["React"]);
 return <div className="container"><h1>05 事件与状态（练习）</h1><div className="row"><button onClick={()=>{ /* TODO 1: 用函数式更新 +1 */ }}>+1</button><span>count: {count}</span></div><div className="row"><button onClick={()=>{ /* TODO 2: 不可变更新 likes */ }}>点赞</button><small className="muted">{likes.join(" , ")}</small></div></div>;
}
