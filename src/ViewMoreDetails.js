import React from 'react'
import InventoryList from './InventoryList'

function ViewMoreDetails (props) {
  return (
    <>
      <div className='container additionalInfo p-2'>
        <div className='row'>
          <h5 className='col-3 fw-bold'>Additional Information</h5>
          <button className='col-2 offset-7 btn btn-dark'>
            Edit Additional Info
          </button>
        </div>

        <p>Test Data</p>

        <div className='row'>
          <h6 className='col-3 fw-bold'>House Details</h6>
          <button className='col-2 offset-7 btn btn-dark'>
            Edit House Details
          </button>
        </div>

        <b style={{ color: 'orangered' }}>Existing House Details</b>
        <div className='row'>
          <div className='col-3'>
            <p className='fw-bold'>Floor No.</p>
            <p>{props.dataItems.old_floor_no}</p>
          </div>
          <div className='col-3'>
            <p className='fw-bold'>Elevator Available.</p>
            <p>{props.dataItems.old_elevator_availability}</p>
          </div>
          <div className='col-5'>
            <p className='fw-bold'>
              Distance from Elevator/ Staircase to truck.
            </p>
            <p>11 meters</p>
          </div>
        </div>

        <b style={{ color: 'orangered' }}>New House Details</b>
        <div className='row'>
          <div className='col-3'>
            <p className='fw-bold'>Floor No.</p>
            <p>{props.dataItems.new_floor_no}</p>
          </div>
          <div className='col-3'>
            <p className='fw-bold'>Elevator Available.</p>
            <p>{props.dataItems.new_elevator_availability}</p>
          </div>
          <div className='col-5'>
            <p className='fw-bold'>
              Distance from Elevator/ Staircase to truck.
            </p>
            <p>11 meters</p>
          </div>
        </div>
      </div>

      <div className='container inventoryInfo p-2'>
        <div className='row mt-4'>
          <h5 className='col-3 fw-bold'>Inventory Details</h5>
          <button className='col-2 offset-7 btn btn-dark'>
            Edit Inventory
          </button>
        </div>

        <div className='row'>
          <div className='col-12'>
            <InventoryList idk={props.idk} dataItems={props.dataItems} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewMoreDetails
