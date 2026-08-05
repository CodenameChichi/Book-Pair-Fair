// components/ReadMoreSection.tsx
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

interface ReadMoreSectionProps {
  label: string;        // "줄거리" | "저자 소개" 등 섹션 제목
  content: string;
  numberOfLines?: number; // 줄임 표시 기준 줄 수, 기본 3줄
}

export default function ReadMoreSection({
  label,
  content,
  numberOfLines = 3,
}: ReadMoreSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false); // 실제로 줄임이 발생했는지

  return (
    <View className="mb-4">
      <Text
        className="mb-1"
        style={{ fontFamily: 'SFProText-Semibold' }}
      >
        {label}
      </Text>

      <Text
        numberOfLines={expanded ? undefined : numberOfLines}
        onTextLayout={(e) => {
          // 최초 렌더 시 실제 줄 수가 기준을 넘는지 체크 → 짧은 텍스트면 버튼 자체를 숨김
          if (!expanded && e.nativeEvent.lines.length >= numberOfLines) {
            setIsTruncated(true);
          }
        }}
        style={{ fontFamily: 'SFProText-Regular' }}
        className="leading-5 opacity-80"
      >
        {content}
      </Text>

      {isTruncated && (
        <Pressable onPress={() => setExpanded((prev) => !prev)}>
          <Text
            className="mt-1 opacity-60"
            style={{ fontFamily: 'SFProText-Medium' }}
          >
            {expanded ? '접기' : 'Read more'}
          </Text>
        </Pressable>
      )}
    </View>
  );
}