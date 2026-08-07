import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View, Image, Pressable, TextInput } from 'react-native';
import { icons } from '../constants/icons';

export default function Search() {

  const [search, setSearch] = useState('');

  return (
    <View className="flex-1 bg-light-100 pt-[68px] px-[20px]">

      <View className="relative flex-row justify-center items-center">
        <Pressable onPress={() => router.back()} className="absolute left-0 pt-[1.5px]">
          <Image source={icons.arrow_left} />
        </Pressable>

        <Text className="text-[20px] text-primary font-newyork-semi">
          Start a session
        </Text>
      </View>

      <View className='pt-[24px]'>
        <View 
          className="flex-row items-center bg-light-200 rounded-full 
                     w-[350px] h-[40px] px-[20px]">
          <Image source={icons.search} className="w-[24px] h-[24px]" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            className="flex-1 text-[16px] text-primary font-sf-pro pl-[12px] py-[8px]"
            placeholder="Search for a book"
            placeholderTextColor="rgba(107, 101, 88, 0.70)"
          />
        </View>

        <View className="pt-[24px] pl-[4px]">
          <Text className="text-[12px] text-secondary font-newyork-semi">
            Recent searches
          </Text>
        </View>
      </View>
    </View>
  );
}