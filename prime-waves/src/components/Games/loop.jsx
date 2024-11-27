import Image from 'next/image';

export default function GameLoop({ items }){
    return (
        <div className='grid grid-cols-3 md:grid-cols-12 pt-3 gap-1'>
            {
                items.map((item, i) => {
                    return (
                        <a href={item.link} key={i}>
                            <Image src={`/games/${item.img}`} width={156} height={112} alt={item.img} />
                        </a>
                    );
                })
            }
        </div>
    );
}