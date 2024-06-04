import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './Styles';
import RenderItem from "./RenderItem";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [tasks, setTasks] = useState([]); // Start with an empty list
  const [newTask, setNewTask] = useState('');

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('Test3', JSON.stringify(value));
    } catch (e) {
      console.error("Error al guardar las tareas", e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Test3');
      if (value !== null) {
        const taskLocal = JSON.parse(value);// convert to array
        setTasks(taskLocal); // pass it on to the state
      }
    } catch (e) {
      console.error("Error al leer las tareas", e);
    }
  };


  useEffect(() => {
    getData();

  }, []);


  useEffect(() => {
    storeData(tasks); //Save tasks every time they are updated
  }, [tasks]);


  // add new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks,
      {
        title: newTask,
        done: false,
        date: new Date()
      }]);
      setNewTask('');
      storeData(newTask);
    }
  };

  //mark task
  const markDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };


  //delete marked task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por hacer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Agregar una nueva tarea'
          style={styles.textInput}
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <RenderItem
              item={item}
              markDone={() => markDone(index)}
              deleteFunction={() => deleteTask(index)}
            />
          )}
        />
      </View>
    </View>
  );
}
