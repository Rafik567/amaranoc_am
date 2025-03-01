import React from 'react'
import Filter from '../Filter/Filter'
import HomeAll from '../Home/HomeAll'

const BodyAll = () => {
    return (
        <>
            <div className='flex justify-evenly'>
                <Filter />
                <HomeAll/>
            </div>
        </>
    )
}

export default BodyAll