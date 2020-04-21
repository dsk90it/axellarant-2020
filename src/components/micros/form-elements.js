import { theme, clearFix } from "../../styles/theme";
import styled, {css} from "styled-components";

export const FormControl = styled.input`
  background: ${theme.white};
  border: 1px solid ${theme.white};
  border-radius: 2px;
  width: 100%;
  min-height: 40px;
  padding: 8px 16px;
  display: block;
  outline: 0 none;
  font-family: ${theme.fontDefault};
  font-size: 13px;
  line-height: 18px;

  /* placeholder */
  ::placeholder, ::-webkit-input-placeholder {
    color: #777777;
  }
  :-ms-input-placeholder {
    color: #777777;
  }

  /* success field */
  ${props => props.success && css` border-color: green!important;` }
  /* error field */
  ${props => props.error && css` border-color: red!important;`}
  /* warning field */
  ${props => props.warning && css` border-color: orange !important; `}
`;

export const FormGroup = styled.div`
    ${clearFix};
    width: 100%;
    margin-bottom: 16px;
`;