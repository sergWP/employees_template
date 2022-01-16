import { Component } from 'react';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all'
        }
    }

    onFilter = (e) => {
        const filter = e.currentTarget.getAttribute('filter');
        this.setState({filter});
        this.props.onFilter(filter);
    }

    render() {
        const {filter} = this.state;

        const classesAll = (filter) => {
            return filter === 'all' ? 'bg-slate-400' : 'text-slate-600';
        }
        const classesStar = (filter) => {
            return filter === 'star' ? 'bg-slate-400' : 'text-slate-600';
        }
        const classesTop = (filter) => {
            return filter === 'top' ? 'bg-slate-400' : 'text-slate-600';
        }

        return(
            <div className="text-white flex mt-4">
                <button 
                    type="button" 
                    onClick={this.onFilter}
                    filter='all'
                    className={`outline outline-slate-400 outline-1 px-3 py-2 hover:bg-slate-500 hover:text-white ${classesAll(filter)}`}>
                        Все сотрудники
                </button>
                <button 
                    type="button" 
                    onClick={this.onFilter}
                    filter='star'
                    className={`outline outline-slate-400 outline-1 px-3 py-2 hover:bg-slate-500 hover:text-white ${classesStar(filter)}`}>
                        На повышение
                </button>
                <button 
                    type="button" 
                    onClick={this.onFilter}
                    filter='top'
                    className={`outline outline-slate-400 outline-1 px-3 py-2 hover:bg-slate-500 hover:text-white ${classesTop(filter)}`}>
                        З/П больше $1000
                </button>
            </div>
        )
    }
}

export default AppFilter;