# React 教案总纲（完整实施版）

## 1. 教案定位

- 目标：构建从 React 基础到中型实践的 12 节递进式学习路径。
- 产物形态：`example/` + `exercise/` + `answer/` + `basics.md` + `README.md`。
- 风格：现代 React（函数组件 + Hooks），强调可运行、可对照、可复盘。

## 2. 章节总览

1. `01-react-mental-model`：React 心智模型与开发环境
2. `02-jsx-and-component-composition`：JSX 与组件嵌套
3. `03-props-and-reuse`：Props 与组件复用
4. `04-conditional-and-list-rendering`：条件渲染与列表渲染
5. `05-events-and-state`：事件响应与状态更新
6. `06-state-structure-and-lifting-state-up`：状态结构设计与状态提升
7. `07-forms-and-controlled-components`：表单、受控组件与数据流
8. `08-effects-and-side-effects`：Effect 与副作用思维
9. `09-refs-and-dom-interaction`：ref 与 DOM 操作
10. `10-custom-hooks`：自定义 Hooks
11. `11-react-rules-and-purity`：React 核心规则与常见误区
12. `12-mini-practice-thinking-in-react`：中型实践（Thinking in React）

## 3. 单节统一模板（强约束）

每节目录必须包含：

- `README.md`：学习目标、前置知识、建议顺序、预估耗时、产物说明、验收标准
- `basics.md`：通俗讲解 + 常见误区 + 与 Next.js 衔接
- `example/README.md`：可运行示例说明（统一使用 `pnpm`）
- `exercise/README.md`：练习说明（保留少量 TODO 空缺）
- `answer/README.md`：答案说明（与练习一一对照）

## 4. 章节级实施规范

- 统一使用 `pnpm`。
- 优先函数组件和 Hooks。
- 示例项目小而完整，聚焦单一知识点。
- 练习项目基于示例轻改，不从零重建。
- 答案项目与练习保持对照关系，补全点有注释。

## 5. 12 节详细规划（摘要）

### 01 React 心智模型
- example：个人名片页（静态组件拆分）
- exercise：单文件页面拆组件
- answer：标准拆分版本

### 02 JSX 与组件嵌套
- example：博客卡片墙
- exercise：补全 JSX 动态内容与嵌套
- answer：完成版并标注关键点

### 03 Props 与组件复用
- example：可配置按钮 / 提示框
- exercise：补全 props 映射与 `children`
- answer：对照版

### 04 条件与列表渲染
- example：任务清单展示页
- exercise：补全筛选分支和 `key`
- answer：对照版

### 05 事件与状态
- example：计数器 + 点赞面板
- exercise：补全事件绑定与不可变更新
- answer：对照版

### 06 状态结构与提升
- example：温度换算器
- exercise：补全父子通信与同步
- answer：对照版

### 07 表单与受控组件
- example：用户资料编辑表单
- exercise：补全输入绑定、校验、禁用提交
- answer：对照版

### 08 Effect 与副作用
- example：搜索建议页（含防抖）
- exercise：补全依赖数组与 cleanup
- answer：对照版

### 09 ref 与 DOM
- example：搜索列表 + 自动聚焦
- exercise：补全 ref 绑定与 DOM 调用
- answer：对照版

### 10 自定义 Hooks
- example：`useToggle` / `useLocalStorage` / `useDebounce`
- exercise：补全 Hook 返回值与关键逻辑
- answer：对照版

### 11 规则与纯粹性
- example：错误示例与修复对照集
- exercise：补全修复并解释原因
- answer：对照版

### 12 Thinking in React 实践
- example：可搜索商品表
- exercise：补全筛选条件、状态归属与回调传递
- answer：对照版

## 6. 三轮并行实施（4 个子 Agent 模式）

> 说明：以下为执行编排方案，用于并行协作落地 12 节。

### Round 1
- Agent A：01-react-mental-model
- Agent B：02-jsx-and-component-composition
- Agent C：03-props-and-reuse
- Agent D：04-conditional-and-list-rendering

### Round 2
- Agent A：05-events-and-state
- Agent B：06-state-structure-and-lifting-state-up
- Agent C：07-forms-and-controlled-components
- Agent D：08-effects-and-side-effects

### Round 3
- Agent A：09-refs-and-dom-interaction
- Agent B：10-custom-hooks
- Agent C：11-react-rules-and-purity
- Agent D：12-mini-practice-thinking-in-react

## 7. 子 Agent 统一工作流（每轮都执行）

1. 先完善本节 `README.md` 与 `basics.md`。
2. 构建 `example/` 最小可运行项目并写运行说明。
3. 基于 example 构建 `exercise/`，保留少量 TODO。
4. 生成 `answer/`，补全 TODO 并加关键注释。
5. 自查：结构完整、命名统一、主题聚焦。
6. 交叉检查：章节衔接与难度递进。

## 8. 总整合阶段（Round 1~3 后）

- 命名风格统一
- README 模板统一
- 注释风格统一
- 练习难度校准
- `basics.md` 语气与表达统一
- 章节前后引用与 Next.js 衔接补全
- 运行检查与目录检查

## 9. 验收清单

- 结构验收：12 节目录及子目录齐全。
- 内容验收：每节 `README.md`、`basics.md`、`example/`、`exercise/`、`answer/` 齐全。
- 运行验收：example/answer 可运行；exercise 提示清晰。
- 教学验收：讲解通俗、误区明确、与 Next.js 衔接明确。

## 10. 执行状态

- [x] 目录初始化与占位文件创建
- [x] React 总纲创建
- [x] Round 1 内容实施
- [x] Round 2 内容实施
- [x] Round 3 内容实施
- [x] 全量整合验收（文档级）
