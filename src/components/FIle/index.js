import React from "react";
import {
  BodyRow,
  Container,
  HeaderRow,
  Name,
  Type,
  IconContainer,
} from "./styles";
import Octicons from "react-native-vector-icons/Octicons";
import { Buffer } from "buffer";

export default function File({ data }) {
  return (
    <Container>
      <HeaderRow>
        <Name>{data.name}</Name>
      </HeaderRow>
      <BodyRow>
        <Type>{data.type}</Type>
      </BodyRow>
      <IconContainer>
        <Octicons
          name={data.type == "file" ? "file" : "file-directory"}
          size={18}
        />
      </IconContainer>
    </Container>
  );
}

const code = Buffer.from(
  "aW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAicmVhY3QiOwpp\nbXBvcnQgUm91dGVzIGZyb20gIi4vc3JjL3JvdXRlcyI7CmltcG9ydCB7IFN0\nYXR1c0JhciwgVmlldyB9IGZyb20gInJlYWN0LW5hdGl2ZSI7CmltcG9ydCAi\ncmVhY3QtbmF0aXZlLWdlc3R1cmUtaGFuZGxlciI7CmltcG9ydCB7IHVzZUZv\nbnRzIH0gZnJvbSAiQGV4cG8tZ29vZ2xlLWZvbnRzL29wZW4tc2FucyI7Cgpl\neHBvcnQgZGVmYXVsdCBBcHAgPSAoKSA9PiB7CiAgY29uc3QgW2xvYWRlZF0g\nPSB1c2VGb250cyh7CiAgICAiT3BlblNhbnMtQm9sZCI6IHJlcXVpcmUoIi4v\nYXNzZXRzL2ZvbnRzL09wZW5TYW5zLUJvbGQudHRmIiksCiAgICAiT3BlblNh\nbnMtUmVndWxhciI6IHJlcXVpcmUoIi4vYXNzZXRzL2ZvbnRzL09wZW5TYW5z\nLVJlZ3VsYXIudHRmIiksCiAgfSk7CgogIGlmICghbG9hZGVkKSB7CiAgICBy\nZXR1cm4gPFZpZXcgLz47CiAgfQoKICByZXR1cm4gKAogICAgPD4KICAgICAg\nPFN0YXR1c0JhcgogICAgICAgIGJhY2tncm91bmRDb2xvcj0idHJhbnNwYXJl\nbnQiCiAgICAgICAgdHJhbnNsdWNlbnQKICAgICAgICBiYXJTdHlsZT0ibGln\naHQtY29udGVudCIKICAgICAgLz4KICAgICAgPFJvdXRlcyAvPgogICAgPC8+\nCiAgKTsKfTsK",
  "base64"
).toString("utf-8");
