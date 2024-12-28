import { Link, Slot } from 'expo-router'
import { Text } from 'react-native'


function Header() {
  return (
      <>
        <Link href="/home">Home</Link>
        <Link href="/home/about">About</Link>
      </>
  )
}

export default function HomeScreenLayout() {
  return (
      <>
        <Header />
        <Slot />
      </>
  )
}