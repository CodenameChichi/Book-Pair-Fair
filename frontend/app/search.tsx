import { useMemo, useState } from 'react';
import { Link, router } from 'expo-router';
import { Text, View, Image, FlatList, Pressable } from 'react-native';
import { icons } from '../constants/icons';


export default function Continued() {

  return (

    <View className="flex-1 bg-light-100 pt-[58px] px-[20px]">

      <View className="relative flex-row justify-center items-center">
        <Pressable 
          onPress={() => router.back()}
          className='absolute left-0'>
          <Image source={icons.arrow_left} />
        </Pressable>
        
        <Text className="text-[20px] text-primary font-newyork-semi">
          Start a session
        </Text>
      </View>
    </View>
  );
}