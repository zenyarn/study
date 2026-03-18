function Avatar({ name }) { return <div className="card">👤 {name}</div>; }
function Bio({ role }) { return <div className="card">角色：{role}</div>; }
function TagList({ tags }) {
  // TODO 1: 用 map 渲染 tag 列表
  return <div className="card">{tags.join(" / ")}</div>;
}
export default function App() {
  const profile = { name: "Ada", role: "Frontend Engineer", tags: ["React", "TypeScript", "UI"] };
  // TODO 2: 把说明文案改成“声明式渲染”并保持页面可运行
  return <div className="container"><h1>01 React 心智模型（练习）</h1><p>请补全 TODO</p><Avatar name={profile.name} /><Bio role={profile.role} /><TagList tags={profile.tags} /></div>;
}
