import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from './actions'


const Index = (props) => {
    
    const {people, isFetching} = props.people;
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Redux App</Text>
            <TouchableHighlight onPress={props.getPeople} style={styles.button}>
                <Text style={styles.textButton}>Fetch Data</Text>
            </TouchableHighlight>
            {
                isFetching && <Text> Loading</Text>
            }
            {
                people.length ? (
                    people.map((person, index) => {
                        return (
                            <View key={index}>
                                <Text> Name: {person.name}</Text>
                                <Text> DOB: {person.birth_year}</Text>
                            </View>
                        )
                    })
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#db7eff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: 'white'
  }
});

function mapStateToProps(state){
    return {
        people: state.people
    }
}

function mapDispatchToProps(dispatch){
    return {
        getPeople: () => dispatch(fetchPeopleFromAPI())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index)
