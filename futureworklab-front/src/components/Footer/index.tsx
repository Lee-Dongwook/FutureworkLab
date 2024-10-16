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
  padding: 2.5rem 1rem;
  color: ${theme.color.white};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  padding: 0 2rem;

  @media ${theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${theme.breakPoint['1024']} {
    width: calc(100vw - 10rem);
  }
`;

const Copyright = styled.p`
  ${theme.typo.h4}
  font-weight: 400;
  color: ${theme.color.white};
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    ${theme.typo.h5}
    font-weight: 700;
    color: ${theme.color.white};
    text-decoration: none;

    &:hover {
      color: ${theme.color.primary};
    }
  }

  @media ${theme.breakPoint['1024']} {
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;
