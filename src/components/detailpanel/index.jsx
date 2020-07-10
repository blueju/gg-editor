/* eslint-disable no-invalid-this */

import React from 'react';
import { Card, Form, Input } from 'antd';
import { DetailPanel, withEditorContext } from 'gg-editor';

const { Item } = Form;
const formItemLayout = {
  layout: 'vertical'
};

class Panel extends React.Component {
  formRef = React.createRef();
  handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    // 表单验证
    this.formRef.current
      .validateFields()
      .then((values) => {
        const { type, nodes, edges, executeCommand } = this.props;
        const item = type === 'node' ? nodes[0] : edges[0];
        if (!item) {
          return;
        }
        executeCommand('update', {
          id: item.get('id'),
          updateModel: {
            ...values
          }
        });
      })
      .catch((errorInfo) => {
        throw new Error(errorInfo);
      });
  };

  // 渲染节点详情
  renderNodeDetail = () => {
    setTimeout(() => {
      const { label } = this.props.nodes[0].getModel();
      this.formRef.current.setFieldsValue({
        label
      });
    });
    return (
      <Form ref={this.formRef} {...formItemLayout}>
        <Form.Item label="Label" name="label">
          <Input onBlur={this.handleSubmit} value="dwadwad" />
        </Form.Item>
      </Form>
    );
  };

  // 渲染边详情
  renderEdgeDetail = () => {
    setTimeout(() => {
      const { label } = this.props.edges[0].getModel();
      this.formRef.current.setFieldsValue({
        label
      });
    });
    return (
      <Form ref={this.formRef} {...formItemLayout}>
        <Item label="Label" name="label">
          <Input onBlur={this.handleSubmit} />
        </Item>
      </Form>
    );
  };

  // 渲染多选详情
  renderMultiDetail = () => {
    return null;
  };

  // 渲染画布详情
  renderCanvasDetail = () => {
    return <p>Select a node or edge 🤣</p>;
  };

  render() {
    const { type } = this.props;
    return (
      <Card title={type} bordered={false}>
        {type === 'node' && this.renderNodeDetail()}
        {type === 'edge' && this.renderEdgeDetail()}
        {type === 'multi' && this.renderMultiDetail()}
        {type === 'canvas' && this.renderCanvasDetail()}
      </Card>
    );
  }
}

// const WrappedPanel = Form.create({
//   mapPropsToFields(props) {
//     const { type, nodes, edges } = props;
//     let label = '';
//     if (type === 'node') {
//       label = nodes[0].getModel().label;
//     }
//     if (type === 'edge') {
//       label = edges[0].getModel().label;
//     }
//     return {
//       label: Form.createFormField({
//         value: label
//       })
//     };
//   }
// })(withEditorContext(Panel));

// 分别是：节点详情面板、边详情面板、多选详情面板、画布详情面板
export const NodePanel = DetailPanel.create('node')(withEditorContext(Panel));
export const EdgePanel = DetailPanel.create('edge')(withEditorContext(Panel));
export const MultiPanel = DetailPanel.create('multi')(withEditorContext(Panel));
export const CanvasPanel = DetailPanel.create('canvas')(withEditorContext(Panel));
