import { View, Text, Modal, Pressable, TouchableOpacity } from 'react-native';

{/* define the type of the options pop-up */}
type Props = {
  visible: boolean;
  position: { top: number; right: number };
  onClose: () => void;
  onDelete: () => void;
  onSave: () => void;
};   {/* void: dismiss argument(인자)/return value */}

{/* accept previously defined 5 arguments */}
export default function Option({ visible, position, onClose, onDelete, onSave }: Props) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >   {/* 
          Modal: component makes layer covering entire device window 
          - transparent: true = make the background of the modal transparent (vice versa)
          - onRequestClose: only works in Android (back button)
        */}
      
      {/* transparent layer makes that pop-up closed when user taps outside */}
      <Pressable className="flex-1" onPress={onClose}>
      {/* define style of pop-up options */}
        <View
          className="absolute bg-light-300 rounded-[4px] w-[97px] h-[52px]"
          style={{ 
            top: position.top, 
            right: position.right, 
            shadowColor: '#CCC4BB',
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 4.3,
            elevation: 4,
          }}
        >   

          {/* 
            define one of the options in pop-up (delete) 
            - TouchableOpacity: transparency feedback (user clicks -> text becomes transparent)
            - onPress: if press the button -> delete
            - numberOfLines: limit the line of contents
            - adjustFontSizeToFit: if text is bigger than the box -> decrease font size  
          */}
          <TouchableOpacity className="pt-2 pb-[5px] px-2" onPress={onDelete}>
            <Text 
              numberOfLines={1}
              adjustsFontSizeToFit
              className="text-[12px] text-secondary font-sf-pro"
            >Delete session</Text>
          </TouchableOpacity>

          {/* divider between delete session and save session texts */}
          <View className="h-[0.5px] bg-dark-100 opacity-[0.4] mx-2" />

          {/* define one of the options in pop-up (save) */}
          <TouchableOpacity className="pt-[2.5px] px-2" onPress={onSave}>
            <Text 
              numberOfLines={1}
              adjustsFontSizeToFit
              className="text-[12px] text-secondary font-sf-pro"
            >Save session</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
}