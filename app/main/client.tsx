'use client'

import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('../../components'), { ssr: false }) 
 
export function ClientOnly() {
  return <App />
}