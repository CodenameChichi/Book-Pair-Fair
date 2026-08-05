import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { dummyBooks } from '../../constants/dummy';
import BookCoverInfo from '../../components/book-detail/book-info';
import SoundtrackCard from '../../components/book-detail/soundtrack';
import SessionButton from '../../components/book-detail/session-button';
import ReadMoreSection from '../../components/book-detail/about';
import ReflectionCard from '../../components/book-detail/reflection';
import { icons } from '../../constants/icons';

export default function BookDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const book = dummyBooks.find((b) => b.id === id);

  if (!book) return null;

  return (
    <View className="flex-1 bg-light-100">
      <View className="flex-row items-center justify-between px-[24px] pt-[58px]">
        <Image source={icons.heart_empty} className="w-[24px] h-[24px]" />
        <Image source={icons.back} className="w-[24px] h-[24px] pt-[9px]" />
      </View>
      <ScrollView className="px-5">
        <BookCoverInfo book={book} />

        {book.status !== 'not_started' && <SoundtrackCard track={book.track} moodTags={book.moodTags} />}

        <SessionButton status={book.status as 'completed' | 'in_progress' | 'not_started'} bookId={book.id} />

        <ReadMoreSection title="About the book" content={book.summary} />
        <ReadMoreSection title="About the author" content={book.authorBio} />

        {book.status === 'completed' && (
          <ReflectionCard rating={book.rating} review={book.review} />
        )}
      </ScrollView>
    </View>
  );
}