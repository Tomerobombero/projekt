import { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import SumaVydavkov from "./SumaVydavkov";
import ZoznamVydavkov from "./ZoznamVydavkov";

import { GlobalStyles } from "../constant/styles";

export default function ZobrazenieVydavkov({ vydavky, pocetDniVydavkov }) {
  const [hladanyText, setHladanyText] = useState("");


  const filtrovanéVydavky = vydavky.filter((vydavok) => {
    return vydavok.popis.toLowerCase().includes(hladanyText.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <SumaVydavkov vydavky={filtrovanéVydavky} pocetDni={pocetDniVydavkov} />

      
      <TextInput
        style={styles.vyhladavanie}
        placeholder="Vyhľadať výdavok..."
        placeholderTextColor={GlobalStyles.colors.primary100}
        value={hladanyText}
        onChangeText={setHladanyText}
      />

      <ZoznamVydavkov vydavky={filtrovanéVydavky} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  vyhladavanie: {
    backgroundColor: "white",
    color: "black",
    padding: 12,
    borderRadius: 8,
    marginVertical: 12,
    fontSize: 16,
  },
});