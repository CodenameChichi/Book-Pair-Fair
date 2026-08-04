import { useState, useRef, useCallback } from 'react';
import { Link } from 'expo-router';
import { Text, View, Image, Pressable, Animated, LayoutChangeEvent } from 'react-native';
import { icons } from '../constants/icons';
import { dummyBooks } from '../constants/dummy';
import Carousel from '../components/carousel';
import Saved from '../components/saved';
import BlurStatusBar from '../components/blur';

const BG_COLOR = '#F8F6F3';

export default function Index() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [headerHeight, setHeaderHeight] = useState(66 + 34 + 22);

  const EXTRA_COVERAGE = 80;
  const blurHeight = headerHeight + EXTRA_COVERAGE;

  const onHeaderLayout = useCallback((e: LayoutChangeEvent) => {
    setHeaderHeight(e.nativeEvent.layout.height);
  }, []);

  return (
    <View style={{ flex: 1, position: 'relative' }} className="bg-light-100">

      <Animated.ScrollView 
        className="flex-1"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: 40 }}
      >
        <View className="flex-row justify-between items-start pt-[33px] pr-[20px] pl-[20px]">
          <Text className="w-[188px] h-[24px] text-[16px] text-primary font-newyork-semi">
            Continue your session
          </Text>
          
          <View className="pb-[3px]">
            <Link href="/library/continue" asChild>
              <Pressable>
                <View className="flex-row justify-center items-center">
                  <Text className="text-[14px] text-secondary font-sf-pro">
                    View all
                  </Text>
                    <Image 
                      source={icons.arrow_right}
                      className="w-[10px] h-[10px] pl-[2px]"
                      resizeMode="contain"
                    />
                </View>
              </Pressable>
            </Link>
          </View>
        </View>

        {/* view the list of continue sessions in a horizontal scrollable list */}
        <View className="pt-[10px]">
          <Carousel data={dummyBooks.slice(0, 3)} />
        </View>

        <View className="flex-row justify-between items-start pt-[63px] pl-[20px] pr-[20px]">
          <Text className="h-[24px] text-[16px] text-primary font-newyork-semi">
            Saved Books
          </Text>
          
          <View className="pb-[3px]">
            <Link href="/library/saved" asChild>
              <Pressable>
                <View className="flex-row justify-center items-center">
                  <Text className="text-[14px] text-secondary font-sf-pro">
                    View all
                  </Text>
                    <Image 
                      source={icons.arrow_right}
                      className="w-[10px] h-[10px] pl-[2px]"
                      resizeMode="contain"
                    />
                </View>
              </Pressable>
            </Link>
          </View>
        </View>

        <View>
          <View className="pt-[10px] pl-[20px]">
            <Saved data={dummyBooks.slice(1, 4)} />   {/* show three books */}
          </View>        
        </View>

        <View className="flex-row justify-between items-start pt-[54px] pl-[20px] pr-[20px]">
          <Text className="h-[24px] text-[16px] text-primary font-newyork-semi">
            Completed Sessions
          </Text>
          
          <View className="pb-[3px]">
            <Link href="/library/completed" asChild>
              <Pressable>
                <View className="flex-row justify-center items-center">
                  <Text className="text-[14px] text-secondary font-sf-pro">
                    View all
                  </Text>
                    <Image 
                      source={icons.arrow_right}
                      className="w-[10px] h-[10px] pl-[2px]"
                      resizeMode="contain"
                    />
                </View>
              </Pressable>
            </Link>
          </View>
        </View>

        <View>
          <View className="pt-[9px] pl-[20px]">
            <Saved data={dummyBooks.slice(2, 5)} />   {/* show three books */}
          </View>        
        </View>
      </Animated.ScrollView>

      <BlurStatusBar scrollY={scrollY} headerHeight={blurHeight} />

      {/* screen size, background color */}
      <View
        onLayout={onHeaderLayout}
        className="absolute top-0 left-0 right-0 z-20 pt-[66px] pl-[20px] pr-[24px]"
      >
        {/* view text and icon in a row, display contents left and right */}

        <View className='flex-row justify-between w-[346px] h-[34px]'>
        {/* title bar: view text in a column */}
          <Text className="text-[24px] text-primary font-newyork-semi">Library</Text>
            <Link href="/mypage" asChild>
            <Pressable className="pt-[5px] pb-[5px]">
              <View className="w-[24px] h-[24px] justify-center items-center">
                <Image 
                  source={icons.my_page}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </Link>
        </View>

        <View className='h-[22px] justify-center items-start'>
          <Text className="text-[14px] text-secondary font-sf-pro">
            Every book deserves to be immersed in
          </Text>
        </View>
      </View>

      <View style={{ position: 'absolute', bottom: 31, right: 20, zIndex: 30 }}>
        <Link href="/search" asChild>
          <Pressable>
            <Image source={icons.add} />
          </Pressable>
        </Link>
      </View>
    </View>
  );
}