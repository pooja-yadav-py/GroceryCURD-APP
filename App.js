import { SafeAreaView, StyleSheet,  } from 'react-native';
import HomeScreen from './components/HomeScreen';


export default function App() {
  return (
    <>      
      <SafeAreaView style={styles.safeArea}>
        <HomeScreen />
        </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#dadada',
  },
});
