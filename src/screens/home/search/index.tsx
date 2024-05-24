import { View, Text } from 'react-native'
import React from 'react'
import SearchRoute from '../../../routes/searchRoute'
import { Header } from '../../../components/Header'

const SearchScreen = () => {
    return (
        <>
            <Header
                title='Search'
                placeholderText='Search'
                showSearchBar={true} />
            <SearchRoute />
        </>

    )
}

export default SearchScreen