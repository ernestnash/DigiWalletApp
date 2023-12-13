import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default ImportFonts = async () => {
  // const [fontsLoaded] = useFonts({
  //   'Josefin Sans Medium': require('../../assets/Fonts/Josefin Sans Medium.ttf'),
  // });

  await Font.loadAsync({
    'Josefin Sans Medium': require('../../assets/Fonts/Josefin Sans Medium.ttf'),
  })
  this.setState({ fontLoaded: true })

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

}



