import { Pressable, Text, View } from 'react-native';
import { Image } from 'react-native';
import { icons } from '../constants/icons';

interface Props {
  label: string;
  onPress: () => void;
  onRemove: () => void;
}

export default function SearchHistoryPill({ label, onPress, onRemove }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center bg-light-200 rounded-full pl-4 pr-2 h-[36px] mr-2"
    >
      <Text className="text-[14px] font-sf-regular text-primary mr-1">{label}</Text>
      <Pressable onPress={onRemove} hitSlop={8}>
        <Image source={icons.close} className="w-3.5 h-3.5" />
      </Pressable>
    </Pressable>
  );
}