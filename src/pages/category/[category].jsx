import GameLoop from "@/components/Games/loop";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

export const metadata = {
    title: 'Prime Waves test page',
    description: 'Prime Waves test page - Any description.',
    openGraph: {
        title: 'Prime Waves test page',
        description: 'Prime Waves test page - Any description.',
        images: [
          {
            url: 'https://mo-atef.com/static/mo-atef.png', 
            width: 240,
            height: 100,
            alt: 'My logo', 
          },
        ],
      },
}

export default function Page(){
    const [ count, setCount ] = useState(12);
    const [ sorting, setSorting ] = useState('a');
    const [ searchTerm, setSearchTerm ] = useState();
    let orignalArray = [
        { id: 1, name: "a", img: "game-card.png", link: "#" },
        { id: 2, name: "b", img: "game-card-2.png", link: "#" },
        { id: 3, name: "c", img: "game-card-3.png", link: "#" },
        { id: 4, name: "d", img: "game-card-4.png", link: "#" },
        { id: 5, name: "e", img: "game-card-5.png", link: "#" },
        { id: 6, name: "d", img: "game-card-6.png", link: "#" },
        { id: 7, name: "g", img: "game-card-6.png", link: "#" },
        { id: 8, name: "h", img: "game-card-7.png", link: "#" },
        { id: 9, name: "k", img: "game-card-8.png", link: "#" },
        { id: 10, name: "l", img: "game-card-9.png", link: "#" },
        { id: 11, name: "m", img: "game-card-10.png", link: "#" },
        { id: 12, name: "n", img: "game-card-11.png", link: "#" },
    ];
    const [ games, setGames ] = useState(orignalArray);
    const [ otherGames ] = useState( [
        { id: 1, name: "a", img: "game-card.png", link: "#" },
        { id: 2, name: "b", img: "game-card-2.png", link: "#" },
        { id: 3, name: "c", img: "game-card-3.png", link: "#" },
        { id: 4, name: "d", img: "game-card-4.png", link: "#" },
        { id: 5, name: "e", img: "game-card-5.png", link: "#" },
        { id: 6, name: "d", img: "game-card-6.png", link: "#" },
        { id: 7, name: "g", img: "game-card-6.png", link: "#" },
        { id: 8, name: "h", img: "game-card-7.png", link: "#" },
        { id: 9, name: "k", img: "game-card-8.png", link: "#" },
        { id: 10, name: "l", img: "game-card-9.png", link: "#" },
        { id: 11, name: "m", img: "game-card-10.png", link: "#" },
        { id: 12, name: "n", img: "game-card-11.png", link: "#" },
        { id: 1, name: "a", img: "game-card.png", link: "#" },
        { id: 2, name: "b", img: "game-card-2.png", link: "#" },
        { id: 3, name: "c", img: "game-card-3.png", link: "#" },
        { id: 4, name: "d", img: "game-card-4.png", link: "#" },
        { id: 5, name: "e", img: "game-card-5.png", link: "#" },
        { id: 6, name: "d", img: "game-card-6.png", link: "#" },
    ]);
    const router = useRouter();

    let sections = [
        { id: 1, title: "Popular Games", icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5383 4.29449C12.8615 4.05075 13.182 3.86356 13.4688 3.73169C13.5555 5.85881 14.5955 7.45829 15.5965 8.87109C15.6881 9.00031 15.779 9.12767 15.8688 9.25354C16.9522 10.7721 17.8801 12.0725 17.9813 13.794C18.0979 15.7759 17.6036 17.4514 16.6453 18.6176C15.6986 19.7696 14.2385 20.5 12.25 20.5C10.1887 20.5 8.6396 19.9712 7.55849 19.0843C6.48244 18.2015 5.79472 16.9026 5.56502 15.2123C5.33902 13.5492 5.74149 12.3672 6.17625 11.6092C6.26176 11.4601 6.34906 11.3266 6.43394 11.2084L6.74894 11.8066C7.29998 12.8532 8.57839 13.2789 9.64684 12.7716C10.9525 12.1516 11.2311 10.5595 10.8165 9.4416C10.5264 8.65954 10.3721 7.70456 10.7077 6.74841C11.084 5.67629 11.7985 4.85253 12.5383 4.29449ZM6.15636 9.3231L6.15395 9.32491L6.15 9.3279L6.13963 9.33586C6.13164 9.34204 6.12151 9.34999 6.10942 9.35973C6.08524 9.37919 6.05314 9.40581 6.01442 9.43966C5.93703 9.50732 5.83284 9.6042 5.71236 9.73104C5.47171 9.98437 5.16368 10.3598 4.8751 10.8629C4.29291 11.8779 3.80368 13.3906 4.07868 15.4142C4.34997 17.4107 5.18833 19.0801 6.60711 20.244C8.02084 21.4038 9.93533 22 12.25 22C14.6375 22 16.5425 21.1054 17.8042 19.5699C19.0544 18.0486 19.6122 15.9741 19.4787 13.706C19.3508 11.5302 18.1656 9.87945 17.1188 8.42123C17.0177 8.28043 16.9179 8.14142 16.8205 8.00391C15.6785 6.39222 14.7768 4.90657 14.9959 2.82863C15.0182 2.61721 14.9497 2.40625 14.8075 2.24824C14.6652 2.09023 14.4626 2 14.25 2C13.868 2 13.4309 2.11822 13.0077 2.29599C12.5715 2.47923 12.0984 2.74751 11.6351 3.09694C10.7104 3.79438 9.78589 4.84563 9.29236 6.25159C8.80006 7.65408 9.04947 8.99089 9.41008 9.9632C9.64689 10.6017 9.39005 11.233 9.00347 11.4165C8.66159 11.5789 8.25252 11.4427 8.07619 11.1078L7.26887 9.57452C7.16673 9.38052 6.98481 9.24093 6.77099 9.19248C6.55717 9.14403 6.33215 9.19209 6.15636 9.3231Z" fill="#E1E1E1"/></svg>', link: "all", games: games },
        { id: 2, title: "New Games", icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9989 3C18.2398 3 18.4638 3.11546 18.6038 3.30649L18.6585 3.39288L21.922 9.42119L21.9599 9.51408L21.972 9.5539L21.9921 9.65608L21.9979 9.75C21.9979 9.81904 21.9886 9.88589 21.9711 9.94938L21.9237 10.0754L21.8862 10.144C21.8641 10.1796 21.839 10.2136 21.8107 10.2457L21.8705 10.1683L21.846 10.2025L12.5962 20.7081C12.5161 20.8144 12.4128 20.8917 12.2989 20.94L12.2007 20.973L12.1235 20.9904L11.9993 21.0003L11.899 20.9937L11.7811 20.9682C11.7209 20.9509 11.6623 20.9254 11.6075 20.8922L11.5983 20.8847C11.5512 20.8564 11.5072 20.8218 11.4672 20.7815L2.17809 10.2352L2.15185 10.2025L2.11178 10.144C2.0563 10.0544 2.01921 9.9523 2.00569 9.84286L2 9.75L2.00285 9.68414L2.01606 9.59539C2.02225 9.56547 2.03015 9.53671 2.03966 9.5087L2.06248 9.45021L2.09048 9.39288L5.33943 3.39288C5.45413 3.18107 5.66229 3.03913 5.89695 3.00695L5.99895 3H17.9989ZM14.997 10.5H8.998L11.9989 18.187L14.997 10.5ZM7.389 10.5H4.409L9.76 16.574L7.389 10.5ZM19.587 10.5H16.608L14.24 16.57L19.587 10.5ZM8.971 4.5H6.44495L4.007 9H7.531L8.971 4.5ZM13.4509 4.5H10.5459L9.105 9H14.89L13.4509 4.5ZM17.5519 4.5H15.026L16.466 9H19.988L17.5519 4.5Z" fill="#E1E1E1"/></svg>', link: "new", games: games },
        { id: 3, title: "Casino Games", icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM21.13 11.57H19.6C19.5381 10.5263 19.266 9.50593 18.8 8.57L20.13 7.8C20.71 8.93 21.07 10.2 21.13 11.56V11.57ZM19.69 7.06L18.36 7.84C17.7843 6.96434 17.0357 6.21567 16.16 5.64L16.94 4.31C18.0402 5.03017 18.9798 5.9698 19.7 7.07L19.69 7.06ZM12.43 2.87C13.79 2.94 15.06 3.29 16.19 3.87L15.42 5.2C14.51 4.74 13.5 4.46 12.42 4.4V2.87H12.43ZM11.57 2.87V4.4C10.5 4.47 9.48 4.74 8.57 5.2L7.8 3.87C8.93 3.29 10.2 2.93 11.56 2.87H11.57ZM7.06 4.31L7.83 5.64C6.97 6.21 6.21 6.97 5.64 7.83L4.31 7.06C5.03017 5.9598 5.9698 5.02017 7.07 4.3L7.06 4.31ZM3.87 7.81L5.2 8.58C4.74 9.49 4.46 10.5 4.4 11.58H2.87C2.94 10.22 3.29 8.95 3.87 7.82V7.81ZM2.87 12.43H4.4C4.47 13.5 4.74 14.52 5.2 15.43L3.87 16.2C3.29 15.07 2.93 13.8 2.87 12.44V12.43ZM4.31 16.94L5.64 16.16C6.21 17.03 6.97 17.79 7.84 18.36L7.06 19.69C5.9598 18.9698 5.02017 18.0302 4.3 16.93L4.31 16.94ZM11.57 21.13C10.2599 21.0672 8.97818 20.7264 7.81 20.13L8.58 18.8C9.49 19.26 10.5 19.54 11.58 19.6V21.13H11.57ZM11.57 18.73C10.66 18.68 9.79 18.43 9.01 18.04C8.74531 17.924 8.49386 17.7798 8.26 17.61C7.51007 17.1201 6.86992 16.4799 6.38 15.73C6.21019 15.4961 6.06603 15.2447 5.95 14.98C5.56 14.2 5.31 13.33 5.27 12.42C5.24 12.28 5.24 12.13 5.24 11.99C5.24 11.85 5.24 11.7 5.27 11.56C5.31 10.65 5.56 9.78 5.95 9C6.06 8.74 6.21 8.49 6.38 8.25C6.87 7.5 7.51 6.86 8.26 6.37C8.5 6.2 8.75 6.05 9.01 5.94C9.79 5.55 10.66 5.3 11.57 5.26C11.71 5.23 11.86 5.23 12 5.23C12.14 5.23 12.29 5.23 12.43 5.26C13.34 5.3 14.21 5.55 14.99 5.94C15.25 6.05 15.5 6.2 15.74 6.37C16.49 6.86 17.13 7.5 17.62 8.25C17.79 8.49 17.94 8.74 18.05 9C18.44 9.78 18.69 10.65 18.74 11.56C18.76 11.7 18.76 11.85 18.76 11.99C18.76 12.13 18.76 12.28 18.74 12.42C18.69 13.33 18.44 14.2 18.05 14.98C17.94 15.24 17.79 15.49 17.62 15.73C17.13 16.48 16.49 17.12 15.74 17.61C15.5 17.78 15.25 17.93 14.99 18.04C14.21 18.43 13.34 18.68 12.43 18.73C12.29 18.75 12.14 18.75 12 18.75C11.86 18.75 11.71 18.75 11.57 18.73ZM12.43 21.13V19.6C13.5 19.53 14.52 19.26 15.43 18.8L16.2 20.13C15.07 20.71 13.8 21.07 12.44 21.13H12.43ZM16.94 19.69L16.17 18.36C17.03 17.79 17.79 17.03 18.36 16.17L19.69 16.94C18.9698 18.0402 18.0302 18.9798 16.93 19.7L16.94 19.69ZM20.13 16.19L18.8 15.42C19.26 14.51 19.54 13.5 19.6 12.42H21.13C21.0672 13.7301 20.7264 15.0118 20.13 16.18V16.19Z" fill="#E1E1E1"/><path d="M12.51 11.56V9.09999C12.98 9.28999 13.3 9.72999 13.3 10.25C13.3 10.53 13.52 10.75 13.8 10.75C14.08 10.75 14.3 10.53 14.3 10.25C14.3 9.17999 13.53 8.27999 12.51 8.05999V7.48999C12.51 7.20999 12.29 6.98999 12.01 6.98999C11.73 6.98999 11.51 7.20999 11.51 7.48999V8.05999C10.49 8.27999 9.71997 9.17999 9.71997 10.25C9.71997 11.32 10.49 12.22 11.51 12.44V14.9C11.04 14.71 10.72 14.27 10.72 13.75C10.72 13.47 10.5 13.25 10.22 13.25C9.93997 13.25 9.71997 13.47 9.71997 13.75C9.71997 14.82 10.49 15.72 11.51 15.94V16.51C11.51 16.79 11.73 17.01 12.01 17.01C12.29 17.01 12.51 16.79 12.51 16.51V15.94C13.53 15.72 14.3 14.82 14.3 13.75C14.3 12.68 13.53 11.78 12.51 11.56ZM11.51 9.09999V11.4C11.04 11.21 10.72 10.77 10.72 10.25C10.72 9.72999 11.05 9.28999 11.51 9.09999ZM13.3 13.75C13.3 14.27 12.97 14.71 12.51 14.9V12.6C12.98 12.79 13.3 13.23 13.3 13.75Z" fill="#E1E1E1"/></svg>', link: "slots", games: games },
        { id: 4, title: "Sports Games", icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0353 15.096C17.4023 15.5979 16.6737 15.9844 15.8811 16.2236C15.9592 16.7203 15.9998 17.2294 15.9999 17.748C19.4504 16.8599 21.9999 13.7277 21.9999 10C21.9999 9.35266 21.923 8.72328 21.7779 8.12048C21.6044 7.39981 21.3333 6.71712 20.9794 6.08722C20.2589 4.80467 19.1951 3.74093 17.9125 3.02041C17.2826 2.66653 16.6 2.39544 15.8794 2.22192C15.2766 2.07681 14.6472 2 13.9999 2C10.2722 2 7.14004 4.54955 6.25195 8C6.77053 8.00011 7.27964 8.0407 7.77631 8.11879C8.01554 7.32626 8.40201 6.59762 8.90391 5.96465L18.0353 15.096ZM19.0959 14.0353L15.0606 10L15.822 9.23859C16.5103 9.71849 17.3472 9.99991 18.2499 9.99991C19.0637 9.99991 19.8241 9.77119 20.4702 9.37454C20.4899 9.58037 20.4999 9.78901 20.4999 10C20.4999 11.5247 19.975 12.9268 19.0959 14.0353ZM16.2239 3.89042C16.8843 4.13086 17.4947 4.47532 18.0353 4.90399L15.8484 7.09083C15.6265 6.69414 15.4999 6.2368 15.4999 5.74991C15.4999 5.03289 15.7743 4.37996 16.2239 3.89042ZM14.7613 8.17794L13.9999 8.93934L9.96457 4.90399C11.0732 4.02496 12.4752 3.5 13.9999 3.5C14.2109 3.5 14.4195 3.51005 14.6252 3.52969C14.2286 4.17584 13.9999 4.93617 13.9999 5.74991C13.9999 6.65265 14.2814 7.48965 14.7613 8.17794ZM20.1095 7.77592C19.6199 8.22548 18.967 8.49991 18.2499 8.49991C17.7631 8.49991 17.3058 8.3734 16.9091 8.15147L19.0959 5.96465C19.5246 6.50522 19.869 7.11558 20.1095 7.77592ZM4.25 10.5C3.83579 10.5 3.5 10.8358 3.5 11.25V13.25C3.5 17.2541 6.74594 20.5 10.75 20.5H12.75C13.1642 20.5 13.5 20.1642 13.5 19.75V17.75C13.5 13.7459 10.2541 10.5 6.25 10.5H4.25ZM2 11.25C2 10.0074 3.00736 9 4.25 9H6.25C11.0825 9 15 12.9175 15 17.75V19.75C15 20.9926 13.9926 22 12.75 22H10.75C5.91751 22 2 18.0825 2 13.25V11.25ZM7.78033 13.7197C7.48744 13.4268 7.01256 13.4268 6.71967 13.7197C6.42678 14.0126 6.42678 14.4874 6.71967 14.7803L9.21967 17.2803C9.51256 17.5732 9.98744 17.5732 10.2803 17.2803C10.5732 16.9874 10.5732 16.5126 10.2803 16.2197L7.78033 13.7197Z" fill="#E1E1E1"/></svg>', link: "live", games: games },
    ];

    const handleSorting = (e) => {
        let val = e.target.value;
        setSorting(val);
        let sortedGames;
        if (val === 'a') {
            sortedGames = games.sort((a, b) => a.name.localeCompare(b.name));
        }else{
            sortedGames = games.sort((a, b) => b.name.localeCompare(a.name));
        }
        setGames(sortedGames);
    }
    const handleFilter = (e) => {
        let searchTerm = e.target.value;
        setSearchTerm(searchTerm);
        if(!searchTerm){
            setGames(orignalArray);
            return false;
        }
        const filteredGames = games.filter((game) =>
            game.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setCount(filteredGames.length);
        setGames(filteredGames);
    }
    const handleExtend = (e) => {
        let newArr = [...games, ...otherGames];
        setGames(newArr);
        setCount(newArr.length);
    }

    let id = router.query.category;

    if(!id){
        return null;
    }

    return (
        <Layout hideNav={true} title={sections[1-id].title} link={'/'}>
            <div className="grid grid-cols-12 gap-4 max-w-sm mx-auto">
                <div className="col-span-7">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                            <svg className="w-4 h-4 text-[#fff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" onChange={handleFilter} id="default-search" className="block w-full p-3 ps-12 text-sm text-white border rounded-lg bg-[#282828] border-0 focus:ring-blue-500 focus:border-blue-500 placeholder-[#C8C8C8]" placeholder="Search Game" />
                    </div>
                </div>
                <div className="col-span-5">
                    <button type="button" className="focus:outline-none text-white bg-[#28B328] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-3 me-2 mb-2 w-[100%]">I’m Feeling Lucky</button>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-2 mb-2 max-w-sm mx-auto">
                <div className="col-span-6">
                    <select id="providers" className="bg-[#282828] text-[#E1E1E1] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Providers</option>
                        <option value="op1">Option 1</option>
                        <option value="op2">Option 2</option>
                        <option value="op3">Option 3</option>
                    </select>
                </div>
                <div className="col-span-6">
                    <select onChange={handleSorting} id="letters" className="bg-[#282828] text-[#E1E1E1] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected={sorting === "a"} value="a">A-Z</option>
                        <option selected={sorting === "z"} value="z">Z-A</option>
                    </select>
                </div>
            </div>
            <GameLoop items={games} />
            <div className="text-center mt-5 mb-8">
                {
                    count !== 30 && !searchTerm?
                        <button onClick={handleExtend} type="button" className="focus:outline-none text-white bg-[#333333] hover:opacity-90 focus:ring-4 font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2">Load More</button>
                    :null
                }
                <p className="text-[10px] text-[#C8C8C8] mt-2">Displaying <span className="text-white">{count}</span> of <span className="text-white">30</span> games</p>
            </div>
        </Layout>
    );
}