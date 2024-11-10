import { sleep } from '@/lib/utils'
import React from 'react'

const page = async() => {
    // throw new Error("custom error")
    sleep(1500)
    return (
        <div>page</div>
    )
}

export default page