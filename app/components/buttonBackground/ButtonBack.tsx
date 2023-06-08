"use client";

import { set } from 'sanity';
import './ButtonBack.css'
import { useEffect, useState } from 'react'

function ButtonBack() {
  const [enabled, setEnabled] = useState(false)
  const [enabled2, setEnabled2] = useState(false)
  const [enabled3, setEnabled3] = useState(false)
  const [enabled4, setEnabled4] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('bbody', enabled)
    return () => {
      document.body.classList.remove('bbody')
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('bmouse', enabled2)
    return () => {
      document.body.classList.remove('bmouse')
    }
  }, [enabled2])

  useEffect(() => {
    document.body.classList.toggle('bspace', enabled3)
    return () => {
      document.body.classList.remove('bspace')
    }
  }, [enabled3])

  useEffect(() => {
    document.body.classList.toggle('bbuble', enabled4)
    return () => {
      document.body.classList.remove('bbuble')
    }
  }, [enabled4])


  return (
    <>
      <div className="flex flex-row-reverse gap-2">
        <button style={{ borderWidth: enabled ? '2px' : '0px' }}
          onClick={() => { setEnabled(!enabled); setEnabled2(false); setEnabled3(false); setEnabled4(false) }} className="texture border-blue-700 border shadow-inner rounded-xl">

        </button>

        <button style={{ borderWidth: enabled2 ? '2px' : '0px' }}
          onClick={() => { setEnabled2(!enabled2); setEnabled(false); setEnabled3(false); setEnabled4(false) }} className="mouse border-blue-700 border shadow-inner rounded-xl">
        </button>

        <button style={{ borderWidth: enabled3 ? '2px' : '0px' }}
          onClick={() => { setEnabled3(!enabled3); setEnabled(false); setEnabled2(false); setEnabled4(false) }} className="space border-blue-700 border shadow-inner rounded-xl">

        </button>

        <button style={{ borderWidth: enabled4 ? '2px' : '0px' }}
          onClick={() => { setEnabled4(!enabled4); setEnabled(false); setEnabled2(false); setEnabled3(false) }} className="buble border-blue-700 shadow-inner rounded-xl">
          {/* {enabled4 ? 'ON' : 'OFF'} */}
        </button>
      </div >
    </>
  )
}

export default ButtonBack