import Logo from '../assets/arctic-monkeys-logo.png'
import {Button} from '@mui/material'
import MobileMenu from './MobileMenu'

export default function NavBar() {
    const data = ['Schedule','Speakers','Ticker','Contact']
    return (
        <>
            <nav
            className='
            flex
            bg-zinc-700
            absolute
            md:top-5 //not top5 when more than 300
            left-0
            right-0
            lg:mx-auto
            md:mx-auto
            sm:mx-auto
            rounded-lg
            w-3/4
            md-max:w-full
            mr-auto
            py-4
            px-2
            md:bg-opacity-70
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
                        <a href= "https://arcticmonkeys.com"><img src={Logo} alt = "arctic-monkey-logo" className='h-12 hover:scale-125 duration-300 ease-in-out lg-max:hidden'/></a>
                        <a href= "https://arcticmonkeys.com" className='ml-1 px-2 hover:bg-zinc-700 rounded-xl transition ease-in-out font-bold p-3 md-max:text-base'>ARCTIC MONKEYS</a>
                    </div>
                    <div
                    className='
                    flex
                    space-x-6
                    pt-2
                    pr-4
                    md-max:hidden
                    '
                    >
                        {data.map((value,index)=> {
                            return (
                                <a href='https://arcticmonkeys.com' key={index}>{value}</a>
                            )
                        })}
                        <Button color="inherit" variant="outlined" size="large" sx={{marginTop:-2}}>Login</Button>
                    </div>
                    <div
                    className='
                    md:hidden
                    flex
                    pt-1
                    '
                    >
                        <MobileMenu data={data} />
                    </div>
                </div>
            </nav>
        </>
    )
}
