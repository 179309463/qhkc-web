/**
 * BottomBar Component - 底部滚动行情条
 * 
 * Design: 固定底部，显示实时行情滚动
 */

import { useEffect, useState } from "react";

interface MarketData {
  name: string;
  price: number;
  change: number;
}

export default function BottomBar() {
  const [marketData] = useState<MarketData[]>([
    { name: "焦炭2605", price: 1735, change: -0.63 },
    { name: "铁矿石2605", price: 776, change: -0.45 },
    { name: "乙二醇2605", price: 3853, change: 0.92 },
    { name: "甲醇2605", price: 2171, change: -0.05 },
    { name: "沪镍2602", price: 125990, change: -1.57 },
  ]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg">
      <div className="overflow-hidden">
        <div className="flex items-center h-10 animate-marquee whitespace-nowrap">
          {/* 重复两次以实现无缝滚动 */}
          {[...marketData, ...marketData].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-6 text-sm"
            >
              <span className="font-medium">{item.name}</span>
              <span className="font-semibold">{item.price}</span>
              <span
                className={`font-medium ${
                  item.change > 0
                    ? "text-red-600"
                    : item.change < 0
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                {item.change > 0 ? "+" : ""}
                {item.change}%
              </span>
              <span className="text-muted-foreground">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
