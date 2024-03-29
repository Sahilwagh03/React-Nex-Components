import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiSearchLine } from 'react-icons/ri';
import classNames from 'classnames';
import getPadding from './utils';

const SearchBar = ({ onChange, className, animated, IconColor }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        onChange(event.target.value); // Pass the current value directly
    };

    return (
        <>
            {/* {
            animated ? (
                <motion.div
                    className={classNames(
                        'flex flex-row justify-between items-center border border-gray-300 focus:outline-none focus:ring-2',
                        getPadding(isExpanded),
                        className
                    )}
                    initial={{ width: 'fit-content' }}
                    animate={{ width: isExpanded ? '100%' : 'fit-content' }}
                    transition={{ duration: 0.3 }}
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleChange}
                        placeholder="Search..."
                        className={classNames('focus:outline-none w-full', className)}
                        style={{ display: isExpanded ? 'block' : 'none' }} 
                    />
                    <div
                        className="cursor-pointer"
                        onClick={() => setIsExpanded(true)}
                    >
                        <RiSearchLine size={20} className='to-black dark:to-white'/>
                    </div>
                </motion.div>
            ) : */}
            {/* ( */}
            <label className={`relative block `}>
                <input
                    className={`w-full bg-white placeholder:font-italitc border border-slate-300 rounded-full py-2 pl-4 pr-4 focus:outline-none focus:ring-2 dark:border-2 dark:border-[#2E2E2E] dark:bg-[#1C1C1B] ${className}`}
                    placeholder="Search" type="text" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <RiSearchLine size={20} className='fill-black dark:fill-white' />
                </span>
            </label>
            {/* ) */}
            {/* } */}
        </>
    );
};

export default SearchBar;
