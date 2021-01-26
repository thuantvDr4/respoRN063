/*
* home-stack
* */
import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {routeNames} from 'app-route/routeNames';
import biometricPage from '../sence/Biometric';
import fingerScanner from '../sence/FingerScanner';
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
        <stack.Navigator initialRouteName={routeNames.BIOMETRIC_PAGE} >
            <stack.Screen name={routeNames.BIOMETRIC_PAGE} component={biometricPage}  options={({ navigation, route }) => headerConfig({ navigation, route })}/>
            <stack.Screen name={routeNames.FINGER_PAGE} component={fingerScanner}  options={({ navigation, route }) => headerConfig({ navigation, route })}/>
        </stack.Navigator>
    )
}
export  default stackHome;
