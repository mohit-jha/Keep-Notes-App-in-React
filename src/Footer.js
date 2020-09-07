import React from 'react'

const year = new Date().getFullYear()
export default function Footer() {
    return (
        <div>
             <div className=" text-muted text-center fixed-bottom bg-dark" style={{marginTop:'330px'}}>
               Copyrigh © {year}
             </div>
        </div>
    )
}
