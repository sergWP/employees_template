import { Component } from 'react';

class SearchPanel extends Component {
    render() {
        return(
            <input 
                type={'text'}
                placeholder="Найти сотрудника"
                className="w-full py-2 px-4 rounded-md"/>
        )
    }
}

export default SearchPanel;