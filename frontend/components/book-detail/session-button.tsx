import { Pressable, Text } from 'react-native';
import { router } from 'expo-router';

export default function SessionButton({
  status,
  bookId,
}: {
  status: 'not_started' | 'in_progress' | 'completed';
  bookId: string;
}) {
  const label =
    status === 'not_started'
      ? 'Start session'
      : status === 'in_progress'
      ? 'Continue session'
      : 'Restart session';

  const handlePress = () => {
    if (status === 'not_started') {
      router.push({ pathname: '/pairing/[id]', params: { id: bookId } });
    } else {
      router.push({ pathname: '/player/[id]', params: { id: bookId } });
    }
  };

  return (
    <Pressable className="bg-primary rounded-full py-4 items-center my-4" onPress={handlePress}>
      <Text className="text-white font-medium">{label}</Text>
    </Pressable>
  );
}