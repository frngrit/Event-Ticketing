import Logo from '../assets/arctic-monkeys-logo.png'

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
            sm:flex
            md:flex
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
                text-white
                '
                >
                    <a href= "https://arcticmonkeys.com"><img src={Logo} alt = "arctic-monkey-logo" className='h-12'/></a>
                    <button href= "https://arcticmonkeys.com" className='ml-1 px-2 hover:bg-zinc-700 rounded-xl transition ease-in-out font-bold p-3'>ARCTIC MONKEYS</button>
                </div>
            </nav>
        </>
    )
}
