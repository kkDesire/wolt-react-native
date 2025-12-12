import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type AppleAuthButtonProps = { onPress?: () => void; disabled?: boolean }
const AppleAuthButton = ({ onPress, disabled }: AppleAuthButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.appleButton}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel="Sign in with Apple"
    >
        <Ionicons name="logo-apple" size={18} color="white" />
      <Text style={styles.appleButtonText}>Sign in with Apple</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    appleButton: {
        backgroundColor: "#000",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        borderRadius: 12,
        gap: 4,
    },
    appleButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    }
})

export default AppleAuthButton