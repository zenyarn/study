function Button({ variant = "primary", children }) {
  // TODO 1: 根据 variant 应用 secondary class
  return <button>{children}</button>;
}
function Alert({ tone, message }) { return <div className="card">[{tone}] {message}</div>; }
export default function App() {
  return <div className="container"><h1>03 Props 与复用（练习）</h1><div className="row"><Button>提交</Button><Button variant="secondary">重置</Button></div>{/* TODO 2: 传入 tone=warning 的 Alert */}<Alert tone="info" message="先完成 TODO" /></div>;
}
