import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const LoginLayout = () => {
  return (
    <Layout className="App" style={{ backgroundColor: 'white' }}>
      <header
        style={{
          height: '54px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <h1 style={{ width: '254px', paddingLeft: '22px', marginTop: '1em' }}>
        </h1>
      </header>
      <section>
        <div className="login__body">
          <Outlet />
        </div>
      </section>
      <footer
        style={{
          position: 'fixed',
          bottom: '0',
          width: '100vw',
          height: '61px',
        }}
      ></footer>
    </Layout>
  );
};
