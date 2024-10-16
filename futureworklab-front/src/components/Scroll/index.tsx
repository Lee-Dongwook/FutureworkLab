'use client';

import React from 'react';
import styled from '@emotion/styled';

import { theme } from '@/styles';

interface ScrollProps {
  isScroll: boolean;
}

const ScrollComponent = ({ isScroll }: ScrollProps) => {
  return (
    <ScrollWrapper isScroll={isScroll}>
      <ScrollTitle>Scroll down to view more content</ScrollTitle>
    </ScrollWrapper>
  );
};

export default ScrollComponent;

const ScrollWrapper = styled.div<{ isScroll: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  animation: motion 1s linear 0s infinite alternate;
  position: absolute;
  bottom: ${({ isScroll }) => (isScroll ? '4rem' : '2rem')}
  left: 50%
  color: ${({ isScroll }) => (isScroll ? theme.color.white : theme.color.black)};

  path {
    stroke: ${({ isScroll }) => (isScroll ? theme.color.white : '')};
    fill: ${({ isScroll }) => (isScroll ? theme.color.white : '')};
  }

  @keyframes motion {
    0% {
        transform: translate(-50%, 0.625rem)
    }
    100% {
        transform: translate(-50%, 0);
    }
  }
`;

const ScrollTitle = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1rem;
`;
