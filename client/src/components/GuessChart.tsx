/**
 * GuessChart Component - 热门涨跌竞猜图表
 * 
 * 使用堆叠柱状图显示看涨/看跌比例
 */

import ReactECharts from 'echarts-for-react';

interface GuessChartProps {
  variety: string;
  date: string;
  bullishPercent: number;
  bearishPercent: number;
}

export default function GuessChart({ 
  variety, 
  date, 
  bullishPercent, 
  bearishPercent 
}: GuessChartProps) {
  const option = {
    title: {
      text: `${variety} 涨跌竞猜`,
      left: 'center',
      textStyle: {
        fontSize: 14,
        fontWeight: 'normal',
      },
      subtext: date,
      top: 10,
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0.8)',
      formatter: '{b}<br/>{a0}: {c0}%<br />{a1}: {c1}%',
      axisPointer: {
        type: 'shadow',
      },
      confine: true,
    },
    legend: {
      data: ['看涨', '看跌'],
      top: 50,
      itemHeight: 8,
      itemWidth: 16,
    },
    grid: {
      height: 80,
      top: 80,
      bottom: 20,
    },
    xAxis: {
      show: false,
      type: 'value',
    },
    yAxis: {
      show: false,
      type: 'category',
      data: ['涨跌竞猜'],
    },
    series: [
      {
        name: '看涨',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          color: '#bf242a',
          borderRadius: [10, 0, 0, 10],
        },
        label: {
          show: bullishPercent > 0,
          color: '#ffffff',
          formatter: '{c}%',
        },
        emphasis: {
          focus: 'series',
        },
        data: [bullishPercent.toFixed(2)],
      },
      {
        name: '看跌',
        type: 'bar',
        stack: 'total',
        barWidth: 20,
        itemStyle: {
          color: '#006e54',
          borderRadius: bearishPercent === 100 ? 10 : [0, 10, 10, 0],
        },
        label: {
          show: true,
          color: '#ffffff',
          formatter: '{c}%',
        },
        emphasis: {
          focus: 'series',
        },
        data: [bearishPercent.toFixed(2)],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '180px', width: '100%' }} />;
}
