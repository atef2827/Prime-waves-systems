import Image from "next/image";
import { useState } from "react";

export default function StikyNav(){
    const [activeItem, setActive] = useState(2);
    let items = [
        { id: 1, title: "Slots", href: "slots", icon: `ico-slots.svg` },
        { id: 2, title: "Casino", href: "caisno", icon: `ico-casino.svg` },
        { id: 3, title: "Promo", href: "promo", icon: `ico-promo.svg` },
        { id: 4, title: "Sport", href: "soccer", icon: `ico-soccer.svg` },
        { id: 5, title: "Profile", href: "profile", icon: `ico-profile.svg` },
    ];
    return (
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[var(--dark-bg)]">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium gap-2">
                    {
                        items.map((item) => {
                            return (
                                <button key={item.id} type="button" className={`inline-flex flex-col items-center justify-center px-5 group ${item.id === activeItem? "opacity-100 text-white border-t-2 border-[#FFD60A]": "opacity-60 text-[#A8A8A8] border-t-2 border-[transparent]"}`}>
                                    <Image src={`/menu/${item.icon}`} width={24} height={24} alt={item.icon} />
                                    <span className="text-[11px] ">{item.title}</span>
                                </button>
                            );
                        })
                    }
                </div>
            </div>

    );
}