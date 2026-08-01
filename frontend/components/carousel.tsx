import { 
  View, Text, Image, ImageBackground, FlatList, Dimensions, TouchableOpacity, Pressable,
} from 'react-native';
import { useState, useRef } from 'react';
import { useRouter } from 'expo-router';
import { dummyBooks } from '../constants/dummy';
import { icons } from '../constants/icons';
import { images } from '../constants/images';
import Option from './option';

{/* define constants for card dimensions and gap */}
const CARD_WIDTH = 304;
const CARD_HEIGHT = 241;
const CARD_GAP = 24;
const COVER_WIDTH = 125; 
const COVER_HEIGHT = CARD_HEIGHT;
const PADDING = 22;   {/* padding for the card content */}

type Book = (typeof dummyBooks)[number];   {/* save the information of dummy.ts in variable Book */}

{/* normal state -> pressed state -> navigate to another page */}
function ContinueSession({ bookId }: { bookId: string }) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(`/books/${bookId}`)}>
      {({ pressed }) => (
        <ImageBackground
          source={pressed ? icons.button_pressed : icons.button}
          className="absolute bottom-[18px] left-[135px] right-[18px]"
          style={{
            width: 151,
            height: 40,
            justifyContent: 'center',
            alignContent: 'center',
          }}
          resizeMode="contain"
        >
          <View className='flex-row justify-center items-center'>
            <Text style={{ color: '#F8F6F3', fontSize: 12 }}>
              Continue session
            </Text>
            <Image 
              source={ icons.arrow_right_white }
              style={{ 
                width: 10, 
                height: 10,
                marginLeft: 10,
              }}
            />
          </View>
        </ImageBackground>
      )}
    </Pressable>
  );
}

function SessionCard({ item }: { item : Book }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPos, setPopupPos] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<View>(null);   {/* refer the button as view */}

  const openPopup = () => {
    buttonRef.current?.measureInWindow((x, y, width, height) => {
    {/* measureInWindow: callback the location of the view in device window */}
      const screenWidth = Dimensions.get('window').width;   {/* bring the entire width of device window */}
      setPopupPos({ 
        top: y + height, 
        right: screenWidth - (x + width)
      });
      {/* 
        calculate the location where pop-up options show 
        - top: botton's top end + the height of the button = right below the button
        - right: device screen's width - button's rightmost
                 = how rightmost of the button is apart from the device screen's rightmost
      */}
      setPopupVisible(true);   {/* show the pop-up options */}
    });
  };

  return (
    <View className="relative">
      <View
        className="flex-row bg-light-200"
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          marginRight: CARD_GAP,
          borderRadius: 8,
          overflow: 'hidden',
        }}>   {/* view each book card(carassel) in a row */}

        <View className='absolute pt-[98px] pl-[107px] pr-[17px]'>
          <Image 
            source={ images.bookmark }
            className="w-[180px] h-[67px]"
            resizeMode="stretch"
          />

        <View className='absolute pt-[110px] pl-[137px]'>
          <View className='flex-row'>
            <Image
              source={ icons.note }
              className="w-[10px] h-[10px] pt-[1px]"
              resizeMode="contain"
            />
            <Text 
              className='text-[10px] text-accent font-sf-pro-semi pl-[2px]'
              style={{ letterSpacing: 1.2 }}
            >PAIRED WITH</Text>
          </View>
          <View className='w-[122px] items-center pt-[4px]'>
            <Text 
              className="text-[12px] text-primary font-newyork"
              style={{ 
                letterSpacing: -0.3, 
                lineHeight: 14,
              }}
              numberOfLines={2}
              ellipsizeMode='tail'
            >{item.aiPairing}</Text>
          </View>
        </View>
      </View>

        {/* view the book cover image with defined width and height */}
        <Image
          source={ item.cover }
          style={{ width: COVER_WIDTH, height: COVER_HEIGHT, borderRadius: 8 }}
          resizeMode="cover"
        />

        {/* place book title & author in the carousel */}
        <View className="flex-1 p-3 justify-between pt-[37px]">
          <View>
            <Text className="text-[14px] text-primary font-newyork-semi">{item.title}</Text>
            <Text className="text-[12px] text-secondary font-sf-pro-medium">{item.author}</Text>
          </View>
        </View>

        {/* implement options button */}
        <TouchableOpacity ref={buttonRef} onPress={openPopup} className="absolute top-[14px] right-4">
          <Image source={ icons.options }/>
        </TouchableOpacity>

        {/* implement option component: pop-up open/close, delete/save session button */}
        <Option
          visible={popupVisible}
          position={popupPos}
          onClose={() => setPopupVisible(false)}
          onDelete={() => {/* 삭제 로직 */}}
          onSave={() => {/* 저장 로직 */}}
        />
      </View>

      <View>
        {/* Continue session button */}
        <ContinueSession bookId={String(item.id)} />
      </View>
    </View>
  );
}

{/* define type carousel -> data is from Book variable(dummy.ts) */}
type CarouselProps = {
  data: Book[];
};

{/* 
  implement horizontal swipe carousel UI 
  - sanpToInterval: snap the carousel with (card width + card gap) value 
                    -> show one card with one swipe
  - decelerationRate: the speed of swiping the card
*/}
export default function Carousel({ data }: CarouselProps) {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ 
        paddingLeft: PADDING, 
        paddingRight: PADDING,
      }}
      snapToOffsets={data.map((_, i) => i * (CARD_WIDTH + CARD_GAP))}
      decelerationRate="fast"
      renderItem={({ item }) => (
        <SessionCard item={item} />
      )}
    />
  );
}