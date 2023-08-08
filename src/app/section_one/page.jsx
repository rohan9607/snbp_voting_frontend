"use client"
import Card from '@/component/Card';
import { useThemeContext } from '@/component/context/DataProvider';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
    const { headGirls, headBoys, sportsCaptain} = useThemeContext();
  return (
    <div className="container py-5">
          <h2 className="font-weight-bold mb-2">Head Girls</h2>
          <div className="row pb-5 mb-4">
            {
                headGirls.length > 0 && headGirls?.map((student, i) => (
                    <Card key={i + 19} student={student}/>
                ))
            }
          </div>
          <h2 className="font-weight-bold mb-2">Head Boys</h2>
          <div className="row pb-5 mb-4">
            {
                headBoys.length > 0 && headBoys?.map((student, i) => (
                    <Card key={i + 19} student={student}/>
                ))
            }
          </div>
         
          <h2 className="font-weight-bold mb-2">Sports Captain</h2>
          <div className="row pb-5 mb-4">
            {
                sportsCaptain.length > 0 && sportsCaptain?.map((student, i) => (
                    <Card key={i + 19} student={student}/>
                ))
            }
          </div>
          <hr />
  </div>
  )
}

export default page