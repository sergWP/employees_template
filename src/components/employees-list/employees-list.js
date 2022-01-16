import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise, onSalaryChange}) => {

    // .map - перебирает массив и возвращает новый, измененный массив
    const items = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            /*
            <EmployeesListItem user={item.name} salary={item.salary} />
            */
            <EmployeesListItem 
                key={id} 
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => {onToggleIncrease(id)}}
                onToggleRise={() => {onToggleRise(id)}}
                onSalaryChange={onSalaryChange}
                {...itemProps} />
        )
    });

    return(
        <ul className="bg-slate-200 px-4 py-2 my-4 rounded-md flex flex-col">
            {items}
        </ul>
    )
}

export default EmployeesList;