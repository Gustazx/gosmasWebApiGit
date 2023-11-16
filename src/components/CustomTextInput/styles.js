import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#956b6b",
  fontFamily: "OpenSans-Regular",
})`
  border: 2px solid ${(props) => (props.error ? " #FF7272" : "#808080")};
  flex: 1;
  border-radius: 10px;
  padding: 15px 15px;
  background-color: #fff;
`;
