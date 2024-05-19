import {Image, StyleSheet} from "react-native";
import PlaceholderImage from "../assets/images/background-image.png";


export default function ImageViewer({ placeholderImageSource }){
    return <Image source={placeholderImageSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
