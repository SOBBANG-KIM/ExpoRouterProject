import { Stack, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, Text, StyleSheet, Image } from 'react-native'

function LogoTitle (props: any) {
  console.log('LogoTitle', props)
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function StackScreen () {

  const [count, setCount] = useState(0)

  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //   })
  // }, [navigation])

  return (
    <>
      <Stack.Screen 
        options={{ 
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => <Button onPress={() => setCount(c => c+1)} title="Update Count"/>
       }} />
      <Text>Count: {count}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});