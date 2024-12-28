import { Stack } from "expo-router";

export default function StackScreenLayout () {

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Home',
        }}
      />
    </Stack>
  )
} 