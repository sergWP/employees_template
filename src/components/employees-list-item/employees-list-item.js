import { Component } from 'react';
import { FaCookieBite, FaStar } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        const {name, salary, increase} = this.props;
        const classes = (incr) => {
            return incr ? 'text-amber-600' : '';
        }
    
        return(
            <li className={`w-full flex justify-between py-2 ${classes(increase)}`}>
                <span className="grow leading-loose">{name}</span>
                <div className="flex flex-row">
                    <input type="text"
                        className=""
                        defaultValue={`$${salary}`}/>
                        <div className="flex pl-4">
                            <button type="button"
                                className="text-amber-500">
                                <i className=""><FaStar/></i>
                            </button>
                            <button type="button"
                                className={`text-slate-600 pl-4 ${classes(increase)}`}>
                                <i className=""><FaCookieBite /></i>
                            </button>
                            <button type="button"
                                className="text-rose-800 pl-4">
                                <i className=""><IoMdTrash/></i>
                            </button>
                        </div>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;