import { Animated, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const FADE_IN_START = 0;
const FADE_IN_END = 40;

const DEFAULT_TINT_OPACITY = 0.8;

type Props = {
  scrollY: Animated.Value;
  headerHeight: number;
  tintOpacity?: number;
};

export default function BlurStatusBar({ scrollY, headerHeight, tintOpacity = DEFAULT_TINT_OPACITY }: Props) {
  const blurOpacity = scrollY.interpolate({
    inputRange: [FADE_IN_START, FADE_IN_END],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  if (!headerHeight) return null;

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.container, { height: headerHeight, opacity: blurOpacity }]}
    >
      <MaskedView
        style={StyleSheet.absoluteFillObject}
        maskElement={
          <LinearGradient
            colors={['#000', '#000', 'rgba(0,0,0,0.6)', 'transparent']}
            locations={[0, 0.55, 0.8, 1]}
            style={StyleSheet.absoluteFillObject}
          />
        }
      >
        <BlurView intensity={35} tint="light" style={StyleSheet.absoluteFillObject} />
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: `rgba(248, 246, 243, ${tintOpacity})` },
          ]}
        />
      </MaskedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 15,
  },
});