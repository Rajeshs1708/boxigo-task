import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

function InventoryList (props) {
  const [viewInventoryList, setViewInventoryList] = useState(false)

  return (
    <>
      <ul key={props.idk} className='list-group mt-3'>
        {props.dataItems.items.inventory.map(item => (
          <>
            <li
              onClick={() => setViewInventoryList(!viewInventoryList)}
              className='list-group-item fw-bold d-flex justify-content-between align-items-center'
              style={{ color: 'orangered', cursor: 'pointer' }}
            >
              <div>
                {item.displayName}
                <span
                  className='ms-2 badge rounded-pill'
                  style={{ backgroundColor: 'orangered' }}
                >
                  {item.category
                    .map(v => v.items.length)
                    .reduce((a, b) => a + b)}
                </span>
              </div>
              <span>
                <KeyboardArrowDownOutlinedIcon />
              </span>
            </li>

            <div
              className='pt-3'
              style={{ display: `${viewInventoryList ? 'block' : 'none'}` }}
            >
              <div className='d-flex flex-wrap'>
                {item.category.map((v, id) => (
                  <div className='col-4'>
                    <ul className='list-group p-2'>
                      <div id={id}>
                        <h5 className='fw-bold'>{v.name}</h5>
                        {v.items.map(v => (
                          <li className='list-group-item d-flex justify-content-between align-items-center'>
                            <div>
                              {v.displayName}
                              <p className='fw-bold fs-small'>
                                {v.type.map(v => v.option)}
                              </p>
                            </div>
                            <span className='fw-bold'>{v.order}</span>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </ul>
    </>
  )
}

export default InventoryList
