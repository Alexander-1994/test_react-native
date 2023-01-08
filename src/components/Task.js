import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const Task = ({task}) => {
    const [isSelected, setSelection] = useState(false);

    return (
        <TouchableOpacity onPress={() => setSelection(isSelected => !isSelected)}>
            <View style={styles.task} >
                <CheckBox style={styles.check}
                        value={isSelected}
                        disabled />
                <Text style={isSelected ? styles.textAfter : styles.textBefore}>
                    {task}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    task: {
        width: 334,
        minHeight: 44,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 8,
        marginTop: 16,
    },
    check: {
        marginRight: 10,
    },  
    textBefore: {
        flex: 1,
        color: '#222F3E',
        textDecorationLine: 'none',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 28,
    },
    textAfter: {
        flex: 1,
        color: 'rgba(34, 47, 62, 0.5)',
        textDecorationLine: 'line-through',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 28,
    },
})

export default Task;