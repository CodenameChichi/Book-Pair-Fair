import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { Image } from 'react-native';
import { icons } from '../constants/icons';

export default function Index() {
  return (
    <View className="flex-1 bg-light-100">
      {/* screen size, background color */}
      <View className="flex-row justify-between items-start pt-[66px] pl-[20px] pr-[24px]">
        {/* view text and icon in a row, display contents left and right */}

        <View>
          {/* view text in a column */}
          <Text className="text-[24px] text-primary font-newyork-semi">Library</Text>
          <Text className="text-[12px] text-secondary font-sf-pro pt-2">
            Every book deserves to be immersed in
          </Text>
        </View>

        <Link href="/mypage" className="pt-[5px]">
          <View className="w-[24px] h-[24px] justify-center items-center">
            {/* view icon in a defined size square, display it in the center of the square box */}
            <Image 
              source={icons.my_page}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
        </Link>

      </View>
    </View>
  );
}