import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthProvider } from "../context/AuthsContext";
import StartScreen from "../views/StartScreen";
import LoginScreen from "../views/LoginScreen";
import SignUpScreen from "../views/SignUp";
import BottomTabNav from './BottomTabNav'; 
import MapScreen from "../views/MapScreen";
import VeterenarianScreen from "../views/VetenarianScreen";
import ChatWindow from "../views/ChatWindow";
import ChatHeader from "../components/ChatHeader";
import QRCodeScreen from "../views/QRCodeScreen";
import PetNameGeneratorScreen from "../views/PetNameGeneratorScreen";


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator
                    initialRouteName="StartScreen"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="Home" component={BottomTabNav} /> 
                    <Stack.Screen name="map" component={MapScreen} />
                    <Stack.Screen name="Vet" component={VeterenarianScreen} />
                    <Stack.Screen name="chat" component={ChatWindow}/>
                    <Stack.Screen name="QRCode" component={QRCodeScreen}/>
                    <Stack.Screen name="Generator" component={PetNameGeneratorScreen}/>
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}
