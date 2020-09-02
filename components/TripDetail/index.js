import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Thumbnail, Card, CardItem, Body, Left } from "native-base";
import { TripName } from "./styles";
import profileStore from "../../stores/profileStore";
import { useNavigation } from "@react-navigation/native";
useNavigation;
const TripDetail = ({ route }) => {
  const { trip } = route.params;
  const profile = profileStore.getProfileById(trip.userId);
  const navigation = useNavigation();
  return (
    <View>
      {/* we can ditch the Card thing i was just testing it stylewise, we can make it a modal popup that is the detail page if you guys like that better, or whatever yall see fit */}
      {/* REVIEW: A reply to the comment above: in the detail page you're showing the trip's details, it might be a lot of text. I believe it would look better in it's own page. But it doesn't have to be a card */}
      <Card>
        <CardItem>
          <Left>
            {/* can add a thumbnail that displays user(profile pic) that made trip */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("OwnerProfile", { profile: profile })
              }
            >
              <Thumbnail
                source={{
                  uri: profile.image
                    ? profile.image
                    : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
                }}
              />
            </TouchableOpacity>
            {/* temp thumbnail to see how it would look */}
            <Body>
              <TripName>{trip.title}</TripName>
              {/* we can add a <Text note> trip location like how instagram adds geotags to pictures, in case the title doesnt include the country*/}
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: trip.image
                ? trip.image
                : "https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg",
            }}
            style={{ height: 200, width: null, flex: 1 }}
            // Inline styling?? Seriously?______ sorry It helps figure things out, we dont consider any of our styling final
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text note>{trip.details}</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

export default TripDetail;
