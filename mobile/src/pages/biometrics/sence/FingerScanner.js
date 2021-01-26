/*
*
* */
import React,{useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import OptionHeader from '../../../rootRoute/optionHeader';
import {images} from "../../../assets";
import FingerprintScanner from 'react-native-fingerprint-scanner';



const FingerScanner =()=> {
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
            title: 'FINGER PAGE',
        })//end-setOption
    }, [navigation]);

    const [mColor, setColor] = useState('grey');
    const [biometryType, setBiometryType] = useState('');


    useEffect(()=>{
        setID(route.params.itemID)
    },[route.params]);


    useEffect(()=>{
        FingerprintScanner.isSensorAvailable()
            .then(biometryType =>{
                console.log('biometryType-->', biometryType);
                setBiometryType(biometryType)
            })
            .catch(err=>{
                console.log('FingerprintScanner-->', err)
            })
    },[])


   const getMessage=()=>{
        if( biometryType ==='Face ID')
        {
            return 'Scan your Face on the device to continue'
        }
        else
        {
            return 'Scan your Fingerprint on the device scanner to continue'
        }
    }

    /*
    * handleFingerTouch
    * */
    function handleFingerTouch() {
        if(biometryType !== null && biometryType !== undefined ){
            FingerprintScanner.authenticate({
                description: getMessage()
            })
                .then(()=>{
                    console.log('scan Successful!')
                })
                .catch(err =>{
                    console.log('Authentication error is => ', err);
                })
        }else {
            alert('biometric authentication is not available')
        }
    }





    return(
        <View style={{alignItems:'center', flex:1}}>
            <Text>{'Finger Page'}</Text>
            <Text>{'ID:'}{id}</Text>
            <Text>{'biometryType: '}{biometryType}</Text>
            <TouchableOpacity style={{position: 'absolute', bottom: 50}} onPress={handleFingerTouch}>
                <Image source={images.iconFinger} style={{height: 100, width: 80, tintColor: mColor}} resizeMode={'contain'}/>
                <Text>{'Touch ID'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FingerScanner;
