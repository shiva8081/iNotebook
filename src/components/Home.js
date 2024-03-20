import React from 'react'
import { Notes } from './Notes'




export const Home = (props) => {

  const {ssalert}=props;
  return (
    
    <>
   
    <Notes ssalert={ssalert} />
    </>
  )
}
 