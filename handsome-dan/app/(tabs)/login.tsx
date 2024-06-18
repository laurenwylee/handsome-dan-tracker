import { Image, StyleSheet, Platform, TextInput , ImageBackground, Button} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {View, Text} from 'react-native';


// export default function LoginScreen() {
// 	return  (
// 		<View style={{backgroundColor: 'blue', 
// 					flex: 1,
// 					paddingVertical:5,
// 					flexDirection: 'column',
// 					justifyContent: 'center',
// 					alignItems: 'center'}} />
// 	)
// }

const App = () => {
	return (
	<ImageBackground source={require("../../assets/images/login_background.png")}  style={styles.background}>
	  <View style={styles.logincontainer}>
	  <Image source={require("../../assets/images/bulldog-removebg-preview 2.png")} style={styles.bulldog} /> 
		<View style={styles.loginbox} >
			
			<Text style={styles.boxText}>handsome dan</Text>

			<TextInput
				style={styles.usernameinput}
				// onChangeText={onChangeNumber}
				// value={number}
				placeholder="username"
				placeholderTextColor= "#00356B"
				// keyboardType="numeric"
			/>

			<TextInput
				style={styles.passwordinput}
				placeholder="password"
				placeholderTextColor= "#00356B"
			/>


			<Button
			title="login"
			/>

		</View>
		
	  	</View>
	  </ImageBackground>
	);
  };
  
  const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: 'cover', // Cover the entire screen
	  },
	bulldog: {
		width: 250,
		height: 250,
		position: 'absolute',
		zIndex: 1,
		bottom: '83%',
		left: '30%',
	},
	logincontainer: {
	  flex: 1,
	  width: 250,
	  justifyContent: 'center', // Center vertically
	  alignItems: 'center', // Center horizontally
	  position: 'absolute',
	  top: '50%',
	},
	loginbox: {
	//   marginTop: 250,
	  marginLeft: 150,
		flex: 1,
		justifyContent: 'center', // Center vertically
		alignItems: 'center', // Center horizontally
	  width: 294,
	  height: 243,
	  backgroundColor: 'white',
	},
	boxText:{
		color: '#00356B',
		flex: 1,
	  	textAlign: 'center',
		marginTop: 51,
		fontSize: 16,
		fontFamily: 'Arial',
		fontWeight: "bold",
	},
	usernameinput:{
		// backgroundColor: '#00356B',

		justifyContent: 'center', // Center vertically
		alignItems: 'center', // Center horizontally
		// bottom: "50%",
		// width: 100,
		// left: "50%",
		// right: "70%",
		// textAlign: 'center',
		marginBottom: 120,
		// marginLeft: 50,
		// marginRight: 50,
		width: 100, // Adjust width as needed
		height: 25, // Adjust height as needed
		fontSize: 14,
		borderBottomWidth: 1,

		
		// alignItems: 'center', // Center horizontally
	},
	passwordinput:{
		// backgroundColor: '#00356B',

		justifyContent: 'center', // Center vertically
		alignItems: 'center', // Center horizontally
		// bottom: "50%",
		// width: 100,
		// left: "50%",
		// right: "70%",
		// textAlign: 'center',
		marginBottom: 110,
		// marginLeft: 50,
		// marginRight: 50,
		width: 100, // Adjust width as needed
		height: 25, // Adjust height as needed
		fontSize: 14,
		borderBottomWidth: 1,

		
		// alignItems: 'center', // Center horizontally
	},
});
  export default App;
  
