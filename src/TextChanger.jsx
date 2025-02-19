import React from 'react'
import { useState , useEffect } from 'react'


function TextChanger() {
    const text = ["Hi, I'm Shiva" ,"Hi, I'm Shiva","Hi, I'm Shiva" ]
    const [currentText , setCurrentText] = useState("")
    const [endValue , setendValue] = useState(0)
    const [isForward , setIsForward] = useState(true)
    const [jndex , setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(text[jndex].substring(0 , endValue))
            if (isForward) {
                setendValue((prev) => prev + 1)
            } else {
                setendValue((prev) => prev - 1) 
            }
            if(endValue === text[jndex].length + 10){
                setIsForward(false)
            }
            if(endValue < 2.1) {
                setIsForward(true)
                setIndex((prev) => prev&text.length)
            } 
        } , 50)

        return () => clearInterval(interval)
    } , [endValue , isForward , jndex , text])
  return (
    <>
        <div className='transition ease duration-300'>
            {currentText}
        </div>
    </>
  )
}

export default TextChanger