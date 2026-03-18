# React 教案并行实施计划（4 子 Agent × 3 轮）

## 目标

在保证统一结构与教学质量的前提下，以并行方式完成 12 个小节落地。

## 子 Agent 分工策略

- 每轮固定 4 个子 Agent（A/B/C/D）并行。
- 每个子 Agent 每轮负责 1 个小节。
- 共 3 轮覆盖 12 节。

## 三轮排期

### Round 1（基础能力）
- Agent A → `01-react-mental-model`
- Agent B → `02-jsx-and-component-composition`
- Agent C → `03-props-and-reuse`
- Agent D → `04-conditional-and-list-rendering`

### Round 2（交互能力）
- Agent A → `05-events-and-state`
- Agent B → `06-state-structure-and-lifting-state-up`
- Agent C → `07-forms-and-controlled-components`
- Agent D → `08-effects-and-side-effects`

### Round 3（进阶与综合）
- Agent A → `09-refs-and-dom-interaction`
- Agent B → `10-custom-hooks`
- Agent C → `11-react-rules-and-purity`
- Agent D → `12-mini-practice-thinking-in-react`

## 每个子 Agent 的交付模板（统一）

每个小节都必须交付：

1. `README.md`
   - 学习目标
   - 前置知识
   - 建议顺序
   - 预估耗时
   - 产物说明
   - 验收标准
2. `basics.md`
   - 通俗讲解（建立直觉）
   - 常见误区
   - 与 Next.js 的衔接
3. `example/`
   - 可运行最小项目（pnpm）
4. `exercise/`
   - 基于 example 的对照练习（少量 TODO）
5. `answer/`
   - exercise 完整答案（关键补全有注释）

## 每轮执行流程

1. 并行实施（A/B/C/D 同步推进）。
2. 轮内自检（结构、命名、可运行性、TODO 提示）。
3. 轮末合并检查（难度递进、表达风格、注释一致性）。
4. 进入下一轮。

## 质量门禁（每轮结束都必须通过）

- 目录结构完整：`README.md` / `basics.md` / `example` / `exercise` / `answer` 全部存在。
- 运行可用：`example` 与 `answer` 可运行。
- 练习可做：`exercise` 有清晰 TODO，且仅保留少量关键空缺。
- 教学一致：表达通俗、术语统一、与 Next.js 的衔接明确。

## 总整合阶段（Round 3 后）

- 命名与目录一致性检查。
- README 模板统一。
- 注释与文档语气统一。
- 练习难度再校准。
- 章节前后引用补全。
- 全量运行与验收检查。


## 本次实施记录（并行模拟）

> 说明：在单仓库执行环境中，以“4 条并行工作流（A/B/C/D）×3 轮”方式落地文档与练习说明。

### Round 1 产出
- Agent A：完成 01 `README/basics/example/exercise/answer`。
- Agent B：完成 02 `README/basics/example/exercise/answer`。
- Agent C：完成 03 `README/basics/example/exercise/answer`。
- Agent D：完成 04 `README/basics/example/exercise/answer`。

### Round 2 产出
- Agent A：完成 05。
- Agent B：完成 06。
- Agent C：完成 07。
- Agent D：完成 08。

### Round 3 产出
- Agent A：完成 09。
- Agent B：完成 10。
- Agent C：完成 11。
- Agent D：完成 12。

### 总整合检查
- 12 节均已按统一模板补齐。
- TODO 描述统一为“少量关键空缺”。
- 均补充了与 Next.js 的衔接说明。
