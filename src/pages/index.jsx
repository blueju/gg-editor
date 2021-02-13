import { Row, Col } from 'antd';
// 导入编辑器
import GGEditor from 'gg-editor';

// 工具栏
import Toolbar from '../components/Toolbar';
// 流程图
import Flow from '../components/Flow';

export default function IndexPage() {
  return (
    <GGEditor>
      <Row>
        <Col span={24}>
          <Toolbar />
        </Col>
      </Row>
      <Row>
        {/* <Col flex={300}></Col> */}
        <Col span={24}>
          <Flow />
        </Col>
        {/* <Col></Col> */}
      </Row>
    </GGEditor>
  );
}
