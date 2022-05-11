import { StyleSheet } from 'react-native';
import { constants, images, SIZES, COLORS, FONTS } from '../constants';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	formContainer: {
		flexDirection: 'row',
		height: 80,
		marginTop: 40,
		marginBottom: 20,
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
		paddingRight: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	updateButton: {
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'white',
		paddingLeft: 16,
		flex: 1,
		marginRight: 5
	},
	inputUp: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'white',
		paddingLeft: 16,
		flex: 1,
		marginRight: 5
	},
	button: {
		height: 47,
		borderRadius: 5,
		backgroundColor: '#788eec',
		width: 80,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5
	},
	buttonText: {
		color: 'white',
		fontSize: 16
	},
	listContainer: {
		marginTop: 20,
		marginBottom:  SIZES.height * 0.2,
		padding: 20,
		height: SIZES.height * 0.75
	},
	entityContainer: {
		marginTop: 16,
		borderBottomColor: '#cccccc',
		borderBottomWidth: 1,
		paddingBottom: 16
	},
	entityText: {
		fontSize: 20,
		color: '#333333'
	}
});
