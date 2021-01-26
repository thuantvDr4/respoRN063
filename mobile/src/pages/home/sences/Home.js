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

    return(
        <View>
            <Text>{'Home Page'}</Text>
            <Button
                onPress={gotoDetail}
            title={'goto detail'}
            />
        </View>
    )
}

export default HomePage;
