import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        color: '#6f6f6f',
    },
    text: {
        fontSize: 16,
        color: '#6f6f6f',
    },

    textDone: {
        fontSize: 16,
        color: '#6f6f6f',
        textDecorationLine: 'line-through',
    },
    whiteText: {
        fontSize: 16,
        color: '#FFF',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        width: Dimensions.get('screen').width * 0.6,
        borderRadius: 15,
        paddingLeft: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    addButton: {
        width: Dimensions.get('screen').width * 0.25,
        backgroundColor: '#5897fb',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
    },
    scrollContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20,
    },

    itemContainer: {
        paddingVertical: 20,
        borderBottomColor: '#6f6f6f',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    removeButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 15,
    },
});

export default styles;