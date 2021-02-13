import { ItemPanel, Item } from 'gg-editor';

export default () => {
  return (
    <ItemPanel
      style={{
        borderRight: '1px solid #eee',
      }}
    >
      <Item
        model={{
          type: 'circle',
          size: 80,
          label: 'circle',
        }}
      >
        <img
          alt="圆"
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
          label: 'bizFlowNode',
        }}
      >
        <img
          alt="矩形"
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
          label: 'rect',
        }}
      >
        <img
          alt="矩形"
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
          label: 'ellipse',
        }}
      >
        <img
          alt="椭圆"
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
          label: 'diamond',
        }}
      >
        <img
          alt="菱形"
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
          label: 'triangle',
        }}
      >
        <img
          alt="三角形"
          src="https://gw.alicdn.com/tfs/TB12sC2nKH2gK0jSZJnXXaT1FXa-126-156.png"
          width="90"
          height="90"
          draggable={false}
        />
      </Item>
    </ItemPanel>
  );
};
