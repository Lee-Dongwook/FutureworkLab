'use client';

import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import { theme } from '@/styles';

interface HamburgerMenuComponentProps {
  isOpen: boolean;
  handleClose: () => void;
}

const HamburgerMenuComponent = ({ isOpen, handleClose }: HamburgerMenuComponentProps) => {
  return (
    <>
      <HamburgerBackground onClick={handleClose} isOpen={isOpen}>
        <HamburgerMenu isOpen={isOpen}>
          <HamburgerCloseButton onClick={handleClose}>Close</HamburgerCloseButton>
        </HamburgerMenu>
        <HamburgerNav>
          <HamburgerLink href="/">Home</HamburgerLink>
          <HamburgerLink href="/about">About</HamburgerLink>
        </HamburgerNav>
      </HamburgerBackground>
    </>
  );
};

export default HamburgerMenuComponent;

const HamburgerBackground = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: ${theme.color.black};
  position: absolute;
  z-index: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const HamburgerMenu = styled.div<{ isOpen: boolean }>`
  width: 25rem;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? 0 : '-25rem')};
  background: ${theme.color.white};
  z-index: 1;
  padding-top: 5rem;
  padding-left: 5rem;
  transition: right 0.3s ease-in-out;
`;

const HamburgerNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: ${theme.color.background};
  position: relative;
  z-index: 2;

  a {
    ${theme.typo.h2};
    flex-grow: 0;
    font-weight: 700;
  }
`;

const HamburgerLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const HamburgerCloseButton = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  z-index: 3;
`;
