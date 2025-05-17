import {useState} from 'react';
import { TextInput,Pressable, View, Text, StyleSheet, FlatList } from 'react-native';

export default function Create({data,setStockData}) {
  const [itemName, setItemName] = useState('');
  const [stockAmount, setStockAmount] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId , setEditItemId] = useState(null);



  const addItemHandler = ()=>{
    setIsEdit(false)
    const newItem ={
      id:Date.now(),
      name:itemName,
      stock: stockAmount
    }
    setStockData([...data, newItem])
    setItemName('');
    setStockAmount('');

  }

  const deleteItemHandler =(id)=>{
    console.log(id)
    setStockData(data.filter((item)=> item.id !== id))
  }

  const editItemHandler = (item)=>{
    setIsEdit(true)
    setItemName(item.name);
    setStockAmount(item.stock);
    setEditItemId(item.id);
  }

  const updateItemHandler = () =>{
    setStockData(data.map((item)=>(
      item.id === editItemId ? {...item,name:itemName, stock:stockAmount }:item
    )))
    setIsEdit(false)
  }

  return (
    <>   
    <View style={{flex: 1}}>
  <View style={styles.safeArea}>
    <TextInput
      placeholder="Enter an item name..."
      placeholderTextColor="#999"
      style={styles.input}
      value={itemName}
      onChangeText={(item) => setItemName(item)}
    />
    <TextInput
      placeholder="Enter stock amount..."
      placeholderTextColor="#999"
      style={styles.input}
      value={stockAmount}
      onChangeText={(item) => setStockAmount(item)}
    />
  </View>

  <Pressable style={styles.addbutton} onPress={() => isEdit ? updateItemHandler() : addItemHandler()}>
    <Text style={styles.btnText}>{isEdit ? "EDIT ITEM IN STOCK" : "ADD ITEM IN STOCK"}</Text>
  </Pressable>

  <View style={{flex: 1, marginTop: 11}}>
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>All Items in the stock</Text>
    </View>

    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? "#FFCCCC" : "#D7F6BFFF" }]}>
          <Text style={styles.itemHeadingText}>{item.name}</Text>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <Text style={styles.itemHeadingText}>{item.stock}</Text>
            <Pressable onPress={() => editItemHandler(item)}>
              <Text style={styles.itemText}>Edit</Text>
            </Pressable>
            <Pressable onPress={() => deleteItemHandler(item.id)}>
              <Text style={styles.itemText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      )}
      contentContainerStyle={{ gap: 10, paddingBottom: 100 }}
    />
  </View>
</View>

    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingVertical:'4%',
    gap:10,
    backgroundColor: '#dadada',
  },
  input: {
    borderWidth:2,
    borderColor:'#9EB8A0',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7

  },
  addbutton:{
    backgroundColor:'#CABFFFFF',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center'
  },
  btnText:{
    color:'white',
    fontWeight:'bold',
    fontSize:15
  },
  headingContainer: {
    paddingHorizontal: 15,
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    marginVertical:10,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  itemContainer:{
    paddingHorizontal: 15,
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius:7,
  },
  itemHeadingText:{
    fontWeight: '400',
    fontSize: 16,
    color: '#333',
  }
});
