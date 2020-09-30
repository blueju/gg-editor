import React from 'react';
import { Command, constants } from 'gg-editor';
import './index.scss';

const { EditorCommand } = constants;

function Toolbar() {
  return (
    <div className="toolbar">
      <Command name={EditorCommand.Undo}>
        <i className="fa fa-undo" title="撤销" />
      </Command>
      <Command name={EditorCommand.Redo}>
        <i className="fa fa-repeat" title="重做" />
      </Command>
      <Command name={EditorCommand.Remove}>
        <i className="fa fa-trash-o" title="删除" />
      </Command>
      <Command name={EditorCommand.ZoomOut}>
        <i className="fa fa-search-plus" title="放大" />
      </Command>
      <Command name={EditorCommand.ZoomIn}>
        <i className="fa fa-search-minus" title="缩小" />
      </Command>
    </div>
  );
}

export default Toolbar;
