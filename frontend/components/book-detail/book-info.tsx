// components/BookCoverInfo.tsx
import { View, Text, Image } from 'react-native';

interface BookCoverInfoProps {
  coverUrl: string;
  title: string;
  author: string;
  publisher?: string;      // null 허용 (필터링 규칙상 title/author/description만 필수)
  moodTags: string[];      // genre + mood 합쳐서 태그로 노출
}

export default function BookCoverInfo({
  coverUrl,
  title,
  author,
  publisher,
  moodTags,
}: BookCoverInfoProps) {
  return (
    <View className="items-center">

      <Image
        source={{ uri: coverUrl }}
        className="w-[120px] h-[180px] rounded-lg"
        resizeMode="cover"
      />

      <View className="mt-3 items-center">
        <Text
          className="text-center"
          style={{ fontFamily: 'newyork-semi' }}
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text
          className="mt-1 text-center"
          style={{ fontFamily: 'SFProText-Regular' }}
        >
          {author}
          {publisher ? ` · ${publisher}` : ''}
        </Text>
      </View>
    </View>
  );
}