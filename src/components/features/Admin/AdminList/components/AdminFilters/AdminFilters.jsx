import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";

export const AdminFilters = ({ categories, search, setSearch, productId, setProductId, category, setCategory, orderBy, setOrderBy }) => {
    const verifyOrderBy = (orderType) => {
        return orderBy === orderType
            ? "admin__content__filters__order__button admin__content__filters__order__button__selected"
            : "admin__content__filters__order__button";
    };

    return (
        <div className="admin__content__filters">
            <div className="admin__content__filters__inputs__container">
                <input type="text" placeholder="ID Producto..." className="admin__content__filters__input" value={productId} onChange={(e) => setProductId(e.target.value)} />
                <input type="text" placeholder="Buscar..." className="admin__content__filters__input" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select className="admin__content__filters__input" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled hidden> Categoria </option>
                    <option value="Todos"> Todos </option>
                    {
                        categories.map((categoryItem) => (
                            <option key={categoryItem.id} value={categoryItem.category}>
                                {categoryItem.category}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="admin__content__filters__order__container">
                <div className="admin__content__filters__order__box">
                    <button className={verifyOrderBy("name")} onClick={() => setOrderBy("name")}>
                        <FontAwesomeIcon className="admin__content__filters__order__icon" icon={faArrowDownShortWide}/>
                    </button>
                    <button className={verifyOrderBy("price")} onClick={() => setOrderBy("price")}>
                        <FontAwesomeIcon className="admin__content__filters__order__icon" icon={faDollarSign} />
                    </button>
                </div>
            </div>
        </div>
    );
};