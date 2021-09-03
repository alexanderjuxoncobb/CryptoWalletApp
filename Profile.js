import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../constants";

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <Text style={{ flex: 1, color: COLORS.white, margin: 50 }}>Profile</Text>
    </View>
  );
};

export default Profile;
