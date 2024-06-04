import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "./Styles";

export default function RenderItem({ item, markDone, deleteFunction }) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={markDone}>
        <Text style={item.done ? styles.textDone : styles.text}>{item.title}</Text>
        <Text style={item.done ? styles.textDone : styles.text}>{new Date(item.date).toLocaleDateString()}</Text>
      </TouchableOpacity>
      {item.done && (
        <TouchableOpacity style={styles.removeButton} onPress={deleteFunction}>
          <Text style={styles.whiteText}>Eliminar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
