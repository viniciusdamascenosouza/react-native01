import React from "react";
import { Text, View } from "react-native";

export default function ResultImc(props) {
  return (
    <View>
      <Text>{props.messageResultImc}</Text>
      <Text>{props.ResultImc}</Text>
    </View>
  );
}
