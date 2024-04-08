import { ScrollView, Text } from 'react-native'
import { BookList } from './components/BookList'

export const HomeScreen = () => {
  return (
    <ScrollView>
        <BookList/>
    </ScrollView>
  )
}
