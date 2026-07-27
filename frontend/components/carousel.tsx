import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import { dummyBooks } from '../constants/dummy';
import { icons } from '../constants/icons';
import Option from './option';

{/* define constants for card dimensions and gap */}
const CARD_WIDTH = 304;
const CARD_HEIGHT = 241;
const CARD_GAP = 24;
const COVER_WIDTH = 125; 
const COVER_HEIGHT = CARD_HEIGHT;

type Book = (typeof dummyBooks)[number];   {/* save the information of dummy.ts in variable Book */}

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
    
    <View
      className="flex-row bg-light-200"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: CARD_GAP,
        borderRadius: 8,
        overflow: 'hidden',
    }}>   {/* view each book card(carassel) in a row */}

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
          <Text className="text-[12px] text-secondary font-sf-pro">{item.author}</Text>
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
      renderItem={({ item }) => <SessionCard item={item} />}
      keyExtractor={(item) => String(item.id)}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + CARD_GAP}
      decelerationRate="fast"
    />
  );
}