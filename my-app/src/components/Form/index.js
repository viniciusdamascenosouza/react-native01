import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc(
        (
          (weight.replace(",", ".") * 1) /
          (height.replace(",", ".") * 1 * (height.replace(",", ".") * 1))
        ).toFixed(2)
      );
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu Imc é igual: ");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha peso e altura");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="75.365"
          keyboardType="numeric"
        />

        <Button
        onPress={() => validationImc()}
        title={textButton}
        />
      </View>
      <ResultImc messageResultImc={messageImc} ResultImc={imc} />
    </View>
  );
}
