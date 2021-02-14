import { Menu } from 'antd';
// 导入快捷菜单
import { ContextMenu, Command, constants } from 'gg-editor';

// 解构赋值编辑器命令
const { EditorCommand } = constants;

export default () => {
  return (
    <>
      {/* 右击画布时才显示的菜单 */}
      <ContextMenu
        type="canvas"
        renderContent={(item, position, hide) => {
          const { x: left, y: top } = position;
          return (
            <div style={{ position: 'absolute', top, left }}>
              <Menu
                mode="vertical"
                selectable={false}
                onClick={hide}
                style={{
                  border: '1px solid #f0f0f0',
                }}
              >
                <Menu.Item>
                  <Command name={EditorCommand.Undo}>撤销</Command>
                </Menu.Item>
                <Menu.Item>
                  <Command name={EditorCommand.Redo}>重做</Command>
                </Menu.Item>
                <Menu.Item>
                  <Command name={EditorCommand.PasteHere}>粘贴</Command>
                </Menu.Item>
              </Menu>
            </div>
          );
        }}
      />
      {/* 右击节点时才显示的菜单 */}
      <ContextMenu
        type="node"
        renderContent={(item, position, hide) => {
          const { x: left, y: top } = position;
          return (
            <div style={{ position: 'absolute', top, left }}>
              <Menu mode="vertical" selectable={false} onClick={hide}>
                <Menu.Item>
                  <Command name={EditorCommand.Copy}>复制</Command>
                </Menu.Item>
                <Menu.Item>
                  <Command name={EditorCommand.Remove}>删除</Command>
                </Menu.Item>
              </Menu>
            </div>
          );
        }}
      />
      {/* 右击边时才显示的菜单 */}
      <ContextMenu
        type="edge"
        renderContent={(item, position, hide) => {
          const { x: left, y: top } = position;
          return (
            <div style={{ position: 'absolute', top, left }}>
              <Menu mode="vertical" selectable={false} onClick={hide}>
                <Menu.Item>
                  <Command name={EditorCommand.Remove}>删除</Command>
                </Menu.Item>
              </Menu>
            </div>
          );
        }}
      />
    </>
  );
};
