import styled from "styled-components";
import { Select } from "antd";
import "antd/dist/antd.css";
const { Option } = Select;
/*
Certain styles are flagged as !important
since we're overriding default antd properties
*/
export const StyledSelect = styled(Select)`
  .ant-select-selector {
    background-color: #01345b !important;
    color: white !important;
    height: 35px !important;
    font-weight: 600;
    font-weight: 1000 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none !important;
  }
  .anticon > svg:nth-child(1) {
    color: white;
    height: 10px;
  }
  .ant-select-selection-item {
    font-weight: 600;
    font-size: 0.9em;
  }
`;

export const StyledOption = styled(Option)``;
