'use client'

import { useEffect, useState } from 'react'

export default function User() {
  const [a, setA] = useState('')
  const getInfo = async () => {
    const response = await fetch('/api/user/me')
    const data = await response.json()
    setA(JSON.stringify(data))
  }

  useEffect(() => {
    getInfo()
  }, [])
  return <>{a}</>
}
