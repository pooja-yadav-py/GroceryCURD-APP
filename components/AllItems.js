import { SafeAreaView, FlatList, View, Text, StyleSheet, StatusBar } from 'react-native';


export default function AllItems({data}) {
  return (
         
      <View >
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> (
          <View style={[styles.itemContainer, {backgroundColor: item.stock< 20? "#FFCCCC":"#D7F6BFFF"}]}>
            <Text style={styles.itemHeadingText}>{item.name}</Text>
            <Text style={styles.itemHeadingText}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle = {{gap:10}}
      ></FlatList>
    </View>
      
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    paddingHorizontal: 15,
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
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
