import BannerPic from '../assets/arctic-monkey-banner.jpg'

export default function Banner() {
    const fetchedImgSrc = '../assets/arctic-monkey-banner.jpg'

    return (
        <>
            <div className='
                lg:mx-15
                md:mx-8
                sm:mx-2
                flex
                '
            >
                <img
                    src={BannerPic}
                    // style={{backgroundImage: `url(${BannerPic})`,backgroundRepeat: "no-repeat",backgroundSize: "cover", height:"70vh"}}
                    className="
                    w-screen
                    rounded-xl
                    object-cover
                    h-[70vh]
                    shadow-2xl
                    mt-2
                    "
                />
            </div>
        </>
    )
}
