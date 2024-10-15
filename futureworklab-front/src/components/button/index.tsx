/** @jsxImportSource @emotion/react */
import React, { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isLoading?: boolean;
  width?: string;
  backgroundColor?: string;
  fontColor?: string;
  hoverBackgroundColor?: string;
  position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky';
  bottom?: string;
}

const Button = ({
  children = '',
  isLoading = false,
  width,
  backgroundColor,
  fontColor,
  hoverBackgroundColor,
  position,
  bottom,
  disabled,
  ...attributes
}: ButtonProps) => {
  return (
    <ButtonStyle
      css={css`
        width: ${width};
        background: ${backgroundColor};
        color: ${fontColor};
        position: ${position};
        bottom: ${bottom};
        :hover {
          background: ${hoverBackgroundColor};
        }
        :disabled {
          background: ${isLoading && (backgroundColor || '#050505')};
        }
      `}
      disabled={disabled || isLoading}
      {...attributes}
    >
      {isLoading ? <p>Loading...</p> : children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  width: 20rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: #eeeeee;
  border-radius: 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  :hover {
    background: #cccccc;
    transition: background 0.3s ease-in-out;
  }
  :disabled {
    background: #dcdcdc;
    pointer-events: none;
  }
`;
