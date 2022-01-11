import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'Andrey V.', salary: 2000, increase: true, star: true},
                {id: 2, name: 'Dmitry K.', salary: 1200, increase: false, star: false},
                {id: 3, name: 'Vladimir Z.', salary: 1300, increase: false, star: false}
            ]
        }
        this.maxId = 4;
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            star: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
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
        })
    }

    onToggleIncrease = (id) => {
        /*
        // Varian 1
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, increase: !old.increase}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
        */
        // Variant 2
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`)
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return(
            <div className='max-w-5xl mx-auto app'>
                <AppInfo
                    employees={employees}
                    increased={increased}/>
                <div className='bg-slate-200 p-4 rounded-md'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm 
                    onAdd={this.addItem}/>
            </div>
        )
    }

}

export default App;