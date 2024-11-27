import PropTypes from 'prop-types';
import GameLoop from './Games/loop';
import Link from 'next/link';

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
                <Link href={link} className="text-[#FAFAFA] text-sm">
                    View All
                </Link>
            </div>
            <GameLoop items={items} />
        </div>
    );
}
GameSections.propTypes = {
    title: PropTypes.string.isRequired, 
    icon: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    items: PropTypes.array, 
  };
  