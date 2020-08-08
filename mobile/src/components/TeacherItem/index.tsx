import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars0.githubusercontent.com/u/42686542?s=460&u=fca102a5a4c2da366f4015e975f7b1e7f3ef0733&v=4",
          }}
        ></Image>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Alice Francener</Text>
          <Text style={styles.subject}>Biologia</Text>
        </View>
      </View>

      <Text style={styles.bio}>Lorem ipsum lorem ipsum lorem ipsum</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* {<Image source={heartOutlineIcon}/>} */}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Enrtar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
