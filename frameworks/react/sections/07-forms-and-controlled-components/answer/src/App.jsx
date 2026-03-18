import { useState } from "react";
export default function App(){
 const [form,setForm]=useState({name:"",email:"",role:"student",bio:""});
 const emailOk=/^[^@]+@[^@]+\.[^@]+$/.test(form.email);
 const onChange=(e)=>setForm(f=>({...f,[e.target.name]:e.target.value}));
 return <div className="container"><h1>07 表单与受控组件（答案）</h1><div className="row"><input name="name" value={form.name} onChange={onChange} placeholder="姓名"/><input name="email" value={form.email} onChange={onChange} placeholder="邮箱"/></div><div className="row"><button disabled={!form.name || !emailOk}>提交</button><small className="muted">{emailOk?"邮箱格式正确":"邮箱格式不正确"}</small></div></div>;
}
