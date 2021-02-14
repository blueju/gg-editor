import { Row, Col } from 'antd';
// 导入编辑器
import GGEditor from 'gg-editor';

// 工具栏
import Toolbar from '../components/Toolbar';
// 流程图
import Flow from '../components/Flow';
// 元素面板
import ItemPanel from '../components/ItemPanel';
// 右键菜单
import ContextMenu from '../components/ContextMenu';

export default function IndexPage() {
  return (
    <GGEditor>
      <Row>
        <Col span={24}>
          <Toolbar />
        </Col>
      </Row>
      <Row>
        <Col flex="160px">
          <ItemPanel />
        </Col>
        <Col flex="auto">
          <Flow />
        </Col>
        {/* <Col></Col> */}
      </Row>
      {/* 布局之外的东西 */}
      <ContextMenu />
    </GGEditor>
  );
}
