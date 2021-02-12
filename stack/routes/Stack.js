import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Home from "../screens/Home";



class Stack extends Component{
    render(){
        return(
            <AppContainer />
        )
    }
}

const myStack = createStackNavigator({
    'Home' : Home,
    'About' : About,
    'Contact' : Contact

}, {
    initialRouteName: 'Home'
});

const AppContainer = createAppContainer(myStack)

export default Stack;