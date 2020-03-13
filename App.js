import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

import axios from "axios"

export default function App() {
  const [htmlString, setHtmlString] = React.useState("Loading...");

  async function loadGraphicCards(page = 1) {
    setHtmlString("Fetching...");
    
    const searchUrl = `https://www.amazon.de/s/?page=${page}&keywords=graphic+card`;
    axios.get(searchUrl, {
      headers: {
        mode: 'no-cros',
        'cache-control': 'no-cache'
      }
    }).then((response) => {
      console.log(response);
    }).catch((e) => {
      console.log(e);
    });

   

  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Open...</Text>
        <Text>{htmlString}</Text>
        <Button
          style={styles.button}
          title="Fetch Button"
          onPress={e => loadGraphicCards(2)}
        />
        <Button
          style={styles.button}
          title="Refresh"
          onPress={e => setHtmlString("Loading...")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
    marginHorizontal: 16,
    backgroundColor: "#fff"
  },
  button: {
    marginTop: 12
  }
});
