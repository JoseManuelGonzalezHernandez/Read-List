import { useState } from "react";
import { 
  Button,
  FlatList,
  View,
  StyleSheet,} from 'react-native';

import InputGroup from "./components/InputGroup";
import Item from "./components/Read";

export default function App() {
	const [readList, setReadList] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const addReadHandler = (readName) => {
		if (readName != "") {
			setReadList((currentReadList) => [
				...currentReadList, 
				{key: Math.random().toString(), value: readName}]);
		} else {
			console.log("ERROR: No se ha introducido ningún libro o cómic.");
		}
		setShowModal(false);
	}

	const deleteReadHandler = (readKey) => {
		setReadList((currentReadList) => {
			return currentReadList.filter((read) => read.key != readKey);
		})
	}

  return (
	<View style={styles.container}>
		<Button title="Add" onPress={() => setShowModal(true)}/>
		<InputGroup addReadHandler={addReadHandler} addMode={showModal}/>

	  	<View style={styles.listContainer}>
	  		<FlatList data={readList} renderItem={readData => (
			  	<Item value={readData.item.value} onDelete={() => deleteReadHandler(readData.item.key)}/>
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
