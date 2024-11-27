export default function Footer(){
    let y = new Date().getFullYear();
    return (
        <footer className="bg-[var(--bg-color)]">
            <div className="px-4 pb-2 pt-6">
                {/* First Row */}
                <div className="grid grid-cols-2 pb-6 border-b-2" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                    <div className="">
                        <ul className="list-none text-[#E1E1E1] md:text-base text-[10px] gap-2">
                            <li>About</li>
                            <li>Auction Terms</li>
                            <li>Casino Bonus Terms</li>
                            <li>Sportsbook Bonus Terms</li>
                            <li>Terms & Conditions</li>
                            <li>Security & Privacy</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="list-none text-[#E1E1E1] md:text-base text-[10px] gap-2">
                            <li>Payments</li>
                            <li>Certificates</li>
                            <li>Game Explanations</li>
                            <li>Responsible Gaming</li>
                            <li>Condor-Affiliates</li>
                        </ul>
                    </div>
                </div>
                {/* / First Row */}
                {/* Second Row */}
                <div className="grid grid-cols-2 py-8">
                    <div className="text-[#E1E1E1] text-sm">
                        <p>"GAMBLING CAN BE ADDICTIVE, PLEASE PLAY RESPONSIBLY."</p>
                    </div>
                    <div className="flex gap-1 justify-end">
                        <img className="md:max-h-max max-h-[32px]" src="/footer/MGA-logo.svg" />
                        <img className="md:max-h-max max-h-[32px]" src="/footer/18-plus.svg" />
                        <img className="md:max-h-max max-h-[32px]" src="/footer/Gamcare-Logo.svg" />
                    </div>
                </div>
                {/* / Second Row */}
            </div>
            {/* Copy Rights */}
                <div className="bg-[var(--dark-bg)] py-6 text-center text-[#E1E1E1]">  
                    <p className="text-sm">Copyright© {y}</p>
                </div>
            {/* / Copy Rights */}
        </footer>
    );
}