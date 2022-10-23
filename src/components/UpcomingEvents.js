import React from 'react'
import {Button} from '@mui/material'
import Chip from './Chip'

export default function UpcomingEvents() {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const eventType = ['Concert', 'Fan meet', 'Pub-Bar']
    const Catagory = ['a', 'b', 'c'];
  return (
    <div
    className='
    z-0
    bg-white
    '
    >
        <div
        className='
        p-[10vw]
        '
        >
            <div
            className='
            flex
            justify-between
            items-center
            xs:flex-col
            sm:flex-col
            md:flex-col
            lg:flex-col
            xl:flex-row
            flex-wrap
            overflow-x-auto
            '
            >
                <h1 className='font-medium leading-tight mb-2 text-5xl text-slate-600'>Upcoming Events</h1>
                <div
                className='
                flex
                flex-col
                items-center
                sm:flex-col
                md:flex-col
                lg:flex-col
                xl:flex-row
                flex-wrap
                '
                >
                    <Chip title = 'Weekdays' choices = {weekDays}/>
                    <Chip title = 'Event Type' choices = {eventType}/>
                    <Chip title = 'Catagory' choices = {Catagory}/>
                </div>
            </div>
        </div>
    </div>
  )
}
