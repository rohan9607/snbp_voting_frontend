"use client"
import Table from '@/component/Table';
import { useThemeContext } from '@/component/context/DataProvider';
import axios from 'axios';
import React, { useState } from 'react'

const page = () => {

  console.log(process.env.BASE_URL);

  const { headGirls, headBoys, sportsCaptain, houseCaptain, viceCaptain, prefect } = useThemeContext();

  const [isLoading, setIsLoading] = useState(false);
  const clearSectionOne = async () => {
    await axios.get(process.env.BASE_URL + "/section1").then((response) => {
        const arr = response.data;
        arr.forEach(async (student) => {
          const object = {
            ...student,
            vote : 0
        }
        await axios.put(`${process.env.BASE_URL}/section1/${student.id}`, object)
      });
      window.location.reload()
      
      })
  }
  
  const clearSectionTwo = async () => {
    await axios.get(process.env.BASE_URL + "/section2").then((response) => {
        const arr = response.data;
        arr.forEach(async (student) => {
          const object = {
            ...student,
            vote : 0
        }
        await axios.put(`${process.env.BASE_URL}/section2/${student.id}`, object)
        })
        window.location.reload()
      })
  }
  return (
    <>
    <div className="container py-5">
        <h2 className='label'>Section 1</h2>
        <h5>Head Girls</h5>
        <hr />
        <Table data={headGirls}/>
        <h5>Head Boys</h5>
        <hr />
        <Table data={headBoys}/>
        <h5>Sports Captain</h5>
        <hr />
        <Table data={sportsCaptain}/>

        <button type="button" className="btn btn-danger mx-auto" onClick={clearSectionOne}>Reset section 1 votes</button>
        <br />
        <br />

        <h2 className='label'>Section 2</h2>
        <h5>House Captain</h5>
        <hr />
        <Table data={houseCaptain}/>
        <h5>Vice Captain</h5>
        <hr />
        <Table data={viceCaptain}/>
        <h5>Prefect</h5>
        <hr />
        <Table data={prefect}/>

        <button type="button" className="btn btn-danger mx-auto" onClick={clearSectionTwo}>Reset section 2 votes</button>

    </div>
    </>

  )
}

export default page
