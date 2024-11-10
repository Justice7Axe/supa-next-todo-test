"use client"

import React, { useEffect } from 'react'

function TodoContainer() {

    useEffect(() => {
        getTodos().then((data) => {
            console.log(data);
        });
    }, []);

    return (
        <div>TodoContainer</div>
    )
}

export default TodoContainer