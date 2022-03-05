import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    border: 2px black solid;
    margin-top: 8px;
`

export const FlexItem = styled.div`
    flex: 0 0 auto;
`

export const List = styled.ul`
    list-style-type: none;
`
