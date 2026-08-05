// components/ReflectionCard.tsx
import { View, Text, Pressable, TextInput } from 'react-native';
import { icons } from '../../constants/icons';
import { Image } from 'react-native';

interface ReflectionCardProps {
  rating: number;              
  onRatingChange: (rating: number) => void;
  review: string;
  onReviewChange: (text: string) => void;
  maxStars?: number;           
}

export default function ReflectionCard({
  rating,
  onRatingChange,
  review,
  onReviewChange,
  maxStars = 5,
}: ReflectionCardProps) {
  return (
    <View className="rounded-2xl bg-light-100 p-4">

      <Text
        className="mb-2"
        style={{ fontFamily: 'SFProText-Semibold' }}
      >
        How was your reading experience?
      </Text>

      <View className="flex-row gap-1 mb-4">
        {Array.from({ length: maxStars }).map((_, i) => {
          const starIndex = i + 1;
          const filled = starIndex <= rating;
          return (
            <Pressable key={starIndex} onPress={() => onRatingChange(starIndex)}>
              <Image
                source={filled ? icons.star_filled : icons.star_empty}
                className="w-7 h-7"
              />
            </Pressable>
          );
        })}
      </View>

      <TextInput
        value={review}
        onChangeText={onReviewChange}
        placeholder="Share your thoughts... (optional)"
        multiline
        numberOfLines={4}
        className="rounded-xl bg-white p-3 text-sm"
        style={{ fontFamily: 'SFProText-Regular', textAlignVertical: 'top' }}
      />
    </View>
  );
}