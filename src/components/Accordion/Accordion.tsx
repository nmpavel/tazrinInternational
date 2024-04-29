'use client';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type Props = {
    children?: React.ReactNode;
    default?: boolean;
    title: string;
    titleClass?: string;
    contentClass?: string;
    icons?: {
        open: React.ReactNode;
        close: React.ReactNode;
    };
};

const Accordion = (p: Props) => {
    const [active, setActive] = React.useState(p.default || false);

    return (
        <div className="border-b mb-4">
            <div
                onClick={() => setActive(!active)}
                className={`${p.titleClass} p-1 md:p-3 md:text-2xl font-medium flex justify-between items-center transition-all duration-1000 cursor-pointer rounded-r-md rounded-t-md rounded-b-none`}
            >
                <div className='prose max-w-full' dangerouslySetInnerHTML={{ __html: p.title }} />
                <button className="border-none bg-transparent text-2xl">
                    {p.icons ? (
                        active ? (
                            p.icons.close
                        ) : (
                            p.icons.open
                        )
                    ) : active ? (
                        <AiOutlineMinus className="text-pc" />
                    ) : (
                        <AiOutlinePlus />
                    )}
                </button>
            </div>

            <div
                className={`${p.contentClass
                    } overflow-hidden transition-all max-h-0 duration-700 text-xl font-medium ${active ? 'max-h-96 mb-4' : ''
                    }`}
            >
                {p.children}
            </div>
        </div>
    );
};

export default Accordion;
