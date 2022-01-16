const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'star', label: 'На повышение'},
        {name: 'top', label: 'З/П больше $1000'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'bg-slate-400' : 'text-slate-600';
        return (
            <button 
                type="button" 
                onClick={() => props.onFilter(name)}
                filter={name}
                key={name}
                className={`outline outline-slate-400 outline-1 px-3 py-2 hover:bg-slate-500 hover:text-white ${clazz}`}>
                    {label}
            </button>
        )
    })

    return(
        <div className="text-white flex mt-4">
            {buttons}
        </div>
    )
}

export default AppFilter;