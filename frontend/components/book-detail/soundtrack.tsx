// components/SoundtrackCard.tsx
import { View, Text } from 'react-native';

interface SoundtrackCardProps {
  moodTags: string[];        // Books.mood + Books.genre 합친 감성 키워드
  durationSeconds: number;   // Tracks.duration_seconds
  bpm?: number;               // mood_params 안에 있을 가능성 (선택)
}

export default function SoundtrackCard({
  moodTags,
  durationSeconds,
  bpm,
}: SoundtrackCardProps) {
  const minutes = Math.floor(durationSeconds / 60);

  return (
    <View className="rounded-2xl bg-light-100 p-4">
      {/* 감성 키워드 */}
      <View className="flex-row flex-wrap gap-1 mb-3">
        {moodTags.map((tag) => (
          <View key={tag} className="px-2 py-1 rounded-full bg-white">
            <Text className="text-xs">{tag}</Text>
          </View>
        ))}
      </View>

      {/* 음악 메타 정보 */}
      <View className="flex-row items-center justify-between">
        <Text style={{ fontFamily: 'SFProText-Medium' }}>
          {minutes}분 트랙
        </Text>
        {bpm ? (
          <Text style={{ fontFamily: 'SFProText-Regular' }} className="text-xs opacity-60">
            {bpm} BPM
          </Text>
        ) : null}
      </View>

      {/* Mubert attribution — MVP 타협 항목에 명시된 필수 표기 */}
      <Text className="text-[10px] opacity-40 mt-2">
        Generated with Mubert
      </Text>
    </View>
  );
}