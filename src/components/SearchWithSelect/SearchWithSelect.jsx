import React, { useState } from 'react'

const SearchWithSelect = ({ value, defaultOptions, loadOption }) => {
    const [searchValue, setSearchValue] = useState('')
    useState(()=>{
        
    },[searchValue])
    return (
        <div className='flex flex-row  relative flex-wrap items-center px-4 py-2 w-full rounded-full border-2 border-gray-300 py-2 px-4 w-64 focus:outline-none focus:ring-2'>

            {/* Search options */}
            <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className='w-full outline-none mr-2 focus:outline-none'
                placeholder='Search With Select'
            />

            {/* Option Pills */}
            <div>

            </div>

            {/* Option List */}
            <div className='absolute min-w-[300px] min-h-[350px]  top-[115%] border-2 border-gray-300 rounded-md '>

            </div>

            {/* Option Pills OutSide */}
            <div>

            </div>
        </div>
    )
}

export default SearchWithSelect