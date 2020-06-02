import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Text, Price } from '../common';
import { getProductThumbnailFromAttribute } from '../../helper/product';
import { ThemeContext } from '../../theme';
import { finalPrice } from '../../helper/price';

const FeaturedProductItem = ({
  onPress,
  currencySymbol,
  currencyRate,
  product,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container(theme),styles.homegrid]}>
      <TouchableOpacity
        style={styles.containerStyle(theme)}
        onPress={() => { onPress(product); }}
      >
        <FastImage
          style={styles.imageStyle(theme)}
          resizeMode="contain"
          source={{ uri: getProductThumbnailFromAttribute(product) }}
        />
        <View style={styles.infoStyle}>
          <Text
            type="subheading"
            style={styles.textStyle(theme)}
            ellipsizeMode="tail"
            numberOfLines={2}
          >
            {product.name}
          </Text>
          <Price
            basePrice={product.price}
            discountPrice={finalPrice(product.custom_attributes, product.price)}
            currencySymbol={currencySymbol}
            currencyRate={currencyRate}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    padding: theme.spacing.tiny,
    width: theme.dimens.WINDOW_WIDTH * 0.32,
  }),
  containerStyle: theme => ({
    flexDirection: 'column',
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.dimens.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  infoStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homegrid:{
    paddingBottom:30,
  },
  textStyle: theme => ({
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing.small,
  }),
  priceStyle: {
    textAlign: 'center',
  },
  imageStyle: theme => ({
    height: theme.dimens.homeProductImageHeight,
    width: theme.dimens.homeProductImageWidth,
  }),
});

FeaturedProductItem.propTypes = {
  currencySymbol: PropTypes.string.isRequired,
  currencyRate: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  product: PropTypes.object,
};

FeaturedProductItem.defaultProps = {};

export default FeaturedProductItem;
