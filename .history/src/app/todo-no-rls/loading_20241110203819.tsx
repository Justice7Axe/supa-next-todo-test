"use client"

import React from 'react'
import { BounceLoader } from 'react-spinners'

function Error() {
    return (
        <div className='flex flex-col items-center mt-12'>
            <div>
                <BounceLoader />
            </div>
            <div className='font-bold my-2'>Loading...</div>

        </div>
    )
}

export default Error