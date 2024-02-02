import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Header from "./src/components/Header"
import Search from "./src/components/Search"
import MessagesContainer from "./src/components/MessagesContainer"

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.flex1Container}>
        <Header/>
      </View>

      <View style={styles.flex1Container}>
        <Search/>
      </View>

        <View style={styles.MessagesContainer}>
            <MessagesContainer/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column",
      justifyContent:"flex-start"
  },

  flex1Container:{
    flex:1
  },

    MessagesContainer:{
        flex:8,
    }

});
