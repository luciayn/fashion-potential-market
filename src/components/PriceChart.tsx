
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { PricePoint } from '../types/types';

interface PriceChartProps {
  data: PricePoint[];
  className?: string;
  height?: number;
  color?: string;
}

const PriceChart: React.FC<PriceChartProps> = ({ 
  data, 
  className = '', 
  height = 200,
  color = '#4CAF50'
}) => {
  // Get first and last price to determine if trending up or down
  const firstPrice = data.length > 0 ? data[0].price : 0;
  const lastPrice = data.length > 0 ? data[data.length - 1].price : 0;
  const isIncreasing = lastPrice >= firstPrice;

  // Filter data to show only the last 14 days
  const recentData = data.slice(-14);

  // Format date for tooltip
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
  };

  return (
    <div className={`${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={recentData}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={isIncreasing ? "#4CAF50" : "#F44336"} stopOpacity={0.8} />
              <stop offset="95%" stopColor={isIncreasing ? "#4CAF50" : "#F44336"} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 10 }}
            tickFormatter={(date) => formatDate(date)}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            domain={['dataMin - 5', 'dataMax + 5']}
            hide={true}
          />
          <Tooltip
            formatter={(value: number) => [`${value.toFixed(2)} €`, 'Precio']}
            labelFormatter={(date) => formatDate(date.toString())}
          />
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke={isIncreasing ? "#4CAF50" : "#F44336"} 
            fillOpacity={1}
            fill="url(#colorGradient)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
