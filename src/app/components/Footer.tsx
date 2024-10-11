import React from 'react'

const updateDate = (): number => {
    const date = new Date();
    return date.getFullYear();
}

const Footer = (): JSX.Element => {
  return (
    <div className='flex flex-row justify-center gap-4 bg-gray-800 items-center h-14 text-white'>
        &copy; {updateDate()} | Football Bot
    </div>
  )
}

export default Footer