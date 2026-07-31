import { Link } from 'expo-router';
import { Text, ScrollView, View, Image, Pressable } from 'react-native';
import { icons } from '../constants/icons';
import { dummyBooks } from '../constants/dummy';
import Carousel from '../components/carousel';
import Saved from '../components/saved';

export default function Index() {
  return (
    <ScrollView 
      className="flex-1 bg-light-100"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      {/* screen size, background color */}
      <View className="flex justify-between items-start pt-[66px] pl-[20px] pr-[24px]">
        {/* view text and icon in a row, display contents left and right */}

        <View className='flex-row justify-between w-[346px] h-[34px]'>
          {/* title bar: view text in a column */}
          <Text className="text-[24px] text-primary font-newyork-semi">Library</Text>
          <Link href="/mypage" asChild>
            <Pressable className="pt-[5px] pb-[5px]">
              <View className="w-[24px] h-[24px] justify-center items-center">
                <Image 
                  source={icons.my_page}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </Link>
        </View>

        <View className='h-[22px] justify-center items-center'>
          <Text className="text-[14px] text-secondary font-sf-pro">
            Every book deserves to be immersed in
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between items-start pt-[31px] pr-[20px] pl-[20px]">
        <Text className="w-[188px] h-[24px] text-[16px] text-primary font-newyork-semi">
          Continue your session
        </Text>
        
        <View>
          <Link href="/library/continue" asChild>
            <Pressable className="pt-[5px]">
              <View className="flex-row justify-center items-center">
                <Text className="text-[12px] text-secondary font-sf-pro">
                  View all
                </Text>
                <View className="justify-center items-center">
                  <Image 
                    source={icons.arrow_right}
                    className="w-[10px] h-[10px]"
                    resizeMode="contain"
                  />
                </View>
              </View>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* view the list of continue sessions in a horizontal scrollable list */}
      <View className="pt-[12px] pl-[22px]">
        <Carousel data={dummyBooks.slice(0, 3)} />
      </View>

      <View className="flex-row justify-between items-start pt-[60px] pl-[20px]">
        <Text className="h-[24px] text-[16px] text-primary font-newyork-semi">
          Saved Books
        </Text>
        
        <Link href="/library/saved" asChild>
          <Pressable className="pt-[4px] pr-[20px]">
            <View className="flex-row justify-center items-center">
              <Text className="text-[12px] text-secondary font-sf-pro">
                View all
              </Text>
              <View className="justify-center items-center">
                <Image
                  source={icons.arrow_right}
                  className="w-[10px] h-[10px]"
                  resizeMode="contain"
                />
              </View>
            </View>
          </Pressable>
        </Link>
      </View>

      <View>
        <View className="pt-[12px] pl-[20px]">
          <Saved data={dummyBooks.slice(1, 4)} />   {/* show three books */}
        </View>        
      </View>
      
    </ScrollView>
  );
}