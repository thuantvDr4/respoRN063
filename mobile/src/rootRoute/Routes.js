/*
* config route
* navigation 5x
* */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import {routeNames} from './routeNames';
import {Platform} from 'react-native';
import setOptionHeader, {headerConfig, nonHeader} from './optionHeader';

import homeStack from '../pages/home/nav/stack';
import homePage from "../pages/home/sences/Home";
import detailPage from "../pages/home/sences/Detail";
import biometricStack from '../pages/biometrics/nav/stack';
import keyChainStack from '../pages/keyChain/nav/stack';



const stackApp =  createStackNavigator();

// Config for stack - transition
const stack_conf = {
    mode: Platform.OS === 'ios' ? 'card' : 'card', // mode = modal thì move bottom -> top | card = move right -> left
    headerMode: 'float',
};


/*
* main config
* */
const Routes =()=> {

    const deepLinking = {
        prefixes: ['https://demoapp.com', 'demoApp://'],
        config:{
            Home: {
                screen: routeNames.HOME_PAGE
            },
            Details: {
                screen: routeNames.DETAIL_PAGE,
                path: 'Details/:itemID',
                params:{
                    itemID: null
                },
            }
        }
    };

    return(
        <NavigationContainer linking={deepLinking}>
            <stackApp.Navigator initialRouteName={routeNames.HOME_PAGE}
                                screenOptions={({ navigation, route }) => headerConfig({ navigation, route })}
                                {...stack_conf}
            >
                {/** Screen - Splash  */}
                {/*<stackApp.Screen name={routeNames.HOME_STACK} component={homeStack} options={nonHeader}/>*/}
                <stackApp.Screen name={routeNames.HOME_PAGE} component={homePage}  options={({ navigation, route }) => headerConfig({ navigation, route })}/>
                <stackApp.Screen name={routeNames.DETAIL_PAGE} component={detailPage} options={({ navigation, route }) => headerConfig({ navigation, route })}  />

                <stackApp.Screen name={routeNames.BIOMETRIC_STACK} component={biometricStack} options={nonHeader}/>
                <stackApp.Screen name={routeNames.HOME_STACK} component={homeStack} options={nonHeader}/>

                <stackApp.Screen name={routeNames.KEYCHAIN_STACK} component={keyChainStack} options={nonHeader}/>

            </stackApp.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
