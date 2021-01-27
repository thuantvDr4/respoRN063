/*
* home-stack
* */
import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {routeNames} from 'app-route/routeNames';
import keyChain from '../sence/KeyChain';
import keyChain_Example from '../sence/KeyChainExample';
import setOptionHeader, {headerConfig, nonHeader} from '../../../rootRoute/optionHeader';

//


/*
* create stack
* */
const stack = createStackNavigator();



/*
*
* */
const stackHome =()=>{
    return(
        <stack.Navigator initialRouteName={routeNames.KEYCHAIN_EXAMPLE_PAGE} >
            <stack.Screen name={routeNames.KEYCHAIN_SCREEN} component={keyChain}  options={({ navigation, route }) => headerConfig({ navigation, route })}/>
            <stack.Screen name={routeNames.KEYCHAIN_EXAMPLE_PAGE} component={keyChain_Example}  options={({ navigation, route }) => headerConfig({ navigation, route })}/>
        </stack.Navigator>
    )
}
export  default stackHome;
