import l10 from "../../assets/img/carro10LT.png";
import l20 from "../../assets/img/carro20LT.png";
import caja10 from "../../assets/img/bidoncaja10.png";
import caja20 from "../../assets/img/bidoncaja20.png";
import dispensa from "../../assets/img/carrodispensador.png";
import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY } from "../actions/action-types/cart-actions";

const initState = {
    items: [
       /* 0*/ { id: 1, title: 'Recarga de 10 LT', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 1500, img: l10 },
       /* 1*/  { id: 2, title: 'Recarga de 20 LT', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 2500, img: l20 },
      /* 2*/   { id: 3, title: '2 Botellones de 10 LT + Dispensador', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 8000, img: caja10 },
      /* 3*/   { id: 4, title: '2 Botellones de 20 LT + Dispensador', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 10000, img: caja20 },
       /* 4*/  { id: 5, title: 'Dispensador', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 5000, img: dispensa },
    ],
    addedItems: [],
    subtotal: 0,
    total: 0,
    totalItems: 0
}

const cartReducer = (state = initState, action) => {
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            state.totalItems++;
            addedItem.quantityPrice = addedItem.quantity * addedItem.price;

            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1;
            state.totalItems++;
            addedItem.quantityPrice = addedItem.price;


            let newTotal = state.total + addedItem.price;

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        state.totalItems++;
        addedItem.quantityPrice = addedItem.quantity * addedItem.price;

        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            state.totalItems--;

            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            state.totalItems--;
            addedItem.quantityPrice = addedItem.quantity * addedItem.price;

            return {
                ...state,
                total: newTotal
            }
        }

    }
    else {
        return state
    }
}

export default cartReducer;