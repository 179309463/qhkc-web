import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";
import GuessChart from "@/components/GuessChart";
import GaugeChart from "@/components/GaugeChart";

/**
 * 设计风格：完全按照原网站风格
 * - 浅灰背景 rgb(246, 248, 251)
 * - 虚线边框卡片
 * - 2行3列网格布局
 * - 紧凑间距
 * - 精确颜色匹配
 */
export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      {/* 主容器 */}
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        {/* 头条精华 */}
        <section className="mb-4">
          <h2 className="text-lg font-bold mb-3 text-gray-900">头条精华</h2>
          
          {/* 2行3列网格布局 */}
          <div className="grid grid-cols-3 gap-4">
            {/* 卡片1：多空领先指标 */}
            <a
              href="#"
              className="block bg-[#0054a6] rounded border-2 border-dashed border-red-600 p-3 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">多空领先指标</span>
                </div>
              </div>
              
              {/* 仪表盘图标 */}
              <div className="flex items-center justify-center my-3">
                <div className="relative w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">偏多氛围</span>
                </div>
              </div>
              
              <div className="text-white text-xs text-center">0 - 100</div>
            </a>

            {/* 卡片2：日内推土机 */}
            <a
              href="#"
              className="block bg-[#0054a6] rounded border-2 border-dashed border-green-600 p-3 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">日内推土机</span>
                </div>
              </div>
              
              <div className="mt-2">
                <span className="inline-block bg-green-600 text-white text-xs px-2 py-0.5 rounded mb-2">
                  看空
                </span>
                <div className="text-white">
                  <div className="text-sm mb-1">菜粕2605</div>
                  <div className="text-xl font-bold">2317</div>
                  <div className="text-green-400 text-sm">-1.15%</div>
                </div>
              </div>
            </a>

            {/* 卡片3：乾坤归一 */}
            <a
              href="#"
              className="block bg-[#0054a6] rounded border-2 border-dashed border-green-600 p-3 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">乾坤归一</span>
                </div>
              </div>
              
              <div className="mt-2">
                <span className="inline-block bg-red-600 text-white text-xs px-2 py-0.5 rounded mb-2">
                  看多
                </span>
                <div className="text-white">
                  <div className="text-sm mb-1">锰硅2603</div>
                  <div className="text-xl font-bold">5832</div>
                  <div className="text-gray-300 text-sm">0%</div>
                </div>
              </div>
            </a>

            {/* 卡片4：外资动向 */}
            <a
              href="#"
              className="block bg-[#bf242a] rounded border-2 border-dashed border-red-600 p-3 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">外资动向</span>
                </div>
              </div>
              
              <div className="mt-2">
                <span className="inline-block bg-green-600 text-white text-xs px-2 py-0.5 rounded mb-2">
                  最大流空
                </span>
                <div className="text-white">
                  <div className="text-sm mb-1">豆粕</div>
                  <div className="text-2xl font-bold">6.37亿</div>
                </div>
              </div>
            </a>

            {/* 卡片5：大佬动向 */}
            <a
              href="#"
              className="block bg-[#bf242a] rounded border-2 border-dashed border-red-600 p-3 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">大佬动向</span>
                </div>
              </div>
              
              <div className="mt-2">
                <span className="inline-block bg-green-600 text-white text-xs px-2 py-0.5 rounded mb-2">
                  布局做多
                </span>
                <div className="text-white">
                  <div className="text-sm mb-1">苹果2605</div>
                  <div className="text-xl font-bold">9191</div>
                  <div className="text-gray-300 text-sm">0%</div>
                </div>
              </div>
            </a>

            {/* 卡片6：亏货动向 */}
            <a
              href="#"
              className="block bg-[#006e54] rounded border-2 border-dashed border-green-600 p-3 hover:opacity-90 transition-opacity"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">亏货动向</span>
                </div>
              </div>
              
              <div className="mt-2">
                <span className="inline-block bg-green-600 text-white text-xs px-2 py-0.5 rounded mb-2">
                  扎堆做空
                </span>
                <div className="text-white">
                  <div className="text-sm mb-1">铁矿石2605</div>
                  <div className="text-xl font-bold">776</div>
                  <div className="text-green-400 text-sm">-0.45%</div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* 主内容区 - 两栏布局 */}
        <div className="grid grid-cols-12 gap-4">
          {/* 左侧主内容 */}
          <div className="col-span-8 space-y-4">
            {/* AI研报多空一览 */}
            <section className="bg-white rounded shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-gray-900">AI研报多空一览</h2>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  更多观点
                </a>
              </div>

              <Tabs defaultValue="300" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="300">300沪深</TabsTrigger>
                  <TabsTrigger value="gold">沪金</TabsTrigger>
                  <TabsTrigger value="lithium">碳酸锂</TabsTrigger>
                </TabsList>

                <TabsContent value="300" className="space-y-3">
                  {/* 统计信息 */}
                  <div className="flex items-center gap-4 text-sm mb-4">
                    <span>
                      看多：<span className="text-red-600 font-bold">11家</span>
                    </span>
                    <span>
                      震荡：<span className="text-gray-600 font-bold">3家</span>
                    </span>
                    <span>
                      看空：<span className="text-green-600 font-bold">0家</span>
                    </span>
                  </div>

                  {/* 研报列表 */}
                  <div className="space-y-2">
                    {[
                      {
                        org: "申银万国",
                        view: "看多",
                        strength: "极强",
                        date: "2025-12-23",
                        summary:
                          "政策托底、资金护航、产业驱动三重共振；美联储偏鸽思路升温与风险偏好升温。",
                      },
                      {
                        org: "瑞达期货",
                        view: "看多",
                        strength: "强",
                        date: "2025-12-24",
                        summary:
                          "市场延续强势，看多逻辑未发生明显松动；美元预计短期内延续疲软走势。",
                      },
                    ].map((report, i) => (
                      <div
                        key={i}
                        className="border border-gray-200 rounded p-3 hover:border-blue-400 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{report.org}</span>
                            <span className="inline-block bg-red-600 text-white text-xs px-2 py-0.5 rounded">
                              {report.view}
                            </span>
                            <span className="text-xs text-gray-600">{report.strength}</span>
                          </div>
                          <span className="text-xs text-gray-500">{report.date}</span>
                        </div>
                        <p className="text-sm text-gray-700">{report.summary}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gold">
                  <p className="text-sm text-gray-500">沪金研报内容...</p>
                </TabsContent>

                <TabsContent value="lithium">
                  <p className="text-sm text-gray-500">碳酸锂研报内容...</p>
                </TabsContent>
              </Tabs>
            </section>

            {/* 7x24资讯 */}
            <section className="bg-white rounded shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-gray-900">7x24资讯</h2>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-1 text-xs text-gray-600">
                    <input type="checkbox" className="rounded" />
                    语音播报
                  </label>
                  <label className="flex items-center gap-1 text-xs text-gray-600">
                    <input type="checkbox" className="rounded" />
                    只看关注
                  </label>
                </div>
              </div>

              {/* 资讯列表 */}
              <div className="space-y-3">
                {[
                  {
                    time: "12/24 21:02",
                    content: "国内商品期货收盘普遍上涨，沪金涨0.13%，沪银涨4.01%...",
                  },
                  {
                    time: "12/24 18:18",
                    content: "【连续白昼领衔沪深富时LOF A类份额25日开市起至当日10:30停牌】...",
                  },
                  {
                    time: "12/24 17:13",
                    content: "【国投白银LOF：将于12月25日开市起至当日10:30停牌】...",
                  },
                ].map((news, i) => (
                  <div key={i} className="flex gap-3 pb-3 border-b border-gray-100 last:border-0">
                    <span className="text-xs text-gray-500 whitespace-nowrap">{news.time}</span>
                    <p className="text-sm text-gray-700">{news.content}</p>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors">
                点击加载更多
              </button>
            </section>
          </div>

          {/* 右侧边栏 */}
          <div className="col-span-4 space-y-4">
            {/* 用户信息卡片 */}
            <div className="bg-white rounded shadow-sm p-4">
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-2">
                  F
                </div>
                <h3 className="font-medium text-gray-900">fengzhuojia</h3>
                <span className="text-xs text-gray-500">VIP用户</span>
                <button className="mt-2 px-6 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                  续费VIP
                </button>
              </div>

              {/* 统计数据 */}
              <div className="grid grid-cols-2 gap-2 text-center">
                <a href="#" className="p-2 hover:bg-gray-50 rounded transition-colors">
                  <div className="text-xl font-bold text-gray-900">5</div>
                  <div className="text-xs text-gray-500">关注商品</div>
                </a>
                <a href="#" className="p-2 hover:bg-gray-50 rounded transition-colors">
                  <div className="text-xl font-bold text-gray-900">6</div>
                  <div className="text-xs text-gray-500">关注席位</div>
                </a>
                <a href="#" className="p-2 hover:bg-gray-50 rounded transition-colors">
                  <div className="text-xl font-bold text-gray-900">4</div>
                  <div className="text-xs text-gray-500">创建指数</div>
                </a>
                <a href="#" className="p-2 hover:bg-gray-50 rounded transition-colors">
                  <div className="text-xl font-bold text-gray-900">0</div>
                  <div className="text-xs text-gray-500">邀请用户</div>
                </a>
              </div>
            </div>

            {/* 每日必看 */}
            <div className="bg-white rounded shadow-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-900">每日必看</h3>
                <a href="#" className="text-xs text-blue-600 hover:underline">
                  查看更多
                </a>
              </div>
              <div className="space-y-2">
                {[
                  { title: "碳酸锂：南下派还是不服 仍未决出胜负", date: "12月24日" },
                  { title: "12月24日晚报：家人表现+资金多空+仓单异常", date: "12月24日" },
                  { title: "碳酸锂：12万！", date: "12月23日" },
                  { title: "这个席位 左手电动车 右手燃油车", date: "12月22日" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <span className="line-clamp-2">{item.title}</span>
                      <span className="text-xs text-gray-400 whitespace-nowrap">{item.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* 热门涨跌竞猜 */}
            <div className="bg-white rounded shadow-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-900">热门涨跌竞猜</h3>
                <a href="#" className="text-xs text-blue-600 hover:underline">
                  更多竞猜
                </a>
              </div>
              <GuessChart 
                variety="纸浆2605"
                date="2025/12/24"
                bullishPercent={0}
                bearishPercent={100}
              />
            </div>

            {/* 多空领先指标 */}
            <div className="bg-white rounded shadow-sm p-4">
              <div className="text-center mb-2">
                <h3 className="text-sm font-bold text-gray-900">奇货商品多空领先指标</h3>
                <p className="text-xs text-gray-500">2025-12-24 22:36:00</p>
              </div>
              <GaugeChart value={69} updateTime="2025-12-24 22:36:00" />
            </div>

            {/* 乾坤归一综合评级 */}
            <div className="bg-white rounded shadow-sm p-4">
              <div className="mb-3">
                <h3 className="text-sm font-bold text-gray-900">乾坤归一综合评级</h3>
                <p className="text-xs text-gray-500">本数据仅供参考，不构成投资建议</p>
              </div>
              <div className="space-y-2">
                {[
                  { name: "焦炭2605", level: "弱多", price: "1735", change: "-0.63%" },
                  { name: "铁矿石2605", level: "中多", price: "776", change: "-0.45%" },
                  { name: "乙二醇2605", level: "弱多", price: "3853", change: "+0.92%" },
                  { name: "甲醇2605", level: "中多", price: "2171", change: "-0.05%" },
                  { name: "沪镍2602", level: "中性", price: "125990", change: "-1.57%" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-gray-500">{item.level}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900">{item.price}</span>
                      <span
                        className={
                          item.change.startsWith("+") ? "text-red-600" : "text-green-600"
                        }
                      >
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
