import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Button = styled.button`
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    background-image: none;
    border: 0;
    white-space: nowrap;
    border-radius: 20px;
    user-select: none;
    cursor: pointer;
    padding: 12px 16px 13px;
    color: ${theme.white};
    background-color: ${theme.primary};
    transition: all 0.2s;
    line-height: 1;
    font-size: ${theme.baseFontSize};
    font-weight: ${theme.bold};
    outline: 0 none;
`;