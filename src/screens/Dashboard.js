import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import { addUser } from '../store/Actions'
import { connect } from "react-redux";

export default class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [{
                "id": 1,
                "name": "test1",
                "age": "11",
                "gender": "male",
                "email": "test1@gmail.com",
                "phoneNo": "9415346313"
            },
            {
                "id": 2,
                "name": "test2",
                "age": "12",
                "gender": "male",
                "email": "test2@gmail.com",
                "phoneNo": "9415346314"

            },
            {
                "id": 3,
                "name": "test3",
                "age": "13",
                "gender": "male",
                "email": "test3@gmail.com",
                "phoneNo": "9415346315"
            },
            {
                "id": 4,
                "name": "test4",
                "age": "14",
                "gender": "male",
                "email": "test4@gmail.com",
                "phoneNo": "9415346316"
            },
            {
                "id": 5,
                "name": "test5",
                "age": "15",
                "gender": "male",
                "email": "test5@gmail.com",
                "phoneNo": "9415346317"
            },
            {
                "id": 6,
                "name": "test6",
                "age": "16",
                "gender": "male",
                "email": "test6@gmail.com",
                "phoneNo": "9415346318"
            }
            ]
        }
    }

    renderItems(data, index) {
        return <View style={{ flexDirection: 'row',marginHorizontal:10 }} >
            <View style={{ borderWidth: 0.5, flex: 0.8 }} >
                <Text style={{ alignSelf: 'center', marginVertical: 5, }} >{data.id}</Text>
            </View>
            <View style={{ borderWidth: 0.5, flex: 1.5 }} >
                <Text style={{ alignSelf: 'center', marginVertical: 5, }} >{data.name}</Text>
            </View>
            <View style={{ borderWidth: 0.5, flex: 0.8 }} >
                <Text style={{ alignSelf: 'center', marginVertical: 5, }} >{data.age}</Text>
            </View>
            <View style={{ borderWidth: 0.5, flex: 1.5 }} >
                <Text style={{ alignSelf: 'center', marginVertical: 5, }} >{data.gender}</Text>
            </View>
            <View style={{ borderWidth: 0.5, flex: 3 }} >
                <Text style={{ alignSelf: 'center', marginVertical: 5, }} >{data.email}</Text>
            </View>
            <View style={{ borderWidth: 0.5, flex: 2 }} >
                <Text style={{ alignSelf: 'center', marginVertical: 5, }} >{data.phoneNo}</Text>
            </View>
        </View>
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF', }} >
                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold', alignSelf: 'center',marginVertical:10 }} >User Details</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) => this.renderItems(item, index)}
                    keyExtractor={(index, item) => JSON.stringify(item)}
                />
            </View>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//       state
//     }
//   }
// const mapDispatchToProps = (dispatch)=> {
//     return {
//       addUser: (data) => dispatch(addUser(data))
//     }
//   }

//  export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)