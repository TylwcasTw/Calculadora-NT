import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e7e7e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
