import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#956b6b",
  fontFamily: "OpenSans-Regular",
})`
  border-width: ${(props) => (props.error ? "2px" : "0px")};
  border-color: ${(props) => (props.error ? "#FF7272" : "black")};
  flex: 1;
  border-radius: 10px;
  padding: 15px 15px;
  background-color: #fff;
`;
