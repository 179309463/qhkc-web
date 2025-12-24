/**
 * Header Component - 奇货可查顶部导航栏
 * 
 * Design: 深蓝色背景，固定顶部，包含Logo、搜索、导航菜单、用户信息
 */

import { Search, Moon, User, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  const navItems = [
    { name: "主页", path: "/" },
    { name: "商品", path: "/variety" },
    { name: "席位", path: "/broker" },
    { name: "指数", path: "/indexes" },
    { name: "基本面", path: "/fundamental" },
    { name: "DeepView", path: "/deepview" },
    { name: "资金", path: "/fund" },
    { name: "AI研报", path: "/reports" },
    { name: "奇文", path: "/articles" },
    { name: "VIP", path: "/vip" },
    { name: "活动", path: "/events" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded flex items-center justify-center">
                <span className="text-sm">奇</span>
              </div>
              <span className="hidden sm:inline">奇货可查</span>
            </a>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="商品/合约/席位"
                className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className="px-3 py-2 text-sm font-medium hover:bg-primary-foreground/10 rounded transition-colors">
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Star className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Moon className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
