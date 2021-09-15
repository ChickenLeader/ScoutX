import React from "react";
import { View, StyleSheet, Image } from 'react-native';



 const Logo = () => {

    const imageSrc = require("../../assets/scoutLogo.png")

    return (
        <View style={styles.imgStyle} >
            <Image source={imageSrc}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imgStyle: {
        alignItems:'center',
        marginTop:60,
        marginBottom:90,
            
    }
})


export default Logo;