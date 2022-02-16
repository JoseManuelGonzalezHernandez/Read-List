import {useState} from "react";
import{Button, Modal, TextInput, View, StyleSheet} from "react-native";

const InputGroup = ({addProductHandler, addMode}) => {
	const [productName, setProductName] = useState("");

	const productNameHandler = (productText) => {
		setProductName(productText);
	};

	const validateProduct = () => {
		addProductHandler(productName);
		setProductName("");
	};
	
  return (
	<Modal visible={addMode}>
		<View style={styles.inputGroup}>
			<TextInput 
				style={styles.productInput} 
				placeholder="Add a new product to shopping list"
				value= {productName}
				onChangeText={productNameHandler}/>
			<Button 
				style={styles.productButton} 
				title="Add"
				onPress={validateProduct}/>
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
	productInput: {
		borderBottomColor: "teal",
		borderWidth: 1,
		height: 40,
		width: "75%"
	},
	productButton: {
		width: "25%",
		marginLeft: 8
	}
});

export default InputGroup;
