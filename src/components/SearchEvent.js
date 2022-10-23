import { TextField, MenuItem, Button } from '@mui/material'
import { useState } from 'react'


export default function SearchEvent() {
    const searchInput = ['Search Event', 'Place']
    const timeData = ['07:00-11:00', '11:00-15:00', '13:00-17:00', '17:00-21:00']
    const [Time, setTime] = useState('')


    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <>
            <div
                className='
        flex
        mx-0
        w-full
        lg:absolute
        lg:top-[60vh]
        lg:left-0
        lg:right-0
        lg:mx-auto
        lg:rounded-lg
        lg:w-3/5
        pt-9
        pb-4
        px-10
        bg-zinc-700	
        transition
        ease-in-out
        bg-opacity-90
        hover:bg-opacity-100
        z-10
        '
            >
                <form
                    className='w-full'
                >
                    <div
                        className='
                        flex 
                        mx-auto 
                        xs:flex-col
                        sm:flex-col
                        md:flex-col
                        lg:flex-row
                        md:w-3/4
                        lg:w-3/4 
                        lg:space-x-[5vw]
                        lg-max:space-y-4
                        '
                    >
                        {searchInput.map((value, index) => {
                            return (
                                <TextField
                                    id="standard-search"
                                    label={`${value}`}
                                    variant="standard"
                                    inputProps={{ sx: { color: "#D6D1D3", fontWeight: 'bold' } }}
                                    key={index}
                                    InputLabelProps={{ sx: { color: "#D6D1D3" } }}
                                />
                            )
                        })}
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Time"
                            value={Time}
                            onChange={handleChange}
                            helperText="Please select the time you preferred"
                            variant="standard"
                            InputLabelProps={{ sx: { color: "#D6D1D3" } }}
                            inputProps={{ sx: { color: "#D6D1D3", fontWeight: 'bold' } }}
                        >
                            {timeData.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button color="warning" variant="outlined" size="large" sx={{marginBottom:3}}>Search</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
