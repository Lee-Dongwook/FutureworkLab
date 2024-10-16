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
          <LogoLink href="/">FutureWorkLab</LogoLink>
        </h1>
        {isMobile ? (
          <HamburgerButton onClick={() => setIsHamburgerMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
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
  min-height: 4rem;
  transition: background 0.3s;
  background: ${theme.color.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 100rem;
  padding: 0 2rem;

  @media ${theme.breakPoint['1440']} {
    width: calc(100vw - 12.5rem);
  }

  @media ${theme.breakPoint['1024']} {
    width: calc(100vw - 10rem);
  }
`;

const LogoLink = styled(Link)`
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  color: ${theme.color.textPrimary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  transition: color 0.3s;
  color: ${theme.color.textPrimary};
  a {
    ${theme.typo.body1}
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  &:hover {
    color: ${theme.color.primary};
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    display: block;
    width: 2rem;
    height: 0.2rem;
    background-color: ${theme.color.textPrimary};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.color.primary};
    }
  }

  &:focus {
    outline: none;
  }
`;
