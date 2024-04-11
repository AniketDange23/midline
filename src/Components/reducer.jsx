
const reducer = (state,action) => {

    if(action.type ==="CONTACT_PAGE"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
        }
    }
    if(action.type ==="SERVICES_PAGE"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
        }
    }
    if(action.type ==="ABOUT_PAGE"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
        }
    }




    if(action.type ==="PROJECT_PAGE"){

        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            para1:action.payload.para1,
            para2:action.payload.para2,
            image:action.payload.image
        }
    }


    if(action.type ==="HealthInsurancePage"){

        return {
            ...state,
            title:action.payload.title,
            para1:action.payload.para1,
            para2:action.payload.para2,
            benifitsPara:action.payload.benifitsPara,
            imageSrc:action.payload.image


        }
    }

    if(action.type ==="FinalExpensePage"){

        return {
            ...state,
            title:action.payload.title,
            para1:action.payload.para1,
            para2:action.payload.para2,
            benifitsPara:action.payload.benifitsPara,
            imageSrc:action.payload.image

            
            
        }
    }


    if(action.type ==="MedicareSupplementAdvantagePage"){

        return {
            ...state,
            title:action.payload.title,
            para1:action.payload.para1,
            para2:action.payload.para2,
            benifitsPara:action.payload.benifitsPara,
            imageSrc:action.payload.image

            
            
        }
    }


    if(action.type ==="B2BLeadGenerationPage"){

        return {
            ...state,
            title:action.payload.title,
            para1:action.payload.para1,
            para2:action.payload.para2,
            benifitsPara:action.payload.benifitsPara,
            imageSrc:action.payload.image

            
            
        }
    }


    return state;
}

export default reducer
