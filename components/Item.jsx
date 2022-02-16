import {View, Text, StyleSheet, TouchableHighlight} from "react-native";

const Item = ({value, onDelete}) => {
    return (
        <TouchableHighlight onPress={onDelete}>
			<View key={Math.random().toString()} >
				<Text style={styles.listItem}>{value}</Text>
			</View>
		</TouchableHighlight>
    );
}

const styles = StyleSheet.create({
	listItem: {
		height: 60,
		width: "100%",
		backgroundColor: "orange",
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: "white",
		shadowColor: "#ccc",
		borderRadius: 5,
		margin: 8
	}
});

export default Item;