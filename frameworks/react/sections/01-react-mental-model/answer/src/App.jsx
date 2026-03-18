function Avatar({ name }) { return <div className="card">👤 {name}</div>; }
function Bio({ role }) { return <div className="card">角色：{role}</div>; }
function TagList({ tags }) {
  // 关键补全：使用 map + key
  return <div className="card">{tags.map((tag) => <span key={tag} className="badge">{tag}</span>)}</div>;
}
export default function App() {
  const profile = { name: "Ada", role: "Frontend Engineer", tags: ["React", "TypeScript", "UI"] };
  return <div className="container"><h1>01 React 心智模型（答案）</h1><p>声明式渲染：只描述状态下 UI 的样子。</p><Avatar name={profile.name} /><Bio role={profile.role} /><TagList tags={profile.tags} /></div>;
}
