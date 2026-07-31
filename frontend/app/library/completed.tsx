// view all을 누르면 보일 saved books list

import { useMemo, useState } from 'react';
import { Link, router } from 'expo-router';
import { Text, View, Image, FlatList, Pressable } from 'react-native';
import { dummyBooks } from '../../constants/dummy';
import { icons } from '../../constants/icons';
import SortMenu from '../../components/sort';
import { SortKey, SESSION_SORT_OPTIONS } from '../../constants/sort';

const BOOK_WIDTH = 106
const BOOK_HEIGHT = 158
const BOOK_GAP = 16

export default function Completed() {

//   const { id } = useLocalSearchParams<{ id: string }>();
//   const book = dummyBooks.find((b) => String(b.id) === id);

//   if (!book) return <Text>책 정보를 찾을 수 없습니다.</Text>;

  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>('recent_paired');

  // sortKey가 바뀔 때마다 다시 정렬된 배열을 계산
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

    <View className="flex-1 bg-light-100 pt-[58px] px-[20px]">

      <View className="relative flex-row justify-center items-center">
        <Pressable 
          onPress={() => router.back()}
          className='absolute left-0'>
          <Image source={icons.arrow_left} />
        </Pressable>
        
        <Text className="text-[20px] text-primary font-newyork-semi">
            Completed Sessions
        </Text>
      </View>

      <Pressable
        onPress={() => setSortModalVisible(true)}
        className='flex-row justify-end items-center pt-[38px] pr-[4px]'
      >
        <Image 
          source={icons.arrow_down}
          className="w-[10px] h-[10px]"
          resizeMode="contain"
        />
        <Text className='text-[12px] text-secondary font-sf-pro pl-[4px]'>
          Sort
        </Text>
      </Pressable>

      <FlatList
        data={sortedBooks}
        keyExtractor={(item) => String(item.id)}
        numColumns={3}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 12, paddingBottom: 32 }}
        columnWrapperStyle={{ gap: BOOK_GAP }}
        renderItem={({ item: book }) => (
          <Link href={{ pathname: "/books/new", params: { id: book.id } }} asChild>
            <Pressable style={{ marginBottom: BOOK_GAP }}>
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