import { Link } from 'expo-router';
import { Text, View, Image } from 'react-native';
import { icons } from '../constants/icons';
import { dummyBooks } from '../constants/dummy';
import Carousel from '../components/carousel';

export default function Index() {
  return (
    <View className="flex-1 bg-light-100">
      {/* screen size, background color */}
      <View className="flex-row justify-between items-start pt-[66px] pl-[20px] pr-[24px]">
        {/* view text and icon in a row, display contents left and right */}

        <View>
          {/* view text in a column */}
          <Text className="text-[24px] text-primary font-newyork-semi">Library</Text>
          <Text className="text-[14px] text-secondary font-sf-pro pt-2">
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

      <View className="flex-row justify-between items-start pt-[28px] pr-[20px] pl-[20px]">
        <Text className="text-[16px] text-primary font-newyork-semi">
          Continue your session
        </Text>
        
        <View>
          <Link href="/library/continue" className="pt-[5px]">
          {/* link to the continue page */}
            <View className="flex-row items-center">
            {/* view text and icon in a row */}
              <Text className="text-[12px] text-secondary font-sf-pro">
                View all
              </Text>
    
              <View className="justify-center items-center pt-[2px]">
                <Image 
                  source={icons.arrow_right}
                  className="w-[10px] h-[10px]"
                  resizeMode="contain"
                />
              </View>
            </View>
          </Link>
        </View>
      </View>

      <View className="flex-1 justify-between items-start pt-[12px] pr-[20px] pl-[22px]">
      {/* view the list of continue sessions in a horizontal scrollable list */}
        <Carousel data={dummyBooks.slice(0, 3)} />
      </View>
    </View>
  );
}