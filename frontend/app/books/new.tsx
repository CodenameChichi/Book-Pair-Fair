// 책 이미지를 누르면 나오는 책 정보 화면 (start session으로 이어짐)

import { Link, router } from 'expo-router';
import { Text, View, Image, FlatList, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { dummyBooks } from '../../constants/dummy';
import { icons } from '../../constants/icons';

const BOOK_WIDTH = 106
const BOOK_HEIGHT = 158
const BOOK_GAP = 16

export default function BookInfoNew() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const book = dummyBooks.find((b) => String(b.id) === id);

  if (!book) {
    return <Text>책 정보를 찾을 수 없습니다.</Text>;
  }

  return (
    <View>
      <Pressable onPress={() => router.back()}>
        <Image source={icons.arrow_left} />
      </Pressable>
      <Link href={{ pathname: "/books/new", params: { id: book.id } }} asChild>
            <Pressable>
              <View className="relative">
                <Image
                  source={ book.cover }
                  style={{ width: BOOK_WIDTH, height: BOOK_HEIGHT, borderRadius: 4 }}
                  resizeMode="cover"
                />
                <Text className='justify-start text-[12px] font-sf-pro-semi h-[17px] pt-[6px]'>
                  {book.title}
                </Text>
                <Text className='justify-start text-[10px] font-sf-pro h-[14px]'>
                  {book.author}
                </Text>
              </View>
            </Pressable>
          </Link>
        </View>
  );
}