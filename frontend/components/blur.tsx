import { Animated, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const FADE_HEIGHT = 45;
const OVERDRAW = 20;

const FADE_IN_START = 0;
const FADE_IN_END = 24;

const BG_COLOR = '#F8F6F3';

type Props = {
  scrollY: Animated.Value;
  offsetTop: number;
};

export default function BlurStatusBar({ scrollY, offsetTop }: Props) {
  const opacity = scrollY.interpolate({
    inputRange: [FADE_IN_START, FADE_IN_END],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.container, { top: offsetTop, opacity }]}
    >

      <LinearGradient
        colors={[BG_COLOR, BG_COLOR, `${BG_COLOR}CC`, `${BG_COLOR}00`]}
        locations={[0, 0.15, 0.55, 1]}
        style={StyleSheet.absoluteFillObject}
      />

      <MaskedView
        style={StyleSheet.absoluteFillObject}
        maskElement={
          <LinearGradient
            colors={['#000000', '#000000', 'rgba(0,0,0,0.5)', 'transparent']}
            locations={[0, 0.15, 0.55, 1]}
            style={{ height: FADE_HEIGHT }}
          />
        }
      >
        <BlurView intensity={30} tint="light" style={styles.blurOverdraw} />
      </MaskedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: FADE_HEIGHT,
    zIndex: 5,
  },
  maskContainer: {
    height: FADE_HEIGHT,
    overflow: 'visible',
  },
  blurOverdraw: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: FADE_HEIGHT + OVERDRAW,
  },
});