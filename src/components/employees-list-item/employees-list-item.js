import { FaCookieBite, FaStar } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

const EmployeesListItem = () => {
    return(
        <li className="w-full flex justify-between py-2">
            <span className="grow leading-loose">Name</span>
            <div className="flex flex-row">
                <input type={'text'}
                    className=""
                    defaultValue={'$1000'}/>
                    <div className="flex pl-4">
                        <button type="button"
                            className="text-amber-500">
                            <i className=""><FaStar/></i>
                        </button>
                        <button type="button"
                            className="text-slate-600 pl-4">
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

export default EmployeesListItem;