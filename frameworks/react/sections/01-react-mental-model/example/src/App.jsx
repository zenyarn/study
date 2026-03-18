function Avatar({ name }) { return <div className="card">👤 {name}</div>; }
function Bio({ role }) { return <div className="card">角色：{role}</div>; }
function TagList({ tags }) { return <div className="card">{tags.map(t => <span key={t} className="badge">{t}</span>)}</div>; }
export default function App() {
  const profile = { name: "Ada", role: "Frontend Engineer", tags: ["React", "TypeScript", "UI"] };
  return <div className="container"><h1>01 React 心智模型</h1><p>UI = f(state)</p><Avatar name={profile.name} /><Bio role={profile.role} /><TagList tags={profile.tags} /></div>;
}
