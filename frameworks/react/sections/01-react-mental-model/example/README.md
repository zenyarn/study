# Example：React 心智模型与开发环境

## 场景
- 个人名片页：从单文件拆分为 Avatar / ProfileCard / TagList 组件。

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
