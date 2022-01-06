import {Component} from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div className="bg-slate-200 p-4">
                <h3 className="pb-4 text-lg">Добавьте нового сотрудника</h3>
                <form className="flex">

                    <span className="grow">
                        <input type="text"
                            className="py-2 px-4 rounded-md w-full"
                            placeholder="Имя"/>
                    </span>

                    <span className="grow px-4">
                        <input type="number"
                            className="py-2 px-4 rounded-md w-full"
                            placeholder="З/П в $"/>
                    </span>

                    <button type="submit"
                        className="outline outline-slate-400 outline-1 px-3 py-2 text-slate-600 rounded-md hover:bg-slate-500 hover:text-white"
                        >Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;