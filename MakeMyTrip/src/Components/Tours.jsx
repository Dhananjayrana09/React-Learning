import React from 'react'
import Card from './Card';
const Tours = (tours) => {

    

    return (
        <div className='container'>
            <div>
                <h2 className='title'>Make My Trip</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card {...tour} key={tour.id}/>;
                    })
                }
            </div>
        </div>
    )
}

export default Tours;