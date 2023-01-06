import React from 'react'

export const Paragraph = ({styler,p}) => {
  return (
    <div className={styler}>
        <p>{p}</p>
        </div>
  )
}
