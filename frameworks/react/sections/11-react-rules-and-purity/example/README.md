# Example：React 规则与纯粹性

## 场景
- 错误示例集：条件调用 Hook、直接修改 props、渲染期 setState。

## 推荐目录（可按需调整）
```
example/
  package.json
  src/
    App.jsx
    main.jsx
    components/
```

## 启动方式（pnpm）
```bash
pnpm install
pnpm dev
```

## 你应该观察到
- 页面有清晰的组件边界与命名。
- 操作后 UI 变化与本节主题一致。
- 代码总量小，但完整可运行。

## 自检清单
- 是否只围绕一个核心知识点？
- 是否存在不必要的复杂抽象？
- 是否方便作为 exercise 的基线？
