import {View, Text, StyleSheet, TouchableHighlight} from "react-native";

const Read = ({value, onDelete}) => {
    return (
        <TouchableHighlight onPress={onDelete}>
			<View key={Math.random().toString()} >
				<Text style={styles.listRead}>{value}</Text>
			</View>
		</TouchableHighlight>
    );
}

const styles = StyleSheet.create({
	listRead: {
		textAlign: 'center',
		color: "white",
		height: 70,
		width: "100%",
		backgroundColor: "#000000",
		borderWidth: 2,
		borderColor: "grey",
		shadowColor: "#ccc",
		borderRadius: 9,
	}
});

export default Read;