import { Component } from 'react';

class AppFilter extends Component {
    render() {
        return(
            <div className="text-white flex mt-4">
                <button 
                    type="button" 
                    className="outline outline-slate-400 outline-1 px-3 py-2 bg-slate-400 rounded-l-md hover:bg-slate-500 hover:text-white">
                        Все сотрудники
                </button>
                <button 
                    type="button" 
                    className="outline outline-slate-400 outline-1 px-3 py-2 text-slate-600 hover:bg-slate-500 hover:text-white">
                        На повышение
                </button>
                <button 
                    type="button" 
                    className="outline outline-slate-400 outline-1 px-3 py-2 text-slate-600 rounded-r-md hover:bg-slate-500 hover:text-white">
                        З/П больше $1000
                </button>
            </div>
        )
    }
}

export default AppFilter;