import '../styles/Filter.css';

function Filter() {
    return (
        <div className="filter">
            <div className="filter-search">
                <h3 className="title-filter">Rechercher...</h3>
                <form>
                    <input 
                        className="form-control" 
                        type="search" 
                        placeholder="Rechercher ici..."
                        required
                    />
                    <button type="submit" className='btn'>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="filter-range">
                <h3 className="title-filter">Price range</h3>
                <ul className="dropdown">
                    <li>
                        <div className="slider-range"></div>
                        <input
                            className="input-range"
                            type="text"
                            id="amount"
                        />
                    </li>
                </ul>
            </div>
            <div className="filter-categories">
                <h3 className="title-filter">Catégories</h3>
                <ul>
                    <li>
                        <input 
                            type="checkbox"
                            className="checked"
                            value=""
                        />
                        <span className="span">Catégorie 1</span>
                    </li>
                    <li>
                        <input 
                            type="checkbox"
                            className="checked"
                            value=""
                        />
                        <span className="span">Catégorie 2</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;