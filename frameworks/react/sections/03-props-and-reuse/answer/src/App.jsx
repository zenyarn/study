function Button({ variant = "primary", children }) {
  return <button className={variant === "secondary" ? "secondary" : ""}>{children}</button>;
}
function Alert({ tone, message }) { return <div className="card">[{tone}] {message}</div>; }
export default function App() {
  return <div className="container"><h1>03 Props 与复用（答案）</h1><div className="row"><Button>提交</Button><Button variant="secondary">重置</Button></div><Alert tone="warning" message="注意 props 默认值与可选项" /></div>;
}
