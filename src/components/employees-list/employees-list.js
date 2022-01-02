import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = () => {
    return(
        <ul className="bg-slate-200 px-4 py-2 my-4 rounded-md flex flex-col">
            <EmployeesListItem/>
            <EmployeesListItem/>
            <EmployeesListItem/>
        </ul>
    )
}

export default EmployeesList;