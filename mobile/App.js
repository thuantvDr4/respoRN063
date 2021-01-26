/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import Routes from './src/rootRoute/Routes';


const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={{flex: 1}}>
                <Routes/>
            </SafeAreaView>
        </>
    );
};
export default App;
