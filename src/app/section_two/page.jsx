"use client"
import Card from '@/component/Card';
import { useThemeContext } from '@/component/context/DataProvider';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
  const { houseCaptain, viceCaptain, prefect} = useThemeContext();

  return (
    <div className="container py-5">
      <h2 className="font-weight-bold mb-2">House Captain</h2>
      <div className="row pb-5 mb-4">
        {
          houseCaptain.length > 0 && houseCaptain?.map((student, i) => (
            <Card key={i + 19} student={student} />
          ))
        }
      </div>
      
      <h2 className="font-weight-bold mb-2">Vice Captain</h2>
      <div className="row pb-5 mb-4">
        {
          viceCaptain.length > 0 && viceCaptain?.map((student, i) => (
            <Card key={i + 19} student={student} />
          ))
        }
      </div>
     
      <h2 className="font-weight-bold mb-2">Prefect</h2>
      <div className="row pb-5 mb-4">
        {
          prefect.length > 0 && prefect?.map((student, i) => (
            <Card key={i + 19} student={student} />
          ))
        }
      </div>
    </div>
  )
}

export default page