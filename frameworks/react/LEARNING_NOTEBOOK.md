# React 学习文档（可直接按章节实操）

这份文档是本仓库 React 路线的总入口。目标是让你可以**从 01 到 12 一次性学完整套内容**，每节都能跑 example、做 exercise、对照 answer。

## 使用方式（每节统一）
1. 先读该节 `README.md` 与 `basics.md`。
2. 进入 `example/`：
   ```bash
   pnpm install
   pnpm dev
   ```
3. 再进入 `exercise/`，只改 `src/App.jsx` 里的 TODO。
4. 最后跑 `answer/` 对照差异并复盘。

## 12 节顺序
1. 01-react-mental-model
2. 02-jsx-and-component-composition
3. 03-props-and-reuse
4. 04-conditional-and-list-rendering
5. 05-events-and-state
6. 06-state-structure-and-lifting-state-up
7. 07-forms-and-controlled-components
8. 08-effects-and-side-effects
9. 09-refs-and-dom-interaction
10. 10-custom-hooks
11. 11-react-rules-and-purity
12. 12-mini-practice-thinking-in-react

## 章节结构说明
每节都包含：
- `README.md`：目标、前置、顺序、验收
- `basics.md`：通俗讲解、误区、Next.js 衔接
- `example/`：可运行最小实现
- `exercise/`：可运行练习（含 TODO）
- `answer/`：可运行参考答案

## 学习节奏建议
- 每天 1 节：12 天完成一轮。
- 每节约 1~1.5 小时：
  - 20 分钟读文档
  - 20 分钟跑 example
  - 30~40 分钟做 exercise
  - 10 分钟对照 answer

## 完成标准
- 你能自己解释该节核心概念。
- 你能独立补全 exercise 里的 TODO。
- 你能指出自己与 answer 的差异并解释原因。
