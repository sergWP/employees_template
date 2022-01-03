import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

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

function App() {
    return(
        <div className='max-w-5xl mx-auto app'>
            <AppInfo/>
            <div className='bg-slate-200 p-4 rounded-md'>
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList/>
            <EmployeesAddForm/>
            <WhoAmI name='John' surname='Smith' url='react.io' urlText='REACT'/>
            <AmI name={{firstName: 'Alex'}} surname='Claus' url='react.io' urlText='REACT'/>
            <User name={() => { return 'Peter' }} surname='Forter' url='react.io' urlText='REACT'/>
        </div>
    )
}

export default App;