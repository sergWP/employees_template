const AppInfo = ({employees, increased}) => {
    return(
        <div className='
                p-4
                my-4
                bg-slate-400
                text-white
                rounded-md'>
            <h1 className='text-4xl'>Учет сотрудников</h1>
            <h2 className='text-2xl'>Общее число сотрудников: {employees}</h2>
            <h2 className='text-2xl'>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;