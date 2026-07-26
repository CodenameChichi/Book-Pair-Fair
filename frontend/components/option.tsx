import { View, Text, Modal, Pressable, TouchableOpacity } from 'react-native';

type Props = {
  visible: boolean;
  position: { top: number; right: number };
  onClose: () => void;
  onDelete: () => void;
  onSave: () => void;
};

export default function Option({ visible, position, onClose, onDelete, onSave }: Props) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable className="flex-1" onPress={onClose}>
        <View
          className="absolute bg-light-300 rounded-[4px] w-[97px] h-[52px]"
          style={{ top: position.top, right: position.right }}
        >
          <TouchableOpacity className="pt-2 pb-[5px] px-2" onPress={onDelete}>
            <Text 
              numberOfLines={1}
              adjustsFontSizeToFit
              className="text-[12px] text-secondary font-sf-pro"
            >
              Delete session
            </Text>
          </TouchableOpacity>

          <View className="h-[0.5px] bg-dark-100 opacity-[0.4] mx-2" />

          <TouchableOpacity className="pt-[2.5px] px-2" onPress={onSave}>
            <Text 
              numberOfLines={1}
              adjustsFontSizeToFit
              className="text-[12px] text-secondary font-sf-pro">
              Save session
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
}