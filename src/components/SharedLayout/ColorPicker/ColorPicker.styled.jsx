import styled from "styled-components";

export const ChangeColorBtn = styled.button`
    outline: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        fill: var(--accent-color);
        stroke: var(--dark-color);
        stroke-width: .5px;
    }

    &:hover svg,
    &:focus svg {
        fill: var(--accent-light);
    }
`