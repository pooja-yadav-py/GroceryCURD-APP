import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import AllItems from './AllItems';
import Create from './Create';

const Data =  [
  {id:1, name: "Wheat", stock: 10, unit: "kg"},
  {id:2, name: "Besan", stock: 5, unit: "kg"},
  {id:3, name: "Daal", stock: 55, unit: "kg"},
  {id:4, name: "Basmati Rice", stock: 15, unit: "kg"},
  {id:5, name: "Mix Wheat", stock: 5, unit: "kg"},
  // {id:6, name: "Salt", stock: 15, unit: "kg"},
  // {id:7, name: "Aata", stock: 25, unit: "kg"},
  // {id:8, name: "Rice", stock: 5, unit: "kg"},
  // {id:9, name: "Chole", stock: 45, unit: "kg"},
  // {id:10, name: "Masala", stock: 65, unit: "kg"},

  ]

const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [stockData,setStockData] = useState(Data)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.btncontainer}>
        <Pressable 
        style={[styles.button, view === 0 ? {backgroundColor:"#72C37AFF"}:null]}
        onPress={() => setView(0)}>
          <Text 
          style={[styles.btnText, view === 0 ? {color:"white"}:null]}
          >All Items</Text>
        </Pressable>

        <Pressable 
          style={[styles.button, view === 1 ? {backgroundColor:"#72C37AFF"}:null]}
          onPress={() => setView(1)}>
          <Text 
          style={[styles.btnText, view === 1 ? {color:"white"}:null]}
          >Low Stocks</Text>
        </Pressable>

        <Pressable 
          style={[styles.button, view === 2 ? {backgroundColor:"#72C37AFF"}:null]}
          onPress={() => setView(2)}>
          <Text 
          style={[styles.btnText, view === 2 ? {color:"white"}:null]}
          >Create</Text>
        </Pressable>
      </View>

      <View style={styles.content}>
        {view === 0 && <AllItems data={stockData} />}
        {view === 1 && <AllItems data={stockData.filter((item) => item.stock < 20)} />}
        {view === 2 && <Create data={stockData} setStockData={setStockData} />}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    // backgroundColor: '#ffffff',
    padding: '4%',
    paddingTop: '10%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  btncontainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#72C37AFF',
  },
  btnText: {
    color: 'green',
    fontWeight: '600',
    fontSize: 12,
  },
  
  content: {
    flex: 1,
  },
});
