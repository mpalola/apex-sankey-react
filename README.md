# apex-sankey-react

React component for displaying ApexSankey charts.

## Installation

```bash
npm install apex-sankey-react
```

## Development environment installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
# or
npm run dev
```

Development server starts at http://localhost:3000 and opens the browser automatically.

4. Preview production version:
```bash
npm run preview
```

5. Library build:
```bash
npm run build
```

This creates `dist` directory:
- `index.umd.js`: UMD-bundle (old browsers)
- `index.es.js`: ES-module (modern browsers)
- `index.d.ts`: TypeScript type definitions

## Usage

```jsx
import { SankeyChart } from 'apex-sankey-react';

const Example = () => {
  const data = {
    nodes: [
      { id: "a", name: "AAA" },
      { id: "b", name: "BBB" },
      { id: "c", name: "CCC" }
    ],
    links: [
      { source: "a", target: "c", value: 1 },
      { source: "b", target: "c", value: 2 }
    ]
  };

  const options = {
    width: 800,
    height: 600,
    nodeWidth: 20,
    nodePadding: 10,
    linkOpacity: 0.5,
    colors: ['#4CAF50', '#2196F3', '#FFC107', '#F44336']
  };

  return (
    <SankeyChart
      data={data}
      {...options}
    />
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|---------|------------|---------|
| data | object | - | Sankey diagram data (nodes and links) |
| width | number | 800 | Chart width in pixels |
| height | number | 600 | Chart height in pixels |
| nodeWidth | number | 20 | Width of nodes |
| nodePadding | number | 10 | Padding between nodes |
| linkOpacity | number | 0.5 | Opacity of links |
| colors | string[] | ['#4CAF50',...] | Color palette |
| enableTooltip | boolean | true | Show tooltip |
| showValues | boolean | true | Show values |
| showLabels | boolean | true | Show labels |
| showLegend | boolean | true | Show legend |
| legendPosition | string | 'bottom' | Legend position |
| canvasStyle | string | '' | Canvas element styles |

## License

MIT 