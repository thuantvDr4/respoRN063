/*
* home-stack
* */
import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {routeNames} from 'app-route/routeNames';
import homePage from '../sences/Home';
import detailPage from '../sences/Detail';
import keyChainPage from '../sences/KeyChain';
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
        <stack.Navigator initialRouteName={routeNames.KEYCHAIN_PAGE} >
            <stack.Screen name={routeNames.KEYCHAIN_PAGE} component={keyChainPage}  options={({ navigation, route }) => headerConfig({ navigation, route })}/>
        </stack.Navigator>
    )
}
export  default stackHome;
