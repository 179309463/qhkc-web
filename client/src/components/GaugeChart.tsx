/**
 * GaugeChart Component - 多空领先指标仪表盘
 * 
 * 半圆形仪表盘：绿色（空头）、黄色（中性）、红色（多头）
 */

import ReactECharts from 'echarts-for-react';

interface GaugeChartProps {
  value: number;
  updateTime: string;
}

export default function GaugeChart({ value, updateTime }: GaugeChartProps) {
  const option = {
    title: {
      text: '奇货商品多空领先指标',
      subtext: updateTime,
      left: 'center',
      textStyle: {
        fontSize: 16,
      },
      top: 10,
    },
    tooltip: {
      formatter: '{a} <br/>{c}',
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
    series: [
      {
        min: 0,
        max: 100,
        name: '多空领先指标',
        type: 'gauge',
        animation: true,
        center: ['50%', '65%'],
        radius: '80%',
        startAngle: 180,
        endAngle: 0,
        detail: {
          formatter: '{value}',
          fontSize: 20,
          color: 'auto',
          offsetCenter: [0, '10%'],
        },
        data: [
          {
            value: value,
          },
        ],
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [0.4, '#006e54'], // 绿色：空头区域 0-40
              [0.6, '#ca8622'], // 黄色：中性区域 40-60
              [1, '#bf242a'],   // 红色：多头区域 60-100
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: '#666',
          },
          width: 5,
        },
        axisTick: {
          distance: -20,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2,
          },
        },
        splitLine: {
          distance: -20,
          length: 15,
          lineStyle: {
            color: '#fff',
            width: 3,
          },
        },
        axisLabel: {
          color: 'auto',
          distance: 25,
          fontSize: 12,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '220px', width: '100%' }} />;
}
