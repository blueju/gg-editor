import React from 'react';
import ReactDOM from 'react-dom';

import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import App from './views/App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
