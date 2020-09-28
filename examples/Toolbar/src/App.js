import React from 'react';
import './style.css';

import GGEditor, { Flow } from 'gg-editor';

import Toolbar from './Toolbar';

const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 55,
      y: 55
    },
    {
      id: '1',
      label: 'Node',
      x: 55,
      y: 255
    }
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      target: '1'
    }
  ]
};

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <hr />
      <GGEditor>
        <Toolbar />
        <Flow
          style={{
            width: '100%',
            height: 500,
            backgroundColor: '#f6f7f9',
            border: '1px solid #ebedf1',
            borderTop: 'none'
          }}
          data={data}
        />
      </GGEditor>
    </div>
  );
}
