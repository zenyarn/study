function Button({ variant = "primary", children }) { return <button className={variant === "secondary" ? "secondary" : ""}>{children}</button>; }
function Alert({ tone, message }) { return <div className="card">[{tone}] {message}</div>; }
export default function App() {
  return <div className="container"><h1>03 Props 与复用</h1><div className="row"><Button>保存</Button><Button variant="secondary">取消</Button></div><Alert tone="info" message="props 是组件输入" /></div>;
}
