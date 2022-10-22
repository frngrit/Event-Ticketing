import Logo from '../assets/arctic-monkeys-logo.png'
import {Button} from '@mui/material'

export default function NavBar() {
    return (
        <>
            <nav
            className='
            hidden
            bg-zinc-700
            absolute
            top-5
            left-0
            right-0
            lg:mx-auto
            md:mx-auto
            sm:mx-auto
            sm:hidden
            md:hidden
            lg:flex
            rounded-xl
            w-3/4
            mr-auto
            py-4
            px-2
            bg-opacity-70
            hover:bg-opacity-90
            transition ease-in-out
            '
            >
                <div
                className='
                flex
                w-full
                text-white
                justify-between
                '
                >
                    <div
                    className='flex'
                    >
                        <a href= "https://arcticmonkeys.com"><img src={Logo} alt = "arctic-monkey-logo" className='h-12 hover:scale-125 duration-300 ease-in-out'/></a>
                        <a href= "https://arcticmonkeys.com" className='ml-1 px-2 hover:bg-zinc-700 rounded-xl transition ease-in-out font-bold p-3'>ARCTIC MONKEYS</a>
                    </div>
                    <div
                    className='
                    flex
                    space-x-6
                    pt-2
                    pr-4
                    '
                    >
                        <a href='https://arcticmonkeys.com'>Schedule</a>
                        <a href='https://arcticmonkeys.com'>Speakers</a>
                        <a href='https://arcticmonkeys.com'>Ticked</a>
                        <a href='https://arcticmonkeys.com'>Contact</a>
                        <Button color="inherit" variant="outlined" size="large" sx={{marginTop:-2}}>Login</Button>
                    </div>
                </div>
            </nav>
        </>
    )
}
