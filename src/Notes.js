import React from 'react'
import Box from '@material-ui/core/Box';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';

export default function Notes(props) {
    return (
        <div className='d-inline-block mt-5  col-3'>
            <Box className='mb-4 pl-2' style={{marginBottom:'29px' , overflow:'auto'}} border={1} boxShadow={6} borderRadius={10}
                className='ml-2  mt-4 '>
                <div className='pl-2'style={{width:'880'}}>
                    <h4 style={{width:'880'}}>{props.title}</h4>
                </div>
                <div className='pl-2' width={{width:'880'}}>
                    <p className='' style={{width:'880'}}>{props.content}</p>
                </div>
                <Box className='text-right  '>
                    <Button onClick={()=>{
                        props.onSelect(props.id)
                    }} variant="contained" className='text-danger fixed-bottom '>
                        <DeleteOutlineIcon />
                    </Button>
                </Box>
            </Box>
        </div>
    )
}
