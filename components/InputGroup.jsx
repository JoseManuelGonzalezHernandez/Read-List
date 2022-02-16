import {useState} from "react";
import{Button, Modal, TextInput, View, StyleSheet} from "react-native";

const InputGroup = ({addReadHandler, addMode}) => {
	const [readName, setReadName] = useState("");

	const readNameHandler = (readText) => {
		setReadName(readText);
	};

	const validateRead = () => {
		addReadHandler(readName);
		setReadName("");
	};
	
  return (
	<Modal visible={addMode}>
		<View style={styles.inputGroup}>
			<TextInput 
				style={styles.readInput} 
				placeholder="Add a new read to your list..."
				value= {readName}
				onChangeText={readNameHandler}/>
			<Button 
				style={styles.readButton} 
				title="Add"
				onPress={validateRead}/>
		</View>
	</Modal>
  );
};

const styles = StyleSheet.create({
	inputGroup: {
		flexDirection: 'column', 
		justifyContent: "center", 
		alignItems: "center", 
		padding: 15,
	},
	readInput: {
		borderBottomColor: "teal",
		borderWidth: 1,
		height: 40,
		width: "75%"
	},
	readButton: {
		width: "25%",
		marginLeft: 8
	}
});

export default InputGroup;
