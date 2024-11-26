import Image from 'next/image';
import PropTypes from 'prop-types';

export default function GameSections ({ icon, title, link, items = [] }){
    return (
        <div className="section py-2">
            <div className="flex justify-start items-center">
                <div
                    className="icon w-6 h-6"
                    dangerouslySetInnerHTML={{ __html: icon }}
                />
                <h2 className="text-xl font-semibold text-[#FAFAFA] pl-2">{title}</h2>
                <div className="grow" />
                <a href={link} className="text-[#FAFAFA] text-sm">
                    View All
                </a>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-12 pt-3 gap-1'>
                {
                    items.map((item) => {
                        return (
                            <a href={item.link}>
                                <Image src={`/games/${item.img}`} width={156} height={112} alt={item.img} />
                            </a>
                        );
                    })
                }
            </div>
        </div>
    );
}
GameSections.propTypes = {
    title: PropTypes.string.isRequired, 
    icon: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    items: PropTypes.array, 
  };
  