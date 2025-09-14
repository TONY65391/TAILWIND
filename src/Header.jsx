import { useState } from "react";

const handleNavClick = () => {
    const nav = document.querySelector('header nav');
    if (nav.classList.contains('open')) nav.classList.remove('open');
    else{nav.classList.add('open');}
    console.log(nav.classList);
}

function Header(){

    return(
        <header className="flex items-center justify-between px-5 md:px-10 py-5">
            <div>
                <h1 className="text-[25px] text-orange-400">Levitating Monk</h1>
            </div>

            <div>
                <ul className="items-center space-x-10 hidden md:flex">
                    <li className=":after:"><a className="text-orange-400 cursor-normal" href="#">Home</a></li>
                    <li><a className="hover:text-orange-500" href="#">About</a></li>
                    <li><a className="hover:text-orange-500" href="#">Techniques</a></li>
                    <li><a className="hover:text-orange-500" href="#">Reach</a></li>
                    <li><a className="hover:text-orange-500" href="#">FAQ's</a></li>
                </ul>
            </div>

            <nav onClick={() => {handleNavClick()}} className="open:border-2 open:border-blue-500 md:hidden group h-10 w-10 cursor-pointer space-y-1 flex flex-col items-center justify-center">
                <div className="h-1 w-[60%] rounded-md bg-orange-500 group-hover:bg-white"></div>
                <div className="h-1 w-[60%] rounded-md bg-orange-500 group-hover:bg-white"></div>
                <div className="h-1 w-[60%] rounded-md bg-orange-500 group-hover:bg-white"></div>
            </nav>
        </header>
    )
}
export default Header;