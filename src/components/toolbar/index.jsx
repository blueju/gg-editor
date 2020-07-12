import { Command, constants } from 'gg-editor';
import { Tooltip } from 'antd';
import React from 'react';

const { EditorCommand } = constants;

function Toolbar() {
  return (
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
      <Command name={EditorCommand.ZoomOut}>
        <Tooltip title="放大">
          <i className="fa fa-search-plus" />
        </Tooltip>
      </Command>
      <Command name={EditorCommand.ZoomIn}>
        <Tooltip title="缩小">
          <i className="fa fa-search-minus" />
        </Tooltip>
      </Command>
    </div>
  );
}

export default Toolbar;
