import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import '@ant-design/v5-patch-for-react-19'; 

// 路由
import { RouterProvider } from 'react-router-dom';
import router from '@/router/index'

// redux
import { Provider } from 'react-redux';
// @/store/index.js
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

