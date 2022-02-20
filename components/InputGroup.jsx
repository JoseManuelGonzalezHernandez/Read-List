import { useState } from "react";
import { Button, Modal, TextInput, View, StyleSheet } from "react-native";

const InputGroup = ({ addReadHandler, addMode }) => {
	const [readName, setReadName] = useState("");
	const [readPages, setReadPages] = useState("");
	const [readPercentage, setReadPercentage] = useState("");

	const readNameHandler = (readTitle) => {
		setReadName(readTitle);
	};

	const readPagesHandler = (readNumPages) => {
		setReadPages(readNumPages);
	};

	const readPercentagesHandler = (readPercentage) => {
		setReadPercentage(readPercentage);
	};

	const validateRead = () => {
		addReadHandler(readName, readPages, readPercentage);
		setReadName("");
		setReadPages("");
		setReadPercentage("");
	};

	return (
		<Modal visible={addMode}>
			<View style={styles.inputGroup}>
				<TextInput
					style={styles.readInput}
					placeholder="Add a new read to your list..."
					placeholderTextColor={"grey"}
					value={readName}
					onChangeText={readNameHandler} />
				<TextInput
					style={styles.readInput}
					placeholder="How many pages have you read?"
					placeholderTextColor={"grey"}
					value={readPages}
					onChangeText={readPagesHandler} />
				<TextInput
					style={styles.readInput}
					placeholder="How much percentage have you read of the book?"
					placeholderTextColor={"grey"}
					value={readPercentage}
					onChangeText={readPercentagesHandler} />
				<Button
					style={styles.readButton}
					title="Add"
					onPress={validateRead} />
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputGroup: {
		backgroundColor: "#121212",
		flexDirection: 'column',
		justifyContent: "center",
		alignItems: "center",
		padding: 15,
		height: "100%",
	},
	readInput: {
		margin: 10,
		backgroundColor: "#000000",
		color: "white",
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
