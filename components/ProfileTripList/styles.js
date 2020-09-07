import styled from "styled-components";
import { Card } from "native-base";
import { View, ImageBackground } from "react-native";

export const BoxListContainer = styled.View`
  width: 100%;
  height: 50%;
  padding: 5px;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
`;

export const BoxItemContainer = styled.View`
  width: 50%;
  height: 50%;
  padding: 5px;
`;

export const BoxItemImage = styled.Image`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const BoxItemText = styled.Text`
  color: black;
  font-weight: bold;
`;

export const Container = styled.View`
  height: 30%;
  background-color: #1b262c;
`;

export const DarkOVerlay = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 250px;
  background-color: #000;
  border-bottom-right-radius: 65px;
  opacity: 1;
`;

export const ImageOverlay = styled(ImageBackground)`
  width: 100%;
  height: 250px;
  border-bottom-right-radius: 65px;
  padding: 2px;
  margin: auto;
`;
