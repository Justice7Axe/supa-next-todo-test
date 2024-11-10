"use client"

import React from 'react'
import { DotLoader } from 'react-spinners'

function Loading222() {
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