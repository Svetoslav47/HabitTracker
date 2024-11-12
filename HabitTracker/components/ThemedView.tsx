import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export type ThemedViewProps = ViewProps & {
  viewColor: keyof typeof Colors.light & keyof typeof Colors.dark
};

export function ThemedView({ style, viewColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor(viewColor);

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
