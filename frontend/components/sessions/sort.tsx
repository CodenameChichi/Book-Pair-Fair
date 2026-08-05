import { useRef, useEffect } from 'react';
import { View, Text, Pressable, Modal, Animated, Easing, Image } from 'react-native';
import { icons } from '../constants/icons';
import { SortKey } from '../constants/sort';

type SortMenuProps = {
  visible: boolean;
  sortKey: SortKey;
  options: readonly { key: SortKey; label: string }[];
  onSelect: (key: SortKey) => void;
  onClose: () => void;
};

export default function SortMenu({ visible, sortKey, options, onSelect, onClose }: SortMenuProps) {
  // control background fade out and slide menu seperately

  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const sheetTranslateY = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: 150, // show bg at once
        useNativeDriver: true,
      }).start();
      Animated.timing(sheetTranslateY, {
        toValue: 0,
        duration: 280,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleClose = () => {
    Animated.timing(backdropOpacity, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
    Animated.timing(sheetTranslateY, {
      toValue: 300,
      duration: 220,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(() => onClose());
  };

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={handleClose}>
      <View className="flex-1" style={ { paddingBottom: 121 } }>
        <Animated.View style={{ opacity: backdropOpacity }} className="absolute inset-0 bg-black/40">
          <Pressable style={{ flex: 1 }} onPress={handleClose} />
        </Animated.View>

        <Animated.View
          style={{ transform: [{ translateY: sheetTranslateY }] }}
          className="absolute bottom-0 left-0 right-0 bg-light-100 rounded-t-[24px] pt-[12px] pb-[32px] overflow-hidden"
        >
          <View className="items-center pb-[16px]">
            <View className="w-[36px] h-[4px] rounded-full bg-light-200/40" />
          </View>

          <Text className="text-center text-[16px] font-sf-pro-semi text-primary pb-[12px]">
            Sort
          </Text>

          {options.map((option) => {
            const isSelected = sortKey === option.key;
            return (
              <Pressable
                key={option.key}
                onPress={() => {
                  onSelect(option.key);
                  handleClose();
                }}
                className={`flex-row justify-between items-center mb-[8px] px-[20px] py-[16px] ${
                  isSelected ? 'bg-light-200' : ''
                }`}
                style={{ borderRadius: 8 }}
              >
                <Text className={ `text-[15px] font-sf-pro` }>
                  {option.label}
                </Text>
                {isSelected && ( 
                  <Image source={icons.check} className="w-[24px] h-[24px]" resizeMode="contain"
                />)}
              </Pressable>
            );
          })}
        </Animated.View>
      </View>
    </Modal>
  );
}