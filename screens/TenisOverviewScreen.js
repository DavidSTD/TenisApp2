import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLayoutEffect } from 'react'

import { TENIS, CATEGORIES } from "../data/dummy_data";
import TeniItem from "../components/TeniItem";

function TenisOverviewScreen({ route, navigation }){
    const catId = route.params.categoryId
    console.log('catId', catId)

    const displayedTenis = TENIS.filter((teniItem) => {
        return teniItem.categoryIds.indexOf(catId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    function renderTeniItem(itemData) {
    
        return(

            <TeniItem
                id={itemData.item.id} 
                title={itemData.item.title}
                imageUrl={itemData.item.imageUrl}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                duration={itemData.item.duration}
            />
        )

    }

    return(
        <View style={styles.container}>
            <Text>Tenis Overview - { catId }</Text>
            <FlatList 
                data={displayedTenis}
                keyExtractor={(item) => item.id}
                renderItem={renderTeniItem}
            />
        </View>
    )
}

export default TenisOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})