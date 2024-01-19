import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import PaymentFooter from '../components/PaymentFooter';
import {COLORS, FONTFAMILY} from '../theme/theme';

const Welcome = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.SubContainer}>
        <View style={styles.FirstHalf}></View>
        <View style={styles.SecondHalf}></View>
      </View>
      <View
        style={{
          position: 'absolute',
          height: '60%',
        }}>
        <Text style={styles.HeadingText}>Caffiene Kraft</Text>
      </View>

      <View
        style={{
          position: 'absolute',
          // width: '50%',
          height: '70%',
          padding: '3%',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 3,
          }}>
          <Image
            source={require('../assets/logo2.png')}
            style={{
              height: 200,
              aspectRatio: 1,
              // opacity: 0.8,
              // backgroundColor: 'rgba(52, 52, 52, 0.3)',
            }}></Image>
        </View>
        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => {
            navigation.navigate('Tab');
          }}>
          <Text style={styles.ButtonText}>Welcome</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2C2C2',
  },
  SubContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  FirstHalf: {
    flex: 1,
    backgroundColor: COLORS.primaryBrownHex,
  },
  SecondHalf: {
    flex: 1,
    backgroundColor: 'white',
  },
  ButtonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: 40,
    // width: '100%',
    backgroundColor: COLORS.primaryGreenHex,
    paddingVertical: '5%',
    paddingHorizontal: '15%',
    borderRadius: 20,
    // position: 'absolute',
    alignSelf: 'center',
    elevation: 10,
  },
  ButtonText: {
    fontSize: 30,
    fontWeight: '800',
    // fontFamily: FONTFAMILY.poppins_semibold,
    fontStyle: 'italic',
    color: COLORS.primaryWhiteHex,
  },
  HeadingText: {
    fontSize: 40,
    fontWeight: '800',
    // fontFamily: FONTFAMILY.poppins_semibold,
    fontStyle: 'italic',
    color: COLORS.secondaryBrownHex,
    textDecorationColor: 'white',
    textDecorationStyle: 'dotted',
    textDecorationLine: 'underline',
  },
});
