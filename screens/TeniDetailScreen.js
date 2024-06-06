import { Image, Text, View, StyleSheet, ScrollView } from "react-native"

import { TENIS } from '../data/dummy_data'
import TeniDetails from "../components/TeniDetails"
function TeniDetailScree({route, navigation}) {
    const teniId = route.params.teniId

    const selectedTeni = TENIS.find((teni) => teni.id === teniId)

    return(
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedTeni.imageUrl }} />
            <Text style={styles.title}>{selectedTeni.title}</Text>
            <MealDetails 
                duration={selectedTeni.duration}
                complexity={selectedTeni.complexity}
                affordability={selectedTeni.affordability}
            />
            <View>
                <Text style={styles.subtitle}>Colores</Text>
                {selectedTeni.colors.map(colors => <Text style={styles.textContent} key={colors}>{colors}</Text>)}
                <Text style={styles.subtitle}>Talla</Text>
                {selectedTeni.size.map(size => <Text style={styles.textContent} key={size}>{size}</Text>)}
            </View>
        </ScrollView>
    )

}

export default TeniDetailScree

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 4,
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    textContent: {
        fontSize: 14,
        margin: 4,
        marginVertical: 3,
        marginHorizontal: 24    
    }


})