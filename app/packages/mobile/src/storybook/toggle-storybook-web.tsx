import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export interface ToggleStorybookWebProps {
  flag: boolean;
  onToggle: () => void;
}

export default function ToggleStorybookWeb({
  flag,
  onToggle,
}: ToggleStorybookWebProps) {
  return (
    <Pressable style={styles.container} onPress={onToggle}>
      <Text style={[styles.tab, !flag && styles.activeTab]}>App</Text>
      <Text style={[styles.tab, flag && styles.activeTab]}>Stories</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#8080ff40",
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 4,
    top: 4,
    right: 4,
    zIndex: 10000,
    userSelect: "none",
  },
  tab: {
    backgroundColor: "#80808020",
    color: "#606060",
    fontWeight: "600",
    padding: 8,
    textAlign: "center",
    minWidth: 64,
  },
  activeTab: {
    backgroundColor: "#ffffff60",
    color: "#000000",
  },
});
