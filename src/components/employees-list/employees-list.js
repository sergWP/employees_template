import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data}) => {

    const items = data.map(item => {
        return(
            /*
            <EmployeesListItem user={item.name} salary={item.salary} />
            */
            <EmployeesListItem {...item} />
        )
    });

    return(
        <ul className="bg-slate-200 px-4 py-2 my-4 rounded-md flex flex-col">
            {items}
        </ul>
    )
}

export default EmployeesList;