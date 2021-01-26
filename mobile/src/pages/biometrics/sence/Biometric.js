/*
*
* */
import React,{useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import OptionHeader from '../../../rootRoute/optionHeader';
import {images} from "../../../assets";
import TouchID from 'react-native-touch-id'



const Biometric =()=> {
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

    //config is optional to be passed in on Android
    const optionalConfigObject = {
        title: "Authentication Required", // Android
        color: "#e00606", // Android,
        fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
    }

    /*
* setHeader
* */
    React.useLayoutEffect(() => {
        navigation.setOptions({
            navigation,
            title: 'BIOMETRIC PAGE',
        })//end-setOption
    }, [navigation]);

    const [mColor, setColor] = useState('grey');
    const [biometryType, setBiometryType] = useState('');


    useEffect(()=>{
        setID(route.params.itemID)
    },[route.params]);


    useEffect(()=>{
        TouchID.isSupported()
            .then(biometryType=>{
                setBiometryType(biometryType);
                if (biometryType === 'FaceID') {
                    console.log('FaceID is supported.');
                } else {
                    console.log('TouchID is supported.');
                }
            })
            .catch(err=>{
                console.log('isSupported-->',err)
            });
    },[])

    /*
    * handleFingerTouch
    * */
    function handleFingerTouch() {
        TouchID.isSupported()
            .then(biometryType=>{
                onProgress();
            })
            .catch(err=>{
                console.log('isSupported-->',err)
            });
    }


    /*
    * onProgress
    * */
    function onProgress() {
        TouchID.authenticate('to demo this react-native component', optionalConfigObject)
            .then(success => {
                Alert.alert('Authenticated Successfully');
                console.log(success)
            })
            .catch(error => {
                Alert.alert('Authentication Failed');
                console.log(error)
            });
    }



    return(
        <View style={{alignItems:'center', flex:1}}>
            <Text>{'Biometric Page'}</Text>
            <Text>{'ID:'}{id}</Text>

            <TouchableOpacity style={{position: 'absolute', bottom: 50}} onPress={handleFingerTouch}>
                <Image source={images.iconFinger} style={{height: 100, width: 80, tintColor: mColor}} resizeMode={'contain'}/>
                <Text>{'Touch ID'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Biometric;
