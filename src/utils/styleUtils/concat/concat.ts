import { StyleSheet } from 'react-native';

/**
 * NOTE: TODO:
 * In future try to implement utils like classname:
 * cn(
 *  styles.style1,
 *  styles.style2,
 *  ...
 *  styles.styleN,
 *  {
 *    [styles.someModifiers1]: bool,
 *    [styles.someModifiers2]: bool,
 *    ...
 *    [styles.someModifiersN]: bool,
 *  }
 * )
 *
 * Code example:
 *
 * type TRecordStyle = Record<string, unknown>;
 *
 * const concatStyle = (...args: Array<ViewStyle | TRecordStyle>) => {
 *
 *   return args.reduce((acc: any, curr: any) => {
 *     if (Object.keys(curr).some(isObject)) {
 *       const style = Object.keys(curr).filter(isObject)
 *         .map(key => (curr[key] ? key : curr[key]));
 *
 *       return style.reduce(StyleSheet.compose, acc);
 *     }
 *
 *     return StyleSheet.compose(acc, curr);
 *   }, {});
 * };
 */
export const concat = StyleSheet.compose;
export const cn = StyleSheet.compose;
