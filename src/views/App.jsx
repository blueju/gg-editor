import React, { Component } from 'react';

import { Col, Row, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import { NodePanel, EdgePanel, MultiPanel, CanvasPanel } from '../components/detailpanel';

/**
 * GGEditor       编辑器主控
 * Flow           流程图
 */
import GGEditor, { Command, constants, Flow, EditableLabel, ItemPanel, Item } from 'gg-editor';

const { EditorCommand } = constants;

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div className="app">
        <header>ggeditor</header>
        <GGEditor className="editor">
          {/* 工具栏 */}
          <Row>
            <Col span={24}>
              <div className="toolbar">
                <Command name={EditorCommand.Undo}>
                  <Tooltip title="撤销">
                    <i className="fa fa-undo" />
                  </Tooltip>
                </Command>
                <Command name={EditorCommand.Redo}>
                  <Tooltip title="重做">
                    <i className="fa fa-repeat" />
                  </Tooltip>
                </Command>
                <Command name={EditorCommand.Remove}>
                  <Tooltip title="删除">
                    <i className="fa fa-trash-o" />
                  </Tooltip>
                </Command>
              </div>
            </Col>
          </Row>
          <Row>
            <Col flex="160px">
              <ItemPanel className="itempanel">
                <Item
                  model={{
                    type: 'circle',
                    size: 80,
                    label: 'circle'
                  }}
                >
                  <img
                    src="https://gw.alicdn.com/tfs/TB1IRuSnRr0gK0jSZFnXXbRRXXa-110-112.png"
                    width="90"
                    height="90"
                    draggable={false}
                  />
                </Item>
                <Item
                  model={{
                    type: 'bizFlowNode',
                    size: [100, 50],
                    label: 'bizFlowNode'
                  }}
                >
                  <img
                    src="https://s1.ax1x.com/2020/07/07/UAtT1I.png"
                    width="90"
                    height="90"
                    draggable={false}
                  />
                </Item>
                <Item
                  model={{
                    type: 'rect',
                    size: [100, 50],
                    label: 'rect'
                  }}
                >
                  <img
                    src="https://gw.alicdn.com/tfs/TB1reKOnUT1gK0jSZFrXXcNCXXa-178-76.png"
                    width="90"
                    height="90"
                    draggable={false}
                  />
                </Item>
                <Item
                  model={{
                    type: 'ellipse',
                    size: [100, 50],
                    label: 'ellipse'
                  }}
                >
                  <img
                    src="https://gw.alicdn.com/tfs/TB1AvmVnUH1gK0jSZSyXXXtlpXa-216-126.png"
                    width="90"
                    height="90"
                    draggable={false}
                  />
                </Item>
                <Item
                  model={{
                    type: 'diamond',
                    size: [80, 80],
                    label: 'diamond'
                  }}
                >
                  <img
                    src="https://gw.alicdn.com/tfs/TB1EB9VnNz1gK0jSZSgXXavwpXa-178-184.png"
                    width="90"
                    height="90"
                    draggable={false}
                  />
                </Item>
                <Item
                  model={{
                    type: 'triangle',
                    size: [30, 30],
                    label: 'triangle'
                  }}
                >
                  <img
                    src="https://gw.alicdn.com/tfs/TB12sC2nKH2gK0jSZJnXXaT1FXa-126-156.png"
                    width="90"
                    height="90"
                    draggable={false}
                  />
                </Item>
              </ItemPanel>
            </Col>
            <Col flex="auto">
              <div style={{ position: 'relative' }}>
                <Flow
                  className="flow"
                  data={data}
                  graphConfig={{
                    defaultNode: {
                      type: 'bizFlowNode'
                    },
                    defaultEdge: {
                      type: 'bizFlowEdge'
                    }
                  }}
                />
              </div>
            </Col>
            <Col flex="300px">
              <div className="detailpanel">
                <NodePanel />
                <EdgePanel />
                <MultiPanel />
                <CanvasPanel />
              </div>
            </Col>
          </Row>
          <EditableLabel />
        </GGEditor>
      </div>
    );
  }
}

export default App;
