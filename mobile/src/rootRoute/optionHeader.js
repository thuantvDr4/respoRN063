import * as React from "react";
import {Text, View, Image, TouchableOpacity,StyleSheet} from "react-native";
import {images} from "app-assets";


//
const setOptionHeader =({isHome, navigation, iconRightImage, onPress, title, tintColor, goRemind, leftIcon= true })=>{


    // iconLeft
    const iconLeft =()=> {
        return(
            <View>
                { isHome?
                    <TouchableOpacity style={styles.icon_ctn} onPress={()=>navigation.openDrawer()}>
                        <Image source={images.iconMenu} resizeMode={'contain'} style={[styles.iconImage, {}]} />
                    </TouchableOpacity>
                    : goRemind?
                        <TouchableOpacity style={styles.icon_ctn} onPress={goRemind}>
                            <Image source={images.iconBack} resizeMode={'contain'} style={[styles.iconImage, {}]}/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.icon_ctn} onPress={()=>navigation.goBack()}>
                            <Image source={images.iconBack} resizeMode={'contain'} style={[styles.iconImage, {}]}/>
                        </TouchableOpacity>
                }
            </View>
        )
    }

    // iconRight
    const iconRight =()=> {
        return(
            <View>
                { iconRightImage?
                    <TouchableOpacity style={styles.icon_ctn} onPress={onPress}>
                        <Image source={iconRightImage} resizeMode={'contain'} style={[styles.iconImage, {tintColor: tintColor}]}/>
                    </TouchableOpacity>
                    :
                    null
                }
            </View>
        )
    }

    //
    return{
        //
        headerLeft  : leftIcon ? iconLeft : null,
        headerTitle : title,
        headerRight : iconRight,
    }
}

// styles
const styles = StyleSheet.create({
    icon_ctn:{
        justifyContent:'center',
        paddingHorizontal: 16
    },
    iconImage:{
        width: 20, height: 20,
    },
});

export default setOptionHeader;


// Config for screen - title, color, background....
export const headerConfig = ({ navigation, route }) => ({
    headerStyle: {
        backgroundColor     : '#537CBC',
        borderBottomWidth   : 0,
        shadowRadius        : 0,
        shadowOffset        : { height: 0 },
        shadowColor         : 'transparent',
        elevation           : 0
    },
    headerTitleStyle: {
        fontSize    : 18,
        fontWeight  : 'bold',
        textAlign   : 'center',
    },
    headerTitleAlign    : 'center',
    headerTintColor         : '#fff',
    headerBackTitle         : null,
    headerBackTitleVisible  : false,

    // ...setOptionHeader({
    //     navigation: navigation,
    //     isHome: false,
    //     title: route.params && route.params.title
    // })
});


export const nonHeader= () => ({
    headerShown: false,
});
