import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import Option from './option';
import { dummyBooks } from '../constants/dummy';
import { Dimensions } from 'react-native';
import { icons } from '../constants/icons';

{/* Define constants for card dimensions and gap */}
const CARD_WIDTH = 304;
const CARD_HEIGHT = 241;
const CARD_GAP = 24;
const COVER_WIDTH = 125; 
const COVER_HEIGHT = CARD_HEIGHT;

type Book = (typeof dummyBooks)[number];

function SessionCard({ item }: { item : Book }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<View>(null);

  const openMenu = () => {
    buttonRef.current?.measureInWindow((x, y, width, height) => {
      const screenWidth = Dimensions.get('window').width;
      setMenuPos({ 
        top: y + height, 
        right: screenWidth - (x + width)
      });
      setMenuVisible(true);
    });
  };

  return (
    <View
      className="flex-row bg-light-200"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: CARD_GAP,
        borderRadius: 12,
        overflow: 'hidden',
      }}>
      {/* view each book card(carassel) in a row */}

      <Image
        source={ item.cover }
        style={{ width: COVER_WIDTH, height: COVER_HEIGHT, borderRadius: 8 }}
        resizeMode="cover"
      />
      {/* view the book cover image with defined width and height */}

      <View className="flex-1 p-3 justify-between pt-[37px]">
        <View>
          <Text className="text-[14px] text-primary font-newyork-semi">{item.title}</Text>
          <Text className="text-[12px] text-secondary font-sf-pro">{item.author}</Text>
        </View>
      </View>

      <TouchableOpacity ref={buttonRef} onPress={openMenu} className="absolute top-2 right-2 p-1">
        <Image source={ icons.options }/>
      </TouchableOpacity>

      <Option
        visible={menuVisible}
        position={menuPos}
        onClose={() => setMenuVisible(false)}
        onDelete={() => {/* 삭제 로직 */}}
        onSave={() => {/* 저장 로직 */}}
      />
    </View>
  );
}

type CarouselProps = {
  data: any[];
};

export default function Carousel({ data }: CarouselProps) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <SessionCard item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + CARD_GAP}
      decelerationRate="fast"
    />
  );
}