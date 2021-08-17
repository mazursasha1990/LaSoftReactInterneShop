let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const addProductsList = (data) => ({
    type: 'ADD_PRODUCTS_LIST',
    data
})

export const loadCurrentItem = (item) => {
    return {
        type: 'LOAD_CURRENT_ITEM',
        payload: item,
    }
}