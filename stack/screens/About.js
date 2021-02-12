import React, { Component } from "react";
import { View, Text } from 'react-native';


class About extends Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize: 22}}>
                    About us
                </Text>
            </View>
        )
    }
}

export default About;