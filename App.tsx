import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup' // Form Validation Package

// Form validation using yup schema
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be at least 4 characters')
  .max(16, 'Should not be more than 16 characters')
  .required('Length is required')
})
export default function App() {
  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, useNumbers] = useState(false)
  const [symbols, useSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    //
  }

  const createPassword = (characters: string, passwordLength: number) => {
    //
  }

  const resetPasswordState = () => {
    // 
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})