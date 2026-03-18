const tasks=[{id:1,text:"学习 JSX",done:true},{id:2,text:"学习 state",done:false},{id:3,text:"学习 effect",done:false}];
export default function App(){
 const showDone=true;
 const list=tasks.filter(t=> showDone ? t.done : true);
 return <div className="container"><h1>04 条件与列表渲染（答案）</h1>{list.length===0? <p>暂无任务</p>: list.map(t=><div className="card" key={t.id}>{t.text} {t.done?"✅":"⏳"}</div>)}</div>;
}
