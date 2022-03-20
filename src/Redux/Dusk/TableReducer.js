//Constanes
const TableState={
    dataT:{bikes:[]},
    dataEntera:{},
    Paginas:10
};

//Variables
let url="https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=Berlin&distance=100&stolenness=proximity"
let data=null
let B=null
let pagina=null

//types
const OPTENER_DATOS_DE_API="OPTENER_DATOS_DE_API";
const BUSQUEDA_DE_DATOS="BUSQUEDA_DE_DATOS";
const PAGINACION="PAGINACION";

//reducer
export default function TableReducer(state=TableState,action){
    switch (action.type) {
        case OPTENER_DATOS_DE_API:
            if(action.payload!==""){
                data=action.payload;
            }
            return {...state, dataT:data,dataEntera:data}
        case BUSQUEDA_DE_DATOS:
            if(action.payload!==""){
                B=action.payload;
            }
            return {...state, dataT:{bikes:B} }
        case PAGINACION:
            if(action.payload!==""){
                pagina=action.payload;
            }
            return {...state, Paginas:pagina }
        default:
            return state
    }
}

//Acciones
export const InitTableAction = () => async (dispatch,getState) =>{
    try {
        await fetch(url)
        .then(response => response.json())
        .then(data => dispatch({
            type:OPTENER_DATOS_DE_API,
            payload: data
        }));        

    } catch (error) {
        console.log(error)
    }
}

export const SearchAction = (Buscar,from,to) => async (dispatch,getState) =>{
    try {
        let buscar=getState().Data.dataEntera;
        if(buscar !== ""){
            buscar=getState().Data.dataEntera.bikes.filter((e)=>e.title.toLowerCase().indexOf(Buscar.toLowerCase())>=0);
        }
        
        if(from !== undefined){
            buscar=buscar.filter((e)=>(e.date_stolen*1000) >= from.getTime())
        }

        if(to !== undefined){
            buscar=buscar.filter((e)=>(e.date_stolen*1000) <= to.getTime())
        }
        
        dispatch({
            type:BUSQUEDA_DE_DATOS,
            payload: buscar
        })

    } catch (error) {
        console.log(error)
    }
}

export const paginacionAction = (type,number=0) => async (dispatch,getState) =>{
    try {
        let total=Math.ceil(getState().Data.dataT.bikes.length/10);
        let paginaL=10;
       if(type === 1){
            getState().Data.Paginas<=10? paginaL=10 :paginaL=getState().Data.Paginas - 10;
       }else if(type === 2){
            getState().Data.Paginas>=(total*10) ? paginaL=(total*10) :paginaL=getState().Data.Paginas + 10;
       }else if(type === 3){
            paginaL=10
        }else if(type === 4){
            paginaL=(total*10)
        }
        else if(type === 5){
            paginaL=number;
        }

       dispatch({
        type:PAGINACION,
        payload: paginaL
        })

    } catch (error) {
        console.log(error)
    }
}