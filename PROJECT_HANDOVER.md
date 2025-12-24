# 奇货可查网站还原项目 - 交接文档

## 项目概述

**项目名称**：奇货可查网站还原（qihuo-kecha-clone）

**原网站地址**：https://x.qhkch.com/

**开发环境地址**：https://3000-ipmqhlbscm965io54ehoe-160550d0.us2.manus.computer

**项目路径**：/home/ubuntu/qihuo-kecha-clone

**登录信息**：
- 账号：18665606283
- 密码：179309463
- 已成功登录，浏览器保持登录状态

---

## 项目需求

用户要求完整还原 https://x.qhkch.com/ 网站的所有功能，具体要求：

### 核心需求

1. **完整网站地图梳理**：分析所有一级菜单和子菜单，包括链接页面后的链接
2. **逐个菜单开发**：按一级菜单逐个开发，每完成一个菜单让用户确认后再开发下一个
3. **精确还原**：
   - 前端功能：页面布局、样式、交互、细节内容、展示形式
   - 后端API：分析所有接口、参数、字段
   - ECharts图表：使用特殊方法提取原网站的ECharts配置

### ECharts图表提取方法（重要！）

用户提供了专门的方法来提取ECharts图表配置：

```javascript
// 1. 找到canvas的父层的父层，查找具有 _echarts_instance_ 属性的div
// 2. 获取instance ID，例如：ec_1766569294174
// 3. 使用以下代码获取精简的options配置：
echarts.getInstanceById("ec_1766569294174")._model._optionManager._newBaseOption
```

这个方法可以获取最精简的ECharts配置，避免直接获取实例option导致的冗余数据。

### 技术要求

- **异步加载处理**：页面大量使用异步接口，需要等待页面完全加载
- **滚动加载处理**：部分内容需要滚动到特定区域才加载
- **详情页处理**：相同URL但参数不同的详情页，只需分析一个即可

---

## 已完成的工作

### 第一阶段：网站分析和项目初始化 ✅

#### 1. 登录和初步访问
- ✅ 成功登录原网站
- ✅ 保存登录状态
- ✅ 初步浏览主页

#### 2. 网站地图梳理
- ✅ 完整梳理了11个一级菜单结构
- ✅ 记录了所有子菜单和功能模块
- ✅ 保存在 `/home/ubuntu/website_analysis/sitemap.md`

**网站结构总结**：
1. **主页** - 综合信息展示
2. **商品** - 14个子功能（持仓详情、涨跌统计、盈亏分析等）
3. **席位** - 9个子功能（持仓列表、盈亏日历、建仓过程等）
4. **指数** - 10个子功能（自定义指数分析和回测）
5. **基本面** - 9个子功能（经济数据、现货报价、基差期限等）
6. **DeepView** - 10个子功能（大部分VIP功能，深度分析工具）
7. **资金** - 5个子功能（市值对比、成交分布等）
8. **AI研报** - AI分析机构研报观点
9. **奇文** - 2个子功能（每日必看、藏经阁）
10. **VIP** - 4个子功能（充值和VIP服务）
11. **活动** - 线下交流会和活动信息

#### 3. 项目初始化
- ✅ 使用 web-static 脚手架初始化项目
- ✅ 技术栈：Vite + React 19 + TypeScript + TailwindCSS 4 + shadcn/ui
- ✅ 安装 echarts 和 echarts-for-react 依赖

### 第二阶段：主页开发 ✅

#### 1. 设计风格确定
经过用户反馈和多次调整，最终确定的设计风格：

**色彩系统**：
- 背景色：rgb(246, 248, 251) - 浅灰蓝色
- 深蓝色：#0054a6 - 用于主要卡片
- 红色：#bf242a - 用于看涨/做多
- 绿色：#006e54 - 用于看跌/做空

**布局特点**：
- 信息密集型三栏布局
- 紧凑间距
- 虚线边框卡片
- 小圆角（4-6px）
- 轻微阴影

**字体系统**：
- 标题：Inter Bold
- 正文：Inter Regular
- 数字：Inter Medium

#### 2. 已实现的主页功能

**顶部导航栏（Header）**：
- 深蓝色背景，固定顶部
- Logo + 网站名称
- 搜索框（商品/合约/席位）
- 11个主导航菜单
- 右侧功能按钮：收藏、深色模式、用户菜单

**头条精华（6大核心指标）**：
- 2行3列网格布局
- 虚线边框（红色/绿色）
- 6个卡片：
  1. 多空领先指标（深蓝色，红色虚线边框）
  2. 日内推土机（深蓝色，绿色虚线边框）
  3. 乾坤归一（深蓝色，绿色虚线边框）
  4. 外资动向（红色，红色虚线边框）
  5. 大佬动向（红色，红色虚线边框）
  6. 亏货动向（绿色，绿色虚线边框）

**AI研报多空一览**：
- Tab切换（300沪深、沪金、碳酸锂）
- 多空统计（看多/震荡/看空家数）
- 研报卡片列表（机构、观点、强度、日期、摘要）

**7x24资讯**：
- 实时资讯流
- 时间戳 + 内容
- 语音播报和只看关注开关
- 点击加载更多按钮

**右侧边栏**：
- 用户信息卡片（头像、VIP状态、续费按钮、统计数据）
- 每日必看（文章列表）
- 热门涨跌竞猜（ECharts堆叠柱状图）
- 多空领先指标（ECharts仪表盘）
- 乾坤归一综合评级（实时品种评级）

**底部行情条（BottomBar）**：
- 固定底部
- 滚动显示实时行情
- Hover暂停滚动

#### 3. ECharts图表实现

已成功提取并实现的图表：

1. **热门涨跌竞猜图表**（堆叠柱状图）
   - 配置文件：`/home/ubuntu/website_analysis/echarts_configs/guess_bar_chart.json`
   - 组件：`/home/ubuntu/qihuo-kecha-clone/client/src/components/GuessChart.tsx`

2. **多空领先指标图表**（仪表盘）
   - 配置文件：`/home/ubuntu/website_analysis/echarts_configs/gauge_chart.json`
   - 组件：`/home/ubuntu/qihuo-kecha-clone/client/src/components/GaugeChart.tsx`

3. **持仓详情页图表**（已提取配置，未实现）：
   - 多空持仓图（折线图+K线图）
   - 多头龙虎榜图（水平堆叠柱状图）
   - 空头龙虎榜图（水平堆叠柱状图）
   - 涨跌竞猜图（堆叠柱状图）

---

## 项目文件结构

```
/home/ubuntu/
├── qihuo-kecha-clone/              # 主项目目录
│   ├── client/                      # 前端代码
│   │   ├── src/
│   │   │   ├── components/          # 组件
│   │   │   │   ├── Header.tsx       # 顶部导航栏
│   │   │   │   ├── BottomBar.tsx    # 底部行情条
│   │   │   │   ├── GuessChart.tsx   # 竞猜图表
│   │   │   │   └── GaugeChart.tsx   # 仪表盘图表
│   │   │   ├── pages/
│   │   │   │   └── Home.tsx         # 主页
│   │   │   ├── App.tsx              # 应用入口
│   │   │   └── index.css            # 全局样式
│   │   ├── index.html               # HTML模板
│   │   └── public/                  # 静态资源
│   ├── package.json                 # 依赖配置
│   └── todo.md                      # 待办事项
│
└── website_analysis/                # 网站分析文档
    ├── sitemap.md                   # 完整网站地图
    ├── homepage_detailed_analysis.md # 主页详细分析
    ├── homepage_sidebar_modules.md  # 右侧边栏分析
    ├── style_comparison.md          # 风格对比分析
    ├── headline_card_styles.md      # 头条精华卡片样式分析
    ├── homepage_development_summary.md # 主页开发总结
    ├── pages/                       # 各页面分析
    │   └── variety_prices_stat.md   # 涨跌统计页面
    └── echarts_configs/             # ECharts配置
        ├── variety_position_chart.json  # 多空持仓图
        ├── guess_bar_chart.json         # 竞猜堆叠柱状图
        ├── gauge_chart.json             # 仪表盘
        └── ... (其他图表配置)
```

---

## 关键技术实现

### 1. 颜色系统

在 `client/src/index.css` 中定义：

```css
:root {
  --background: rgb(246, 248, 251); /* 浅灰背景 */
  --primary: oklch(0.35 0.12 250); /* 深蓝色 */
  /* ... 其他颜色变量 */
}
```

### 2. 头条精华卡片样式

```tsx
// 虚线边框 + 精确颜色
<a className="block bg-[#0054a6] rounded border-2 border-dashed border-red-600 p-3">
  {/* 卡片内容 */}
</a>
```

### 3. ECharts图表组件

使用 `echarts-for-react` 封装：

```tsx
import ReactECharts from 'echarts-for-react';

export default function GuessChart({ variety, date, bullishPercent, bearishPercent }) {
  const option = {
    // 从原网站提取的配置
  };
  
  return <ReactECharts option={option} />;
}
```

### 4. 底部滚动行情条

使用CSS动画实现无限滚动：

```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

## 待完成的工作

### 主页待完善功能（可选）
- [ ] 藏经阁模块
- [ ] 奇货可赞助商
- [ ] 最新基本面数据
- [ ] VIP广告横幅

### 下一步：开发其他一级菜单

按照用户要求，需要逐个菜单开发并确认：

#### 1. 商品菜单（14个子功能）
- [ ] 持仓详情（已分析部分，需完整实现）
- [ ] 涨跌统计（已分析）
- [ ] 盈亏分析
- [ ] 持仓排行
- [ ] 成交排行
- [ ] 价格对比
- [ ] 基差分析
- [ ] 期限结构
- [ ] 仓单分析
- [ ] 资金流向
- [ ] 外盘行情
- [ ] 现货报价
- [ ] 产业链图谱
- [ ] 品种日历

#### 2. 席位菜单（9个子功能）
- [ ] 持仓列表
- [ ] 盈亏日历
- [ ] 建仓过程
- [ ] 席位对比
- [ ] 龙虎榜
- [ ] 席位排行
- [ ] 席位分析
- [ ] 席位追踪
- [ ] 席位组合

#### 3. 指数菜单（10个子功能）
- [ ] 指数列表
- [ ] 指数详情
- [ ] 指数对比
- [ ] 指数回测
- [ ] 指数创建
- [ ] 指数编辑
- [ ] 指数分享
- [ ] 指数排行
- [ ] 指数分析
- [ ] 指数组合

#### 4. 基本面菜单（9个子功能）
- [ ] 经济数据
- [ ] 现货报价
- [ ] 基差期限
- [ ] 仓单分析
- [ ] 产业链
- [ ] 供需平衡
- [ ] 进出口
- [ ] 库存
- [ ] 价差

#### 5. DeepView菜单（10个子功能，大部分VIP功能）
- [ ] 深度分析工具（具体子功能待详细分析）

#### 6. 资金菜单（5个子功能）
- [ ] 市值对比
- [ ] 成交分布
- [ ] 资金流向
- [ ] 持仓分布
- [ ] 资金排行

#### 7. AI研报菜单
- [ ] AI研报列表
- [ ] 研报详情
- [ ] 研报分析

#### 8. 奇文菜单（2个子功能）
- [ ] 每日必看
- [ ] 藏经阁

#### 9. VIP菜单（4个子功能）
- [ ] VIP介绍
- [ ] 充值中心
- [ ] 会员权益
- [ ] 邀请好友

#### 10. 活动菜单
- [ ] 活动列表
- [ ] 活动详情
- [ ] 报名参加

---

## 开发流程建议

### 对于每个菜单的开发流程：

1. **深入分析**：
   - 访问原网站对应菜单
   - 记录所有子菜单和URL
   - 分析页面布局、样式、交互
   - 提取ECharts图表配置
   - 分析后端API接口

2. **开发实现**：
   - 创建对应的页面组件
   - 实现布局和样式
   - 集成ECharts图表
   - 添加路由配置

3. **用户确认**：
   - 展示开发成果
   - 收集用户反馈
   - 修改和优化

4. **继续下一个**：
   - 确认无误后开始下一个菜单

---

## 重要提示

### 1. 用户反馈经验

用户对风格非常敏感，第一次实现时用户反馈"很不满意，风格差别太大"。

**关键教训**：
- 必须精确匹配原网站的颜色、间距、边框、圆角
- 不要使用过于现代化的shadcn/ui默认样式
- 要保持原网站的信息密集型布局
- 虚线边框是原网站的重要特征

### 2. ECharts图表提取

使用用户提供的方法：
```javascript
echarts.getInstanceById("instance_id")._model._optionManager._newBaseOption
```

这个方法比直接获取 `getOption()` 更好，因为可以获取最精简的配置。

### 3. 异步加载处理

原网站大量使用异步加载，在分析时需要：
- 等待页面完全加载
- 滚动到特定区域触发加载
- 使用浏览器控制台检查网络请求

### 4. 项目状态

- 项目已初始化并运行正常
- 主页核心功能已完成
- 用户对当前主页效果基本满意
- 还未创建第一个checkpoint（按照工作流程，应该在第一次交付后创建）

---

## 快速启动指南

### 给接手同事的步骤：

1. **访问开发环境**：
   ```
   https://3000-ipmqhlbscm965io54ehoe-160550d0.us2.manus.computer
   ```

2. **访问原网站**（已登录）：
   ```
   https://x.qhkch.com/
   账号：18665606283
   密码：179309463
   ```

3. **查看项目代码**：
   ```bash
   cd /home/ubuntu/qihuo-kecha-clone
   ```

4. **查看分析文档**：
   ```bash
   cd /home/ubuntu/website_analysis
   ls -la
   ```

5. **继续开发下一个菜单**：
   - 先与用户确认主页是否满意
   - 如果满意，创建第一个checkpoint
   - 然后开始开发"商品"菜单

---

## 联系和交接

**当前进度**：主页开发完成，等待用户最终确认

**下一步行动**：
1. 等待用户确认主页效果
2. 如果用户满意，创建checkpoint
3. 开始开发"商品"菜单的第一个子功能"持仓详情"

**重要文件**：
- 项目代码：`/home/ubuntu/qihuo-kecha-clone/`
- 分析文档：`/home/ubuntu/website_analysis/`
- 待办事项：`/home/ubuntu/qihuo-kecha-clone/todo.md`
- 本交接文档：`/home/ubuntu/PROJECT_HANDOVER.md`

---

## 附录：常用命令

### 项目管理
```bash
# 进入项目目录
cd /home/ubuntu/qihuo-kecha-clone

# 安装依赖
pnpm install

# 启动开发服务器（已自动运行）
pnpm dev

# 构建生产版本
pnpm build
```

### 文件操作
```bash
# 查看分析文档
ls -la /home/ubuntu/website_analysis/

# 查看ECharts配置
cat /home/ubuntu/website_analysis/echarts_configs/gauge_chart.json
```

### 浏览器操作
- 原网站已登录，浏览器保持登录状态
- 可以直接访问需要登录的页面
- 使用浏览器控制台提取ECharts配置

---

**文档创建时间**：2025-12-24

**项目状态**：主页开发完成，等待用户确认

**交接状态**：准备交接给其他同事继续开发
