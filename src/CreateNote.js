import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


export default function CreateNote(props) {
    const [height, setheight] = useState({
        h:'100px',
        b:'3'
    })
    const [change, setchange] = useState(false)
    const [text, settext] = useState({
        title: '',
        content: ''
    })
    const handleOnChange = (event) => {
        const { name, value } = event.target
        settext((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    const handleClick = () => {
        props.passNote(text);
        settext({
            title: '',
            content: ''
        });

    }

const changeClick = ()=>{
    setchange(true);
    setheight({
        h:'226px',
        b:"6"
    })
}
const changeDoubleClick = ()=>{
    setchange(false);
    setheight({
        h:'100px',
        b:'3'
    })
}
    return (
        <div onDoubleClick={changeDoubleClick}>
            <Box onDoubleClick={changeDoubleClick} boxShadow={11}
                borderRadius={10}
                className='  col-4 mx-auto border mt-4 mh-100 ' style={{ height: height.h }}>
                <form className=' flex' >
                   {change ?(
                       <input autoComplete='off' value={text.title} textTransform='capitalize' name="title" onChange={handleOnChange} className='text-left mt-2 ' style={{ border: 'none', fontSize: '23px', width: '100%', outline:'none' }} type='text' placeholder='Title' />
                       ):null
                   }
                   
                    <textarea name="content" onClick={changeClick}  onChange={handleOnChange} className=' w-100 mt-2' value={text.content} style={{
                        border: 'none' ,overflowY:"auto"
                        , outline:'none',maxHeight:'70'
                    }} aria-label="minimum height" rows={height.b} placeholder="Enter your Notes" />
                   
                   {change ? <Box className=' text-right '>
                        <Button onClick={handleClick} variant="contained" className='text-success' borderRadius='50%'>
                            <AddIcon />
                        </Button>
                    </Box> : null}
                </form>
            </Box>
        </div>
    )
}
