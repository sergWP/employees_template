import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

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
        </div>
    )
}

export default App;