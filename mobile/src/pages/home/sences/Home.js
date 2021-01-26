/*
*
* */
import React from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {routeNames} from "app-route/routeNames";
import OptionHeader from '../../../rootRoute/optionHeader';
import {images} from "../../../assets";


const HomePage =()=> {
    const navigation = useNavigation();
   /*
   * setHeader
   * */
    React.useLayoutEffect(() => {
        navigation.setOptions({
            navigation,
            title: 'HOME PAGE',
        })//end-setOption
    }, [navigation]);


    function gotoDetail() {
        navigation.navigate(routeNames.DETAIL_PAGE,{
            itemID: 50
        })
    }

    function gotoBiometric() {
        navigation.navigate(routeNames.BIOMETRIC_STACK,{
            screen: routeNames.BIOMETRIC_PAGE,
            params: {
                itemID: 100
            }
        })
    }

    function gotoFingerPage() {
        navigation.navigate(routeNames.BIOMETRIC_STACK,{
            screen: routeNames.FINGER_PAGE,
            params: {
                itemID: 200
            }
        })
    }


    return(
        <View>
            <View  style={{height: 20}}/>
            <Button
                onPress={gotoDetail}
            title={'goto detail'}
            />
            <View  style={{height: 20}}/>
            <Button
                onPress={gotoBiometric}
                title={'goto Biometric'}
            />
            <View  style={{height: 20}}/>
            <Button
                onPress={gotoFingerPage}
                title={'goto fingerPage'}
            />

        </View>
    )
}

export default HomePage;
