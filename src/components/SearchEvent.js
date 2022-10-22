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
        w-2/4
        flex
        flex-col
        mx-auto
        rounded-lg
        relative
        -top-8
        pt-9
        pb-4
        px-10
        bg-indigo-900	
        transition
        ease-in-out
        bg-opacity-70
        hover:bg-opacity-90
        z-10
        '
            >
                <form
                    className='w-full'
                >
                    <div
                        className='flex justify-between w-full'
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
                            label="Select"
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
                        <Button color="secondary" variant="outlined" size="large" sx={{marginBottom:3}}>Search</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
