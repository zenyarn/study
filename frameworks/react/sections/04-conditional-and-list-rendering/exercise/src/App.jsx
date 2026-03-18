const tasks=[{id:1,text:"学习 JSX",done:true},{id:2,text:"学习 state",done:false},{id:3,text:"学习 effect",done:false}];
export default function App(){
 const showDone=true;
 // TODO 1: 如果 showDone 为 true，只展示已完成任务
 const list=tasks;
 return <div className="container"><h1>04 条件与列表渲染（练习）</h1>{/* TODO 2: 加上空状态 */}{list.map((t,i)=><div className="card" key={i}>{t.text} {t.done?"✅":"⏳"}</div>)}</div>;
}
