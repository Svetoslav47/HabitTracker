import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";

import { ThemedText } from "./ThemedText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export interface ThemedButtonProps {
    text?: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    textStyles?: any;
    iconStyles?: any;
    iconSize?: number;
    containerStyles?: any;
    containerColor?: keyof typeof Colors.light & keyof typeof Colors.dark;
    onPress?: () => void;
}

export function ThemedButton({ text, icon, textStyles, iconStyles, containerStyles, onPress, iconSize,  containerColor}: ThemedButtonProps) {
    let color = useThemeColor("text");
    
    let viewColor = containerColor || "transparent";

    return (
        <TouchableOpacity style={[{flexDirection:"row", alignItems:"center", gap:5, backgroundColor:useThemeColor(viewColor)}, containerStyles]} onPress={onPress}>
            {text && <ThemedText style={textStyles}>{text}</ThemedText>}
            {icon && <MaterialCommunityIcons name={icon} style={iconStyles} color={color} size={iconSize}/>}
        </TouchableOpacity>
    )
}