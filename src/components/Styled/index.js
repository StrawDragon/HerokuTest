import styled, { keyframes } from "styled-components";

export const Title = styled.span`
  margin: 1rem 0;
  color: ${({ theme }) => theme.palette.components.content.contentTextColor};
  font-size: ${({ theme }) => theme.options.sizes.fontSize.subtitleFontSize};
  font-weight: bold;
  @media (max-width: 1700px) {
    font-size: 42px;
  }
  @media (max-width: 1400px) {
    font-size: 32px;
  }
`;

export const Description = styled.div`
  margin: 1rem 0;
  color: ${({ theme }) => theme.palette.components.content.contentTextColor};
  font-size: ${({ theme }) => theme.options.sizes.fontSize.cardTitleFontSize};
  @media (max-width: 1700px) {
    font-size: 24px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  margin: 2rem 0;
  border: 2px solid ${({ theme }) => theme.palette.borderColor};
  box-sizing: border-box;
  color: ${({ theme }) => theme.palette.components.content.contentTextColor};
  padding: 5px;
  width: 200px;
  height: 55px;
  background: ${({ theme }) => theme.palette.backgroundColor};
  font-size: ${({ theme }) => theme.options.sizes.fontSize.buttonFontSize};
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  border-radius: 30px;
  transition: 0.3s;
  :hover {
    background-color: ${p => p.theme.palette.brand.secondaryColor};
    color: ${p => p.theme.palette.brand.primaryColor};
  }
  :active {
    transform: scale(0.97);
  }
`;

export const Information = styled.div`
  background-color: ${p => p.theme.palette.brand.primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: auto;
  flex-wrap: wrap;
  padding: 0 7rem;
  @media (max-width: 1400px) {
    padding: 0 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const appearanceRight = keyframes`
   0% {
      transform: translateX(150px);
      opacity: 0.1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
`;
export const disappearanceRight = keyframes`
   0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(150px);
      opacity: 0.1;
    }
`;

export const appearanceLeft = keyframes`
  0% {
      transform: translateX(-150px);
      opacity: 0.1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
`;

export const disappearanceLeft = keyframes`
   0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-150px);
      opacity: 0.1;
    }
`;
export const toogleScroll = keyframes`
    0% {
        transform: translateY(0);
        }
    50% {
        transform: translateY(20px);
        }
    100% {
        transform: translateY(0);
        }
`;
export const disappearanceBottom = keyframes`
    0% {
        transform: translateY(0);
}
    100% {
        transform: translateY(150px);
        opacity: 0;
}
`;
