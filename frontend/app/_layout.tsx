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

    return <Stack screenOptions={{ headerShown: false }} />;
}