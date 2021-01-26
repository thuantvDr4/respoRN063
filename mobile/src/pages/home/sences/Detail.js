/*
*
* */
import React,{useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import OptionHeader from '../../../rootRoute/optionHeader';
import {images} from "../../../assets";



const DetailPage =()=> {
    const navigation = useNavigation();
    const route = useRoute();
    const [id, setID] = useState();

    // /*
    // * setHeader
    // * */
    // React.useLayoutEffect(() => {
    //     navigation.setOptions(OptionHeader({
    //         navigation,
    //         isHome: false,
    //         title: 'Hello',
    //         iconRightImage: images.iconMenu
    //     }))
    // }, [navigation]);


    /*
* setHeader
* */
    React.useLayoutEffect(() => {
        navigation.setOptions({
            navigation,
            title: 'DETAIL PAGE',
        })//end-setOption
    }, [navigation]);


    useEffect(()=>{
       setID(route.params.itemID)
    },[route.params]);


    return(
        <View>
            <Text>{'Detail Page'}</Text>
            <Text>{'ID:'}{id}</Text>
        </View>
    )
}

export default DetailPage;
