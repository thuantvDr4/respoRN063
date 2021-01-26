/*
* home-stack
* */
import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {routeNames} from 'app-route/routeNames';
import homePage from '../sences/Home';
import detailPage from '../sences/Detail';
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
        <stack.Navigator initialRouteName={routeNames.HOME_PAGE} >
            <stack.Screen name={routeNames.HOME_PAGE} component={homePage}  options={({ navigation, route }) => headerConfig({ navigation, route })}/>
            <stack.Screen name={routeNames.DETAIL_PAGE} component={detailPage} options={({ navigation, route }) => headerConfig({ navigation, route })}  />
        </stack.Navigator>
    )
}
export  default stackHome;
