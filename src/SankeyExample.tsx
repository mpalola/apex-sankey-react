import React, { Component } from 'react';
import SankeyChart from './SankeyChart';

interface SankeyData {
    nodes: Array<{
        id: string;
        title: string;
    }>;
    edges: Array<{
        source: string;
        target: string;
        value: number;
        type: string;
    }>;
    options: {
        order: Array<Array<Array<string>>>;
    };
}

interface SankeyExampleState {
data: SankeyData;
}

class SankeyExample extends Component<{}, SankeyExampleState> {
constructor(props: {}) {
    super(props);
    this.state = {
    data: {
        nodes: [
        { id: "a", title: "Production" },
        { id: "b", title: "Storage" },
        { id: "c", title: "Sales" },
        ],
        edges: [
        { source: "a", target: "c", value: 1, type: "A" },
        { source: "b", target: "c", value: 2, type: "A" },
        ],
        options: {
        order: [[["a", "b"]], [["c"]]]
        }
    }
    };
}

render() {
    const chartOptions = {
    width: 800,
    height: 600,
    nodeWidth: 20,
    nodePadding: 10,
    linkOpacity: 0.5,
    colors: ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
    enableTooltip: true,
    showValues: true,
    showLabels: true,
    showLegend: true,
    legendPosition: 'bottom',
    canvasStyle: 'background-color: #f8f9fa; border-radius: 8px;',
    title: "Sankey Diagram Example"
    };

    const chartData = this.state.data;

    return (
    <div style={{ padding: '20px' }}>
        <h1>Sankey Diagram Class Component</h1>
        <p>This is an example of a Sankey diagram in a class component.</p>
        <SankeyChart
        data={chartData}
        {...chartOptions}
        />
    </div>
    );
}
}

export default SankeyExample; 