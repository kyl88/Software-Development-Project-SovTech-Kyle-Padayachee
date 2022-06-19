import React from 'react'
import Link from 'next/link'

export default function Nav(){

    return (


        <div className ="py-4 px-8 bg-gray-700 text-white flex justify-between">
        <div className="text-xl"><Link href ="/index">Back to home page</Link></div>
        <div>
        <div>People</div>
        <div>Planets</div>
        <div>Vehicles</div> 
</div>

        </div>
    )
}