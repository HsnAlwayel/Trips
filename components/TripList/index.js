import React from "react";
import { View, Text } from "react-native";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { Content, List } from "native-base";
import { observer } from "mobx-react";
import trip from "../../data";
const TripList = () => {
  //
  const listoftrips = tripStore.trips.map((item) => (
    <TripItem trip={item} key={item.id} />
  ));

  return (
    <Content>
      <List>{listoftrips}</List>
    </Content>
  );
};

export default observer(TripList);
