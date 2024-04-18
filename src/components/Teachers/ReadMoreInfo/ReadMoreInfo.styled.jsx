import styled from "styled-components";

export const AddInfoContainer = styled.div`
    margin-top: 16px;
    cursor: pointer;

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: var(--dark-color);
        animation: appearRight 1000ms ease 1;
    }

    @keyframes appearRight {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0%);
        }
    }
`