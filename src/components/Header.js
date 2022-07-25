import React from 'react'
import { Box } from './Box'

export const Header = (props) => {

  return (
    <div>New Document

      {props.data.map((key) => (
        <Box key={key} name={key} />
      ))}

    </div>
  )
}
