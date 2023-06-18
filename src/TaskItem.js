import React, { useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import HomeIcon from '@mui/icons-material/Home'
import CategoryIcon from '@mui/icons-material/Category'
import RouteIcon from '@mui/icons-material/Route'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined'
import { CheckBox } from '@mui/icons-material'
import ViewMoreDetails from './ViewMoreDetails'

function TaskItem (props) {
  const [viewButtonClick, setViewButtonClick] = useState(false)
  return (
    <>
      <div key={props.idk}>
        <div className='row mt-4 mb-4'>
          <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
            <h6 className='fw-bold'>From</h6>
            <p>{props.dataItems.moving_from}</p>
          </div>
          <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center d-flex justify-content-center align-items-center'>
            <ArrowRightAltIcon
              className='shadow'
              style={{
                color: 'orangered',
                borderRadius: '50%',
                fontSize: '35px',
                padding: '5px'
              }}
            />
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
            <h6 className='fw-bold'>To</h6>
            <p>{props.dataItems.moving_to}</p>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
            <h6 className='fw-bold'>Request#</h6>
            <p style={{ color: 'orangered', fontWeight: 'bold' }}>
              {props.dataItems.estimate_id}
            </p>
          </div>
        </div>

        <div className='row mt-4 mb-4'>
          <div className='col-auto'>
            <HomeIcon
              style={{
                color: 'orangered'
              }}
            />{' '}
            <span>{props.dataItems.property_size}</span>
          </div>
          <div className='col'>
            <CategoryIcon
              style={{
                color: 'orangered'
              }}
            />{' '}
            <span>{props.dataItems.total_items}</span>
          </div>
          <div className='col-auto'>
            <RouteIcon
              style={{
                color: 'orangered'
              }}
            />{' '}
            <span>{props.dataItems.distance}</span>
          </div>
          <div className='col-3'>
            <CalendarMonthIcon
              style={{
                color: 'orangered'
              }}
            />{' '}
            <span>{props.dataItems.date_created}</span>{' '}
            <EditOutlinedIcon
              style={{
                fontSize: '19px'
              }}
            />
          </div>
          <div className='col-2'>
            <CheckBox
              style={{
                color: 'orangered'
              }}
            />
            <span>Is flexible</span>
          </div>
          <div className='col-4'>
            <button
              onClick={() => setViewButtonClick(!viewButtonClick)}
              className='btn me-2'
              style={{
                border: '3px solid orangered',
                color: 'orangered'
              }}
            >
              View more details
            </button>
            <button
              className='btn'
              style={{
                border: '3px solid orangered',
                backgroundColor: 'orangered',
                color: 'white'
              }}
            >
              {props.dataItems.custom_status}
            </button>
          </div>
        </div>

        <div className='mt-4 mb-4'>
          <ReportProblemOutlinedIcon
            className='me-2'
            style={{
              color: 'orangered'
            }}
          />
          <span>
            <b>Disclamimer: </b>Please update your move date before two days of
            shifting
          </span>
        </div>

        <div
          className='view_more_details'
          style={{ display: `${viewButtonClick ? 'block' : 'none'}` }}
        >
          <ViewMoreDetails idk={props.idk} dataItems={props.dataItems} />
        </div>
      </div>
    </>
  )
}

export default TaskItem
