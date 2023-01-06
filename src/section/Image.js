import React from 'react'

export const Image = ({styler,img}) => {
  return (
    <div className={styler}>
        <img src={img} />
    </div>
  )
}
