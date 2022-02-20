import {View, Text, Button, StyleSheet, TouchableHighlight} from "react-native";

const Read = ({value, deleteReadHandler, keyReadItem}) => {
    return (
        <TouchableHighlight>
			<View style={styles.list} key={Math.random().toString()}>
				<Text style={styles.read}>{value}</Text>
				<Button title="Delete" onPress={() => deleteReadHandler(keyReadItem)}/>
			</View>
		</TouchableHighlight>
    );
}

const styles = StyleSheet.create({
	list: {
		padding: 10,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	read: {
		textAlign: 'center',
		color: "white",
		height: "80%",
		width: "100%",
		backgroundColor: "#000000",
		borderWidth: 2,
		borderColor: "grey",
		shadowColor: "#ccc",
		borderRadius: 9,
	}
});

export default Read;