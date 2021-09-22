import react, {useState,useEffect} from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import axios from "axios";

const Registration = () => {
    const [username, setUsername] =useState("");
    const [password, setPassword] =useState("");
    const[issubmit,setSubmit]=useState("false");

    useEffect(() => {
    const authenticate = async() =>{
        axios
        .post( "http://localhost/user.php",
        JSON.stringify({
            username:username,
            password:password,
        })
                .then((response)=>{
                    console.log(response.data);
                    setIsSubmit(false);

}) 



.catch((err) =>{
    console.log(err);
})
        

)};
    authenticate();


},[]);


    

const usernameHandler =(text) =>{
    setUsername(text);
    };

    return (  
    <View style={styles.container}>
<TextInput placeholder="UserName" style={styles.input} onChangeText={usernameHandler}/>
        <TextInput placeholder="Password" 
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
         onChangeText={(text)=>setPassword()}
        />
        <view style={styles.buttonContainer}>
            <Button title="Login" onPress= {() => setIsSubmit(true)}></Button>
        </view>
    </View>
    );
};
const style= StyleSheet.create({
    container:{
        flex: 1,
        alignItem: "center",
        justifyContent: "center"
    },
    input:{
        paddingVertical:"center",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        width: '55%'

    },
    buttonContainer:{
        marginTop: 20,
        backgroundColor: "Black",
    }
})
 
export default Registration;