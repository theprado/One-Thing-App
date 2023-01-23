import { useState } from 'react'
import { ArrowRightCircleIcon, BeakerIcon } from '@heroicons/react/24/solid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
        <div className="grid place-items-center gap-8 m-8">
        <h1 className='text-3xl sm:text-6xl font-bold text-center'>Oque você precisa fazer?</h1>
        <form
          className='flex ring-4 rounded-md ring-slate-200 dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800'
      //    onSubmit={}
    >
      <input type='text-slate-900'
        className='w-[500px]'/>
      <button className=''>
        <ArrowRightCircleIcon className='h-12 w-12 dark:text-slate-800'/>
      </button>
        </form>
        </div>
    </main>
  
  )
}

export default App
