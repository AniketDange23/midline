
const reducer = (state,action) => {

    if(action.type ==="CONTACT_PAGE"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            banner:action.payload.image,
        }
    }
    if(action.type ==="SERVICES_PAGE"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            banner:action.payload.image,

            
        }
    }
    if(action.type ==="ABOUT_PAGE"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            banner:action.payload.image,

        }
    }






    return state;
}

export default reducer
