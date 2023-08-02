import React from 'react'
import { Perguntas } from './Question.style'

const QuestionContainer = ({children}) => {
  return (
    <Perguntas>
        {children}
    </Perguntas>
  )
}

export default QuestionContainer