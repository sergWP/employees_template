import { Component } from 'react';
import { FaCookieBite, FaStar } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onStar = () => {
        this.setState(({star}) => ({
            star: !star
        }))
    }
    
    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, star} = this.state;

        const classesIncr = (incr) => {
            return incr ? 'text-amber-600' : '';
        }
        const classesStar = (star) => {
            return star ? '' : 'hidden';
        }
    
        return(
            <li className={`w-full flex justify-between py-2 ${classesIncr(increase)}`}>
                
                <span 
                    className="grow leading-loose"
                    onClick={this.onStar}>{name}</span>

                <div className="flex flex-row">

                    <input 
                        type="text"
                        className=""
                        defaultValue={`$${salary}`}/>

                    <div className="flex items-center pl-4">
                        <span className={`text-amber-500 ${classesStar(star)}`}>
                            <i className=""><FaStar/></i>
                        </span>
                        <button 
                            type="button"
                            onClick={this.onIncrease}
                            className={`text-slate-600 pl-4 ${classesIncr(increase)}`}>
                            <i className=""><FaCookieBite /></i>
                        </button>
                        <button 
                            type="button"
                            onClick={onDelete}
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