import React from 'react'
import { Button } from './Question.style'

const QuestionButton = ({children}) => {
  return (
    <Button>
        {children}
    </Button>
  )
}

export default QuestionButton