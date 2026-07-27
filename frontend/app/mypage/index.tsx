import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { Image } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 bg-light-100 pt-[66px]">
      <View className="justify-center items-center">
        <Text className="text-5xl text-primary font-newyork-semi">
            Hello, World!
        </Text>
      </View>
    </View>
  );
}