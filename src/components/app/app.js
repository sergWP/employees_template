import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

/*
function WhoAmI({name, surname, url, urlText}) {
    return(
        <div>
            <h1>My name {name}, surname - {surname}</h1>
            <a href={url}>{urlText}</a>
        </div>
    )
}

function AmI({name, surname, url, urlText}) {
    return(
        <div>
            <h1>My name {name.firstName}, surname - {surname}</h1>
            <a href={url}>{urlText}</a>
        </div>
    )
}

function User({name, surname, url, urlText}) {
    return(
        <div>
            <h1>My name {name()}, surname - {surname}</h1>
            <a href={url}>{urlText}</a>
        </div>
    )
}
*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'Andrey V.', salary: 2000, increase: true},
                {id: 2, name: 'Dmitry K.', salary: 1200, increase: false},
                {id: 3, name: 'Vladimir Z.', salary: 1300, increase: false}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // удаляем объект из стейта

            // variant 1
            //const index = data.findIndex(elem => elem.id === id);
            //const before = data.slice(0, index);
            //const after = data.slice(index + 1);
            //const newData = [...before, ...after];

            //return {
            //    data: newData
            //}

            //variant 2
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    render() {
        return(
            <div className='max-w-5xl mx-auto app'>
                <AppInfo/>
                <div className='bg-slate-200 p-4 rounded-md'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
            </div>
        )
    }

}

export default App;