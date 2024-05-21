import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Portal as PaperPortal, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './routes';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <BottomSheetModalProvider>
      <PaperProvider>
        <PaperPortal>
          <SafeAreaProvider>
            {/* <AuthProvider> */}
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
            {/* </AuthProvider> */}
          </SafeAreaProvider>
        </PaperPortal>
      </PaperProvider>
    </BottomSheetModalProvider>
  </GestureHandlerRootView>
  )
}