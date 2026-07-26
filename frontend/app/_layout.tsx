import '../globals.css';

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'newyork': require('../assets/fonts/NewYorkSmall-Regular.otf'),
        'newyork-semi': require('../assets/fonts/NewYorkSmall-Semibold.otf'),
        'sf-pro': require('../assets/fonts/SF-Pro-Text-Regular.otf'),
        'sf-pro-medium': require('../assets/fonts/SF-Pro-Text-Medium.otf'),
        'sf-pro-semi': require('../assets/fonts/SF-Pro-Text-Semibold.otf'),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null; 

    return <Stack >
        <Stack.Screen
            name="index"
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="mypage/index"
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="library/continue"
            options={{ headerShown: false }}
        />
    </Stack>;
}