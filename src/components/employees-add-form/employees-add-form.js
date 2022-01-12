import {Component} from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return(
            <div className="bg-slate-200 p-4">
                <h3 className="pb-4 text-lg">Добавьте нового сотрудника</h3>
                <form 
                    className="flex"
                     onSubmit={this.onSubmit}>

                    <span className="grow">
                        <input 
                            type="text"
                            className="py-2 px-4 rounded-md w-full"
                            placeholder="Имя"
                            name='name'
                            value={name}
                            onChange={this.onValueChange}/>
                    </span>

                    <span className="grow px-4">
                        <input 
                            type="number"
                            className="py-2 px-4 rounded-md w-full"
                            placeholder="З/П в $"
                            name='salary'
                            value={salary}
                            onChange={this.onValueChange}/>
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