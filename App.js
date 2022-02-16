import { useState } from "react";
import { 
  Button,
  FlatList,
  View,
  StyleSheet,} from 'react-native';

import InputGroup from "./components/InputGroup";
import Item from "./components/Item";

export default function App() {
	const [productList, setProductList] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const addProductHandler = (productName) => {
		if (productName != "") {
			setProductList((currentProductList) => [
				...currentProductList, 
				{key: Math.random().toString(), value: productName}]);
		} else {
			console.log("ERROR: No se ha introducido ningún producto.");
		}
		setShowModal(false);
	}

	const deleteProductHandler = (productKey) => {
		setProductList((currentProductList) => {
			return currentProductList.filter((product) => product.key != productKey);
		})
	}

  return (
	<View style={styles.container}>
		<Button title="Add" onPress={() => setShowModal(true)}/>
		<InputGroup addProductHandler={addProductHandler} addMode={showModal}/>

	  	<View style={styles.listContainer}>
	  		<FlatList data={productList} renderItem={itemData => (
			  	<Item value={itemData.item.value} onDelete={() => deleteProductHandler(itemData.item.key)}/>
  			)}/>
	  	</View>
	</View>
  );
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ccc",
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: "80%"
	},
	listContainer: {
		width: "100%",
		padding: 20
	}
});
