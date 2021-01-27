/*
*
* */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import OptionHeader from '../../../rootRoute/optionHeader';
import {images} from "../../../assets";
import * as Keychain from 'react-native-keychain';


const KeyChain = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [id, setID] = useState();
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [data, setData] = useState({
        userName: '',
        pass: ''
    })


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
            title: 'DEMO KEYCHAIN',
        })//end-setOption
    }, [navigation]);


    useEffect(() => {
        setID(route.params.itemID)
    }, [route.params]);


    useEffect(() => {
        Keychain.getSupportedBiometryType({}).then(biometryType => {
            console.log('biometryType->',biometryType)
        });
    }, []);


    async function _saveKeyChain() {
        const username = data.userName;
        const password = data.pass;
        const option ={

        };
        // Store the credentials
        await Keychain.setGenericPassword(username, password, option);
    }

    async function _loadKeyChain() {
        try {
            // Retrieve the credentials
            const credentials = await Keychain.getGenericPassword();
            if (credentials) {
                const {username, password} = credentials;
                console.log(
                    'Credentials successfully loaded for user ' + credentials.username + credentials.password
                );
                setUserName(username);
                setPass(password);

            } else {
                console.log('No credentials stored');
            }
        } catch (error) {
            console.log("Keychain couldn't be accessed!", error);
        }
    }


   async function _resetKeyChain() {
       await Keychain.resetGenericPassword();
    }


    function onChangeText(key, text) {
        setData({
            ...data,
            [key]: text
        })
    }


    return (
        <View style={{ flex: 1}}>
            <View style={{alignItems:'center'}}>
            <Text>{'Demo KeyChain'}</Text>
            <Text>{'ID:'}{id}</Text>

            <Text>{'userName:'}{userName}</Text>

            <Text>{'Pass:'}{pass}</Text>
            </View>

            <View style={{marginHorizontal: 10, flex:1}}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, }}
                    onChangeText={text => onChangeText('userName', text)}
                    value={data.userName}
                />
                <View style={{height: 20}}/>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, width: '100%'}}
                    onChangeText={text => onChangeText('pass', text)}
                    value={data.pass}
                />
            </View>

            <View style={{flexDirection: 'row', position: 'absolute', bottom: 100,}}>
                <TouchableOpacity
                    onPress={_saveKeyChain}
                    style={{paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#555555'}}>
                    <Text style={{color: '#00e5ff'}}>{'Save'}</Text>
                </TouchableOpacity>

                <View style={{width: 30}}/>

                <TouchableOpacity
                    onPress={_loadKeyChain}
                    style={{paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#555555'}}>
                    <Text style={{color: '#ff9800'}}>{'Load'}</Text>
                </TouchableOpacity>

                <View style={{width: 30}}/>

                <TouchableOpacity
                    onPress={_resetKeyChain}
                    style={{paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#555555'}}>
                    <Text style={{color: '#76ff03'}}>{'Reset'}</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default KeyChain;
