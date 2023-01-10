import React from 'react'

export const Image = ({styler,img}) => {
  return (
    <div >
        <img className={styler} src={img} />
    </div>
  )
}
