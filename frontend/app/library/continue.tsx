// view all을 누르면 보일 saved books list

import { useMemo, useState, useRef, useCallback } from 'react';
import { Link, router } from 'expo-router';
import { 
  Text, View, Image, FlatList, Pressable, Dimensions, Animated, LayoutChangeEvent
} from 'react-native';
import { dummyBooks } from '../../constants/dummy';
import { icons } from '../../constants/icons';
import SortMenu from '../../components/sort';
import { SortKey, SESSION_SORT_OPTIONS } from '../../constants/sort';
import BlurStatusBar from '../../components/blur';

const SCREEN_WIDTH = Dimensions.get('window').width
const CONTAINER_PADDING = 20 * 2
const BOOK_WIDTH = 106
const BOOK_HEIGHT = 158
const BOOK_GAP = (SCREEN_WIDTH - CONTAINER_PADDING - BOOK_WIDTH * 3) / 2
const LINE_GAP = 16

export default function Continued() {

//   const { id } = useLocalSearchParams<{ id: string }>();
//   const book = dummyBooks.find((b) => String(b.id) === id);

//   if (!book) return <Text>책 정보를 찾을 수 없습니다.</Text>;

  const scrollY = useRef(new Animated.Value(0)).current;
  const [headerHeight, setHeaderHeight] = useState(78);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>('recent_paired');

  const EXTRA_COVERAGE = 80;
  const blurHeight = headerHeight + EXTRA_COVERAGE;

  const onHeaderLayout = useCallback((e: LayoutChangeEvent) => {
    setHeaderHeight(e.nativeEvent.layout.height);
  }, []);

  const sortedBooks = useMemo(() => {
    const sorted = [...dummyBooks];
    switch (sortKey) {
      case 'recent_paired':
        return sorted.sort((a, b) => {
          if (!a.pairedAt) return 1;
          if (!b.pairedAt) return -1;
          return new Date(b.pairedAt).getTime() - new Date(a.pairedAt).getTime();
        });
      case 'recent_listened':
        return sorted.sort((a, b) => {
          if (!a.lastListenedAt) return 1;
          if (!b.lastListenedAt) return -1;
          return new Date(b.lastListenedAt).getTime() - new Date(a.lastListenedAt).getTime();
        });
      case 'title':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'author':
        return sorted.sort((a, b) => a.author.localeCompare(b.author));
      default:
        return sorted;
    }
  }, [sortKey]);

  return (

    <View className="flex-1 bg-light-100">

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{ 
          paddingTop: headerHeight, paddingBottom: 40, paddingHorizontal: 20
        }}
      >
        <Pressable
          onPress={() => setSortModalVisible(true)}
          className='flex-row justify-end items-center pt-[23px] pr-[4px]'
        >
          <Image 
            source={icons.arrow_down}
            className="w-[10px] h-[10px]"
            resizeMode="contain"
          />
          <Text className='text-[14px] text-secondary font-sf-pro pl-[4px]'>
            Sort
          </Text>
        </Pressable>

        <FlatList
          data={sortedBooks}
          keyExtractor={(item) => String(item.id)}
          numColumns={3}
          scrollEnabled={false}
          contentContainerStyle={{ paddingTop: 12, paddingBottom: 32 }}
          columnWrapperStyle={{ gap: BOOK_GAP }}
          renderItem={({ item: book }) => (
            <Link href={{ pathname: "/books/new", params: { id: book.id } }} asChild>
              <Pressable style={{ marginBottom: LINE_GAP }}>
                <View className="relative">
                  <Image
                    source={book.cover}
                    style={{ width: BOOK_WIDTH, height: BOOK_HEIGHT, borderRadius: 4 }}
                    resizeMode="cover"
                  />
                  <Text
                    className='justify-start text-[12px] font-sf-pro-semi pt-[7px]'
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    style={{ width: BOOK_WIDTH }}
                  >{book.title}</Text>
                  <Text
                    className='justify-start text-[10px] font-sf-pro pt-[6px]'
                    style={{ width: BOOK_WIDTH }}
                  >{book.author}</Text>
                </View>
              </Pressable>
            </Link>
          )}
        />
      </Animated.ScrollView>

      <BlurStatusBar scrollY={scrollY} headerHeight={blurHeight} tintOpacity={0.8} />

      <View
        onLayout={onHeaderLayout}
        className="absolute top-0 left-0 right-0 z-20 pt-[78px] px-[20px]"
      >
        <View className="relative flex-row justify-center items-center">
          <Pressable 
            onPress={() => router.back()}
            className='absolute left-0'>
            <Image source={icons.arrow_left} />
          </Pressable>
          
          <Text className="text-[20px] text-primary font-newyork-semi">
              Continue your session
          </Text>
        </View>
      </View>

      <SortMenu
        visible={sortModalVisible}
        sortKey={sortKey}
        options={SESSION_SORT_OPTIONS}
        onSelect={setSortKey}
        onClose={() => setSortModalVisible(false)}
      />
    </View>
  );
}