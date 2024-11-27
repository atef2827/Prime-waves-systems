import Link from "next/link";
import { useState } from "react";

export default function Header(){
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        if(isOpen){
            setOpen(false);
        }else{
            setOpen(true);
        }
    }

    return (
        <nav className="bg-[var(--bg-color)]">
            <div className="max-w-screen-2xl flex flex-wrap items-center md:justify-between justify-start mx-auto px-4 py-2">
                <button onClick={handleOpen} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#E1E1E1] rounded-lg md:hidden focus:outline-none focus:ring-2 mr-1" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="logo self-center text-[#FFD60A] font-bold whitespace">TEST</span>
                </Link>
                <div className={`${isOpen? '': 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0">
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#FFD60A] rounded md:bg-transparent md:p-0 md" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#E1E1E1] rounded hover:text-[#FFD60A] md:hover:bg-transparent md:border-0 md:p-0">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#E1E1E1] rounded hover:text-[#FFD60A] md:hover:bg-transparent md:border-0 md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-[#E1E1E1] rounded hover:text-[#FFD60A] md:hover:bg-transparent md:border-0 md:p-0">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="md:grow-0 grow"/>
                <div className="bg-[#0F0F0F] rounded-lg relative h-[42px] leading-[42px] flex align-middle pl-2">
                    <span className="text-white pr-2">10,303.56 ₽</span>
                    <button type="button" className="text-white bg-[#FFD60A] hover:bg-[#FFD60A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center">
                        <svg className="w-5 h-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.79162 2.5C10.108 2.5 10.3696 2.73501 10.411 3.04007L10.4168 3.12488L10.4178 9.16667H16.462C16.8072 9.16667 17.087 9.4465 17.087 9.79167C17.087 10.1081 16.8519 10.3696 16.5469 10.411L16.462 10.4167H10.4178L10.4195 16.4576C10.4195 16.8028 10.1398 17.0828 9.79462 17.0828C9.4782 17.0828 9.21662 16.8478 9.1752 16.5427L9.16945 16.4578L9.16779 10.4167H3.12695C2.78177 10.4167 2.50195 10.1368 2.50195 9.79167C2.50195 9.47525 2.73708 9.21375 3.04214 9.17233L3.12695 9.16667H9.16779L9.16679 3.12512C9.1667 2.77995 9.44645 2.5 9.79162 2.5Z" fill="#0F0F0F"/>
                        </svg>
                        <span className="sr-only">Add</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}