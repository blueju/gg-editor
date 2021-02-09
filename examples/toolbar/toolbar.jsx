// 导入命令、常量
import { Command, constants } from 'gg-editor';
// 导入样式
import styles from './toolbar.less';

// 解构赋值编辑器命令
const { EditorCommand } = constants;

export default () => {
  return (
    <div className={styles.toolbar}>
      <Command name={EditorCommand.Undo}>
        <i className="fa fa-undo" title="撤销" />
      </Command>
      <Command name={EditorCommand.Redo}>
        <i className="fa fa-repeat" title="重做" />
      </Command>
      <Command name={EditorCommand.Remove}>
        <i className="fa fa-trash-o" title="删除" />
      </Command>
      <Command name={EditorCommand.ZoomIn}>
        <i className="fa fa-search-plus" title="放大" />
      </Command>
      <Command name={EditorCommand.ZoomOut}>
        <i className="fa fa-search-minus" title="缩小" />
      </Command>
    </div>
  );
};
