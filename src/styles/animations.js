import { keyframes } from 'styled-components';

export const Fade = keyframes`
  0% {
    opacity: 0;
  };
  100% {
    opacity: 1;
  };
`;

export const Transform = keyframes`
  0% {
    transform: translateX(0);
  };
  100% {
    transform: translateX(-50%) rotate(-90deg) skew(10deg, 10deg);
  };
`;

export const FadeBottom = keyframes`
  0% {
    top: 0px;
    display: none;
  };
  100% {
    top: -20px;
    display: block;
  };
`;
