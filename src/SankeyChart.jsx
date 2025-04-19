import React, { useRef, useEffect } from 'react';
import ApexSankey from 'apexsankey';

const SankeyChart = ({ 
  data, 
  width = 800, 
  height = 600, 
  nodeWidth = 20,
  nodePadding = 10,
  linkOpacity = 0.5,
  colors = ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
  enableTooltip = true,
  showValues = true,
  showLabels = true,
  showLegend = true,
  legendPosition = 'bottom',
  canvasStyle = 'background-color: #f8f9fa; border-radius: 8px;',
  title = ""
}) => {
  const containerRef = useRef(null);
  const chartRef = useRef(null);

  let chart = null;

  useEffect(() => {
    
    if (containerRef.current) {
      try {
        // Destroy old chart if it exists
        if (chartRef.current && typeof chartRef.current.destroy === 'function') {
          chartRef.current.destroy();
          chartRef.current = null;
        }

        // Create new chart
        const options = {
          width,  
          height,
          nodeWidth,
          nodePadding,
          linkOpacity,
          colors,
          enableTooltip,
          showValues,
          showLabels,
          showLegend,
          legendPosition,
          canvasStyle,
          title
        };
        
        if(chart===undefined || chart==null) {
          chart = new ApexSankey(containerRef.current, options);
          chartRef.current = chart;
        }
        chart.render(data);
        
        // Cleanup when component unmounts or re-renders
        return () => {
          if (chart && typeof chart.destroy === 'function') {
            chart.destroy();
          }
          if (chartRef.current === chart) {
            chartRef.current = null;
          }
        };
      } catch (error) {
        console.error('Error in Sankey diagram:', error);
      }
    }
  }, [
    data, width, height, nodeWidth, nodePadding, linkOpacity, 
    colors, enableTooltip, showValues, showLabels, showLegend, 
    legendPosition, canvasStyle, title
  ]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        border: '1px solid #ccc',
        margin: '20px 0'
      }} 
    />
  );
};

export default SankeyChart; 