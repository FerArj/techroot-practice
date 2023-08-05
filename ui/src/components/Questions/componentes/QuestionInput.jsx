import React, { forwardRef } from 'react'
import { Input } from './Question.style'

const QuestionInput = forwardRef((props, ref) => {
  return (
    <Input {...props} ref={ref}/>
  )
})

export default QuestionInput