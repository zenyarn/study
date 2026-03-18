function PostCard({ title, children }) { return <article className="card"><h3>{title}</h3><div>{children}</div></article>; }
function Section({ title, children }) { return <section><h2>{title}</h2>{children}</section>; }
export default function App() {
  return <div className="container"><h1>02 JSX 与组件组合</h1><Section title="最新文章"><PostCard title="组件嵌套">先写骨架，再填内容。</PostCard><PostCard title="JSX 表达式">{2 + 3} 是合法表达式。</PostCard></Section></div>;
}
