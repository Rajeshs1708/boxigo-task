import axios from 'axios'
import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem'

function Task () {
  const [getData, setGetData] = useState([])
  const getAllData = () => {
    axios
      .get('http://test.api.boxigo.in/sample-data/')
      .then(res => {
        setGetData(res.data.Customer_Estimate_Flow)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <>
      <div className='container'>
        <div className='p-3'>
          <h3>My Moves</h3>
          <ul className='list-group'>
            {getData.map((item, idk) => (
              <li className='list-group-item'>
                <TaskItem idk={idk} dataItems={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Task
