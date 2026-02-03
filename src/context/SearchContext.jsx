import React , {createContext, useState} from 'react';

export const Searching = createContext({search : '', setSearch : () => {}, searchBrand : [], setSearchBrand : () => {}})

export function SearchProvider({children}){
    const [search, setSearch] = useState('');
    const [searchBrand, setSearchBrand] = useState([])

    return(
        <Searching.Provider value={{search, setSearch, searchBrand, setSearchBrand}}>
            {children}
        </Searching.Provider>
    );
};

export default SearchProvider;