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

export default Read;