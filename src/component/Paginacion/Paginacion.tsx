import "./Paginacion.scss"
import config from "../../config/therme.json"
import left from "../../assets/left.svg"
import leftTotal from "../../assets/lefttotal.svg"
import {paginacionAction} from "../../Redux/Dusk/TableReducer"
import {useDispatch,useSelector} from 'react-redux';
import {IData,} from "../../interface/Table";
import {IRootObject} from "../../interface/Bikes";
import { match } from "assert"


const Paginacion = ()=>{
    const pagina=useSelector((store:IData)=>store.Data?.Paginas as number);
    const data=useSelector((store:IData)=>store.Data?.dataT as IRootObject);
    const disparador=useDispatch();
    

    const stColorDeFondo={
        backgroundColor:"#fff",
        border:"1px solid "+config.threme1.seventh
    }

    return(
        <div className="ed-grid s-grid-19 s-pb-4 paginacion gap-1">
            <div className="s-x-4 s-px-0 btn">
                <div onClick={  ()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                    disparador(paginacionAction(1))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    <img className=" icoleft" src={left}/>
                </div>
            </div>
            <div className="s-px-0">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                      disparador(paginacionAction(3))}}  className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    <img className="icoleft" src={leftTotal}/>
                </div>
            </div>
            <div className="s-px-1">
                <div  onClick={
                    ()=>{
                        window.scroll({
                            top: 0,
                            behavior: 'smooth'
                          });
                        disparador(paginacionAction(5,10))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                1
                
                </div>
            </div>
            <div className="s-px-1">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                    disparador(paginacionAction(5,20))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    2
                </div>
            </div>
            <div  className="s-px-1">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                    disparador(paginacionAction(5,30))}} className=" s-py-1 s-main-center pagina"  style={stColorDeFondo}>
                    3
                </div>
            </div>
            <div  className="s-px-1">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                    disparador(paginacionAction(5,40))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    4
                </div>
            </div>
            
            <div  className="s-px-1">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                    disparador(paginacionAction(5,50))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    5
                </div>
            </div>
            <div  className="s-px-1">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                    disparador(paginacionAction(5,60))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    6
                </div>
            </div>
            <div  className="s-px-1">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                    disparador(paginacionAction(5,70))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    7
                </div>
            </div>
            <div  className="s-px-1">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                    disparador(paginacionAction(5,80))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    8
                </div>
            </div>
            <div  className="s-px-1">
                <div onClick={()=>{
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                      });
                    disparador(paginacionAction(5,90))}} className=" s-py-1 s-main-center pagina" style={stColorDeFondo}>
                    9
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