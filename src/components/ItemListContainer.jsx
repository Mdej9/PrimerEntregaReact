const ItemListContainer =({mensaje}) =>{
    return(
        <div className="container-fluid py-5">
            <div className="row">
                <div className="col text-center">
                    <h2 className="t-color-principal">{mensaje}</h2>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;