import React from 'react'
import SearchRoute from '../../../routes/searchRoute'
import { Header } from '../../../components/Header'
import { FabButton } from '../../../components'

const SearchScreen = () => {
    return (
        <>
            <Header
                placeholderText='Search'
                showSearchBar={true} />
            <SearchRoute />
            <FabButton icon={'plus'} onPress={() => console.log('dsfsdf')} />
        </>

    )
}

export default SearchScreen