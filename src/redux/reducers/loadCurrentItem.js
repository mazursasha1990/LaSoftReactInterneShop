const INITIAL_STATE = {
    products: [
        {
            id: 1,
            url: 'https://picsum.photos/id/1/200/300',
            price: 5,
        },
        {
            id: 2,
            url: 'https://picsum.photos/id/1000/200/300',
            price: 15,
        },
        {
            id: 3,
            url: 'https://picsum.photos/id/1001/200/300',
            price: 10,
        },
        {
            id: 4,
            url: 'https://picsum.photos/id/1002/200/300',
            price: 3,
        },
        {
            id: 5,
            url: 'https://picsum.photos/id/1003/200/300',
            price: 6,
        },
        {
            id: 6,
            url: 'https://picsum.photos/id/1004/200/300',
            price: 21,
        },
        {
            id: 7,
            url: 'https://picsum.photos/id/1005/200/300',
            price: 78,
        },
        {
            id: 8,
            url: 'https://picsum.photos/id/1006/200/300',
            price: 15,
        },
        {
            id: 9,
            url: 'https://picsum.photos/id/1024/200/300',
            price: 60,
        },
        {
            id: 10,
            url: 'https://picsum.photos/id/1008/200/300',
            price: 75,
        },
        {
            id: 11,
            url: 'https://picsum.photos/id/1009/200/300',
            price: 12,
        },
        {
            id: 12,
            url: 'https://picsum.photos/id/1010/200/300',
            price: 100,
        },
        {
            id: 13,
            url: 'https://picsum.photos/id/1011/200/300',
            price: 70,
        },
        {
            id: 14,
            url: 'https://picsum.photos/id/1012/200/300',
            price: 65,
        },
        {
            id: 15,
            url: 'https://picsum.photos/id/1013/200/300',
            price: 30,
        },
        {
            id: 16,
            url: 'https://picsum.photos/id/1014/200/300',
            price: 25,
        },
        {
            id: 17,
            url: 'https://picsum.photos/id/1015/200/300',
            price: 40,
        },
        {
            id: 18,
            url: 'https://picsum.photos/id/1016/200/300',
            price: 5,
        },
        {
            id: 19,
            url: 'https://picsum.photos/id/1023/200/300',
            price: 32,
        },
        {
            id: 20,
            url: 'https://picsum.photos/id/1018/200/300',
            price: 12,
        },

    ],
    currentItem: null,
};

const LOAD_CURRENT_ITEM = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_CURRENT_ITEM':
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state;
    }
}

export default LOAD_CURRENT_ITEM;