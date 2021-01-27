/*
*
* */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
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
    });

    const [isRegisted, setIsRegisted] = useState(false);
    const [biometryType, setBiometryType] = useState(null);
    const [accessControl, setAccessControl] = useState(null);


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
            console.log('biometryType->',biometryType);
            setBiometryType(biometryType);
        });
    }, []);

    useEffect(()=>{

    },[]);


    async function _saveKeyChain() {
        const username = data.userName;
        const password = data.pass;
        const option ={
            accessControl: accessControl,
            securityLevel: Keychain.SECURITY_LEVEL.ANY,
            storage: null,
        };
        // Store the credentials
      await Keychain.setGenericPassword(username, password, option);
      alert('Save done!')
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


    async function _loadKeyChainByBiometric() {
        try {
            const options = {
                authenticationPrompt: {
                    title: 'Authentication needed',
                    subtitle: 'Subtitle',
                    description: 'Some descriptive text',
                    cancel: 'Cancel',
                },
            };
            // Retrieve the credentials
            const credentials = await Keychain.getGenericPassword(options);
            if (credentials) {
                const {username, password} = credentials;
                console.log(
                    'Credentials successfully loaded for user ', credentials
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

    function _setAccessCtrol(type) {
        setAccessControl(type)
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
                <View style={{height: 30}}/>
                <Text>{'Access control'}</Text>
                <View style={{  flexDirection:'row',  marginTop:4}}>
                    <TouchableOpacity
                        onPress={()=>_setAccessCtrol(null)}
                        style={{paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#555555'}}>
                        <Text style={{color: '#00e5ff'}}>{'None'}</Text>
                    </TouchableOpacity>


                    <View style={{width: 30}}/>
                    <TouchableOpacity
                        onPress={()=>_setAccessCtrol(Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET)}
                        style={{paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#555555'}}>
                        <Text style={{color: '#ff9800'}}>{biometryType}</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <ScrollView style={{ position: 'absolute', bottom: 100,}} horizontal>
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
                    onPress={_loadKeyChainByBiometric}
                    style={{paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#555555'}}>
                    <Text style={{color: '#ff9800'}}>{'Load by biometric'}</Text>
                </TouchableOpacity>

                <View style={{width: 30}}/>

                <TouchableOpacity
                    onPress={_resetKeyChain}
                    style={{paddingHorizontal: 30, paddingVertical: 8, backgroundColor: '#555555'}}>
                    <Text style={{color: '#76ff03'}}>{'Reset'}</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default KeyChain;
