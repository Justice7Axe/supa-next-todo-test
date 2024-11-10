"use client"

import React from 'react'
import { DotLoader222 } from 'react-spinners'

function Loading() {
    return (
        <div className='flex flex-col items-center mt-12'>
            <div>
                <DotLoader />
            </div>
            <div className='font-bold my-2'>Loading...</div>

        </div>
    )
}

export default Loading222