const selectProducts = (state, filter= 0) => {
    if(filter === 0 || filter === null || filter === undefined){
        return state.products;
    } else {
        return state.products.filter(product => {
            if(product.price <= filter){
                return product
            }
        });
    }
};

export { selectProducts };
