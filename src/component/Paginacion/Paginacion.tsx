import "./Paginacion.scss"
import config from "../../config/therme.json"
import left from "../../assets/left.svg"
import leftTotal from "../../assets/lefttotal.svg"
import {paginacionAction} from "../../Redux/Dusk/TableReducer"
import {useDispatch,useSelector} from 'react-redux';
import {IData,} from "../../interface/Table";
import {IRootObject} from "../../interface/Bikes";



const Paginacion = ()=>{

    // const pagina=useSelector((store:IData)=>store.Data?.Paginas as number);
    const data=useSelector((store:IData)=>store.Data?.dataT as IRootObject);
    const paginaActual=useSelector((store:IData)=>store.Data?.Paginas as number);
    const disparador=useDispatch();

    const stactive={
        backgroundColor: config.threme1.fourth,
        border:"1px solid "+config.threme1.seventh
    }
    
    const stColorDeFondo={
        backgroundColor:"#fff",
        border:"1px solid "+config.threme1.seventh
    }

    const AnchoDePagina=()=>{
        let nopaginas=Math.ceil(data.bikes.length/10)
        let item=[]
        for (let index = 0; index < nopaginas; index++){
            let Estilo=index+1==(paginaActual/10)?stactive:stColorDeFondo
            
            if(index>5){
                index=nopaginas
                item.push(
                    <div className="s-px-1" >
                        <div className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                            ...
                        </div>
                    </div>
                )
            }else{
            item.push(
                <div className="s-px-1">
                    <div  onClick={
                        ()=>{
                            window.scroll({
                                top: 0,
                                behavior: 'smooth'
                            });
                        
                            disparador(paginacionAction(5,(index+1)*10))}} className=" s-py-1 s-main-center pagina" style={Estilo}
                        >
                        {index+1}
                    </div>
                </div>
            )
            }
        }
        return(item)
    }

    return(
        <div className="ed-container paginacion s-main-center s-mb-2">
            <div >
                <div className="btn">
                    <div onClick={  ()=>{
                        window.scroll({
                            top: 0,
                            behavior: 'smooth'
                        });
                            disparador(paginacionAction(1))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                        <img className=" icoleft" src={left}/>
                    </div>
                </div>
            </div>
            <div >
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                    });
                        disparador(paginacionAction(3))}}  className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    <img className="icoleft" src={leftTotal}/>
                </div>
            </div>
            <div className="">
                <div className="ed-container">
                    {AnchoDePagina()}
                </div>
            </div>
            <div className="s-px-0">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                        disparador(paginacionAction(4))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    <img className="icoright" src={leftTotal}/>
                </div>
            </div>
            <div className="s-px-0">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                        disparador(paginacionAction(2))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                <img className=" icoright" src={left}/>
                </div>
            </div>
        </div>
    )
}

export default Paginacion;