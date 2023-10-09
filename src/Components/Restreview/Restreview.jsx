import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
function Restreview({reviews}) {
    const [open, setOpen] = useState(false);
    console.log(reviews);//array of reviews
  return (
    <div>
        
        <Button
    onClick={() => setOpen(!open)}
    aria-controls="example-fade-text"
    aria-expanded={open}
  >
    Reviews
  </Button>
  <Fade in={open}>
    <div id="example-fade-text">
      {
        reviews?.map((item)=>(
            <div>
                <h1>{item.name}</h1>
                <h4>{item.date}</h4>
                <h3>{item.rating}</h3>
            </div>
            
            
          
        ))
      }
    </div>
  </Fade></div>
  )
}

export default Restreview