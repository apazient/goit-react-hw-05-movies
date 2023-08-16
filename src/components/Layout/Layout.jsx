import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <WrapperOutlet>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-column: 1fr;
`;
const WrapperOutlet = styled.div`
  padding: 20px;
  padding-top: 70px;
`;
