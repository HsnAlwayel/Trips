import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  AddButtonStyled,
  AddButtonText,
  AddModalContainer,
  AddTextInput,
} from "./styles";
import tripStore from "../../stores/tripStore";
import authStore from "../../stores/authStore";
import { TouchableOpacity } from "react-native-gesture-handler";

const UpdateButton = ({ trip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [oldTrip, setOldTrip] = useState(trip);

  const submitTrip = () => {
    tripStore.updateTrip(oldTrip);
    closeModal();
  };
  const handleUpdate = () => {
    if (authStore.user.id === trip.userId) {
      openModal();
    } else {
      alert("Un-Authorized!");
    }
  };
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <AddModalContainer>
          <AddTextInput
            onChangeText={(title) => setOldTrip({ ...oldTrip, title })}
            placeholder={trip.title}
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddTextInput
            onChangeText={(details) => setOldTrip({ ...oldTrip, details })}
            placeholder={trip.details}
            placeholderTextColor="#A6AEC1"
          ></AddTextInput>
          <AddTextInput
            onChangeText={(image) => setOldTrip({ ...oldTrip, image })}
          ></AddTextInput>
          <AddButtonStyled onPress={submitTrip}>
            <AddButtonText>Submit</AddButtonText>
          </AddButtonStyled>
        </AddModalContainer>
      </Modal>
      <TouchableOpacity onPress={handleUpdate}>
        <Icon name="edit" size={20} style={{ padding: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

export default UpdateButton;
