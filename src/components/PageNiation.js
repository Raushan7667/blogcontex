import React, { useContext } from 'react'
import { AppContex } from '../contex/AppContex'

function PageNiation() {
    const {page,handlepagechange,totalPages}=useContext(AppContex)
    
  return (
    <div className='w-full flex justify-center items-center border-2 py-2 fixed bottom-0 bg-white '>
      <div className='flex justify-between w-[670px] '>
        <div>
        {
            page>1 &&
           ( <button 
           className='rounded-md border px-4 py-1 bg-slate-400 '
           onClick={()=>handlepagechange(page-1)}>
              Previous
            </button>)
        }
        {
            page<totalPages&&
            (<button 
                className='rounded-md border px-4 py-1 bg-slate-400 '
            onClick={()=>handlepagechange(page+1)}>
                Next
            </button>)
        }
        </div>
        <p
        className='font-bold text-sm'
        >page{page}of{totalPages}</p>
      </div>
    </div>
  )
}

export default PageNiation
