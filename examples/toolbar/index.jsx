// 导入编辑器、流程图
import GGEditor, { Flow } from 'gg-editor';
// 字体图标
import 'font-awesome/css/font-awesome.min.css';

// 工具栏
import Toolbar from './toolbar.jsx';

/**
 * 图数据
 */
const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 50,
      y: 50,
    },
    {
      id: '1',
      label: 'Node',
      x: 50,
      y: 200,
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      sourceAnchor: 1,
      target: '1',
      targetAnchor: 0,
    },
  ],
};

export default () => {
  return (
    <GGEditor>
      {/* 工具栏 */}
      <Toolbar />
      {/* 流程图， */}
      <Flow
        data={data}
        style={{
          height: 500,
        }}
      />
    </GGEditor>
  );
};
