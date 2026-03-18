import { useState } from "react";
export default function App(){
 const [form,setForm]=useState({name:"",email:"",role:"student",bio:""});
 // TODO 1: 补全邮箱校验
 const emailOk=true;
 const onChange=(e)=>{ /* TODO 2: 用 name 做通用更新 */ };
 return <div className="container"><h1>07 表单与受控组件（练习）</h1><div className="row"><input name="name" value={form.name} onChange={onChange} placeholder="姓名"/><input name="email" value={form.email} onChange={onChange} placeholder="邮箱"/></div><div className="row"><button disabled={false}>提交</button>{/* TODO 3: 根据 emailOk 展示提示并控制 disabled */}</div></div>;
}
