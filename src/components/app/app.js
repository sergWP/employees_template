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
                {id: 2, name: 'Dmitry K.', salary: 650, increase: false, star: false},
                {id: 3, name: 'Vladimir Z.', salary: 1300, increase: false, star: false},
                {id: 4, name: 'Vladimir 2.', salary: 700, increase: false, star: false},
                {id: 5, name: 'Vladimir 3.', salary: 1300, increase: false, star: false},
            ],
            term: '',
            filter: ''
        }
        this.maxId = 6;
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
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, star: !item.star}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterItm = (items, filter) => {
        switch (filter) {
            case "star":
                return items.filter(item => {
                    return item.star === true;
                })
            case "top":
                return items.filter(item => {
                    return item.salary > 1000;
                })
            default:
                return items.filter(item => {
                    return item;
                })
        }
    }

    onFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);
        const filterData = this.filterItm(data, filter);

        return(
            <div className='max-w-5xl mx-auto app'>
                <AppInfo
                    employees={employees}
                    increased={increased}/>
                <div className='bg-slate-200 p-4 rounded-md'>
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        onFilter={this.onFilter}
                        />
                </div>
                <EmployeesList 
                    data={visibleData, filterData}
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