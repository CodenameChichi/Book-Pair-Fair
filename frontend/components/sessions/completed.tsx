// index에 나타날 completed sessions 섹션

import { Link } from 'expo-router';
import { Text, View, Image, Pressable } from 'react-native';
import { dummyBooks } from '../constants/dummy';

const BOOK_WIDTH = 106
const BOOK_HEIGHT = 159
const BOOK_GAP = 16

type Book = (typeof dummyBooks)[number];   // save the information of dummy.ts in variable Book

function BookCover({ item }: { item : Book }) {

  return (
    <View style={{ width: BOOK_WIDTH }}>
      <Link href={{ pathname: "/books/finished", params: { id: item.id } }} asChild>
        <Pressable>
          <View className="relative">
            <Image
              source={ item.cover }
              style={{ width: BOOK_WIDTH, height: BOOK_HEIGHT, borderRadius: 4 }}
              resizeMode="cover"
            />
            <Text 
              className='justify-start text-[12px] font-sf-pro-semi pt-[8px]'
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {item.title}
            </Text>
            <Text 
              className='justify-start text-[10px] text-secondary font-sf-pro pt-[4px]'
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {item.author}
            </Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

type BookProps = {
  data: Book[];
};

export default function Completed({ data }: BookProps) {
  const visibleBooks = data.slice(2, 5); // show three books without scrolling

  return (
    <View style={{ flexDirection: 'row', gap: BOOK_GAP }}>
      {visibleBooks.map((item) => (
        <BookCover key={String(item.id)} item={item} />
      ))}
    </View>
  );
}