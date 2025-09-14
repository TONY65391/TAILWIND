function Header(){
    return(
        <header className="flex items-center justify-between px-10 py-3">
            <div>
                <h1 className="text-[25px] text-orange-500">Levitating Monk</h1>
            </div>

            <div>
                <ul className="items-center space-x-10 hidden md:flex">
                    <li className=":after:"><a className="text-orange-500 cursor-normal" href="#">Home</a></li>
                    <li><a className="hover:text-orange-500" href="#">About</a></li>
                    <li><a className="hover:text-orange-500" href="#">Techniques</a></li>
                    <li><a className="hover:text-orange-500" href="#">Reach</a></li>
                    <li><a className="hover:text-orange-500" href="#">FAQ's</a></li>
                </ul>
            </div>

            <nav className="md:hidden h-10 w-10 cursor-pointer space-y-1 flex flex-col items-center justify-center">
                <div className="h-1 w-[80%] rounded-md bg-orange-500"></div>
                <div className="h-1 w-[80%] rounded-md bg-orange-500"></div>
                <div className="h-1 w-[80%] rounded-md bg-orange-500"></div>
            </nav>
        </header>
    )
}

export default Header;