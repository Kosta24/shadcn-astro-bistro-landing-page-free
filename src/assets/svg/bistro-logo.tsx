import type { ImgHTMLAttributes } from 'react'

const BistroLogo = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src='/images/site-logo.png'
      alt='Bistro Logo'
      width='129'
      height='32'
      style={{ objectFit: 'contain' }}
      {...props}
    />
  )
}

export default BistroLogo
