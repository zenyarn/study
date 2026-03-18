function PostCard({ title, children }) { return <article className="card"><h3>{title}</h3><div>{children}</div></article>; }
function Section({ title, children }) { return <section><h2>{title}</h2>{children}</section>; }
export default function App() {
  const posts = [{ id: 1, title: "JSX", body: "可把 JS 放进 {}" }, { id: 2, title: "组合", body: "组件像积木" }];
  return <div className="container"><h1>02 JSX 与组件组合（练习）</h1><Section title="请补全列表">{/* TODO 1: 用 posts.map 渲染 PostCard */}<PostCard title="示例占位">TODO</PostCard></Section></div>;
}
