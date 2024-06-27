import React from 'react'
import './AddCart.css'
function AddCart() {
  return (
    <div className='addCart'>
        <div className="addCart-nav">
            <div className="addcart-title">

            <h2>Add Cart</h2>
            </div>
            <div className="add-right-con">
            <select >
                        <option value="">Sort by Price</option>
                        <option value="low">Low to High</option>
                        <option value="high">High to Low</option>
                    </select>
            </div>
        </div>
        <div className="addCart-con">

        </div>
    </div>
  )
}

export default AddCart