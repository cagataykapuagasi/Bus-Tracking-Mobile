import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from 'res';

const { width } = Dimensions.get('window');

export default class Card extends Component {
  moveAnimation = new Animated.Value(182);

  _moveBall = toValue => {
    Animated.timing(this.moveAnimation, {
      duration: 300,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { item, clearSelectedBus } = this.props;

    item ? this._moveBall(0) : this._moveBall(182);

    return (
      <Animated.View
        style={[
          styles.footerView,
          {
            transform: [
              {
                translateY: this.moveAnimation,
              },
            ],
          },
        ]}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.footerTitle}>Otobüs ismi</Text>
            <Text style={styles.footerText}>{item?.name}</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.footerTitle}>Otobüs numarası</Text>
            <Text style={styles.footerText}>{item?.no}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={clearSelectedBus} style={styles.button}>
          <Text style={styles.buttonText}>Kapat</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = ScaledSheet.create({
  footerView: {
    height: 182,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: '20@s',
  },
  footerTitle: {
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
  footerText: {
    color: colors.text,
    textAlign: 'center',
    top: '8@s',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  button: {
    height: 60,
    width: 180,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16@s',
  },
});
