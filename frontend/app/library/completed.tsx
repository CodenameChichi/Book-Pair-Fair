import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { Image } from 'react-native';

export default function Completed() {
  return (
    <View className="flex-1 bg-light-100 pt-[54px]">
      <View className="justify-center items-center">
        <Text className="text-[20px] text-primary font-newyork-semi">
            Completed Sessions
        </Text>
      </View>
    </View>
  );
}