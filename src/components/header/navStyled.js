import styled from "styled-components";

export const Nav = styled.nav`
  height: 7.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  //menu toggle
  .menu-toggle {
    color: #fff;
    font-size: 2.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2.5rem;
    cursor: pointer;
    z-index: 1500;

    .fa-times {
      display: none;
    }

    //toggle display on icons
    ${({ toggled }) =>
      toggled &&
      `.fa-times {
        display: block
      }
    `}
    ${({ toggled }) =>
      toggled &&
      `.fa-bars {
        display: none
      }
    `}
  }

  //nav::before
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.5s;

    //toggle opactiy on psuedo selector
    ${({ toggled }) =>
      toggled &&
      `&{
        opacity: 1;
        transform: scale(1);
      }
    
    `}
  }

  // nav-list
  .nav-list {
    list-style: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100vh;
    background-color: #252525;
    padding: 4.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1250;
    transform: translateX(-100%);
    transition: transform 0.5s;

    //toggle open class
    ${({ toggled }) =>
      toggled &&
      `& {
        transform: translateX(0);
      }
    `}
  }
`;
