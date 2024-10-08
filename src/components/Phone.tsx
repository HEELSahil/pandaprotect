import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <Image
        src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'}
        alt="Phone Image"
        width={896}
        height={1831}
        className="pointer-events-none z-50 select-none"
        />

      <div className='absolute -z-10 inset-0'>
        <Image
            className="object-cover min-w-full min-h-full"
            src={imgSrc}
            alt="overlaying phone image"
            layout="fill"
            objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Phone