'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import HamburgerMenuComponent from '@/components/HamburgerMenu';
import useScrollTop from '@/hooks/useScrollTop';
import useWindowWidth from '@/hooks/useWindowWidth';
import { theme } from '@/styles';

const HeaderComponent = () => {
  useScrollTop();

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState<boolean>(false);

  const windowWidth = useWindowWidth();

  const isMobile = windowWidth <= 600;

  useEffect(() => {
    if (isMobile) setIsHamburgerMenuOpen(true);
  }, [isMobile]);

  return (
    <Header>
      <Inner>
        <h1>
          <LogoLink href="/"></LogoLink>
        </h1>
        {isMobile ? (
          <HamburgerButton onClick={() => setIsHamburgerMenuOpen(true)}></HamburgerButton>
        ) : (
          <Nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </Nav>
        )}
      </Inner>
      {isMobile && (
        <HamburgerMenuComponent
          isOpen={isHamburgerMenuOpen}
          handleClose={() => setIsHamburgerMenuOpen(false)}
        />
      )}
    </Header>
  );
};

export default HeaderComponent;

const Header = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 5rem;
  transition: background 0.3s;
  background: ${theme.color.white};
`;

const Inner = styled.div`
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

const LogoLink = styled(Link)`
  display: block;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  transition: color 0.3s;
  color: ${theme.color.textPrimary};
  a {
    ${theme.typo.body1}
  }
`;

const HamburgerButton = styled.button`
  svg {
    display: block;
  }
`;
