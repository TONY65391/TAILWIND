
function Landing(){
    return(
        <>
            <div className="h-screen block md:flex item-center justify-around md:mt-[0px] mt-[100px]">
                <div className="w-full px-10 flex flex-col items-center justify-center">

                    <p className="w-full text-[25px] tracking-widest">TonDev</p>

                    <h1 className="text-[35px] capitalize small-caps mb-3"><span className="text-orange-500">levitating</span> and <span className="text-orange-500">meditating monk</span> in a <span className="text-orange-500">serene landscape</span></h1>

                    <p className="leading-[1.5]">In a quiet mountain temple lived Tenzu, a monk draped in flowing orange robes, the color of dawn and renewal. He walked barefoot along stone paths, carrying no possessions but his staff and calm smile. The villagers whispered that his orange garments did not merely cover him—they glowed faintly at sunset, as if the fabric had absorbed the sky’s fire. Tenzu believed silence was a greater teacher than words, and those who sat with him often left lighter, as though a hidden burden had been lifted.</p>

                    <div className="w-full h-[50px] flex items-center md:space-x-5 space-x-2 mt-7">
                        <button className="border-2 border-orange-500 text-black tracking-widest font-semibold md:px-7 px-5 md:py-3 py-2 rounded-md bg-orange-500 hover:bg-transparent hover:text-white cursor-pointer small-caps">Subscribe</button>
                        <button className="md:px-7 px-5 md:py-3 py-2 border-2 border-orange-500 rounded-md font-semibold small-caps hover:bg-orange-500 hover:text-black cursor-pointer">Learn More</button>
                    </div>
                </div>

                <div className="w-full gaze">
                    <img className="w-full h-auto round-md myJumpAnimation" src="/src/assets/Floating_Monk_with_Dragon_Staff-removebg-preview.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Landing;