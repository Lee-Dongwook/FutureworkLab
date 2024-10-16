'use client';

import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import useWindowWidth from '@/hooks/useWindowWidth';
import { theme } from '@/styles';

const FooterComponent = () => {
  const width = useWindowWidth();

  const year = new Date().getFullYear();

  return (
    <Footer>
      <Content>
        <Copyright>
          ©{year} Copyright FutureWorkLab {width < 700 ? <br /> : ' '}
          ALL RIGHTS RESERVED.
        </Copyright>
        <LinkWrapper>
          <Link href="/policy/privacy">개인정보처리방침</Link>
          <Link href="/about/location">찾아오시는 길</Link>
        </LinkWrapper>
      </Content>
    </Footer>
  );
};

export default FooterComponent;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${theme.color.black};
  padding: 3.75rem 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100rem;

  @media ${theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${theme.breakPoint['1024']} {
    width: calc(100vw - 10rem);
  }
`;

const Copyright = styled.p`
  ${theme.typo.h5}
  font-weight: 400;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    ${theme.typo.h5}
    font-weight: 700;
  }

  @media ${theme.breakPoint['1024']} {
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
  }
`;
