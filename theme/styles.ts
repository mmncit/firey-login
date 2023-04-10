import { StyleSheet } from 'react-native';
import {
  FONT_SIZE_BASE,
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_EXTRA_SMALL,
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
} from './constants';

export const commonStyles = StyleSheet.create({
  basketFont: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
    lineHeight: 18,
  },
  textXs: {
    fontSize: FONT_SIZE_EXTRA_SMALL,
    lineHeight: 16,
  },
  textSm: {
    fontSize: FONT_SIZE_SMALL,
    lineHeight: 20,
  },
  textBase: {
    fontSize: FONT_SIZE_BASE,
    lineHeight: 24,
  },
  textLg: {
    fontSize: FONT_SIZE_LARGE,
    lineHeight: 28,
  },
  textXl: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    lineHeight: 28,
  },
});
