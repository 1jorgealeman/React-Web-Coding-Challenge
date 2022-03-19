import "./ContenidoDeRobos.scss";
import config from "../../config/therme.json";
import spinner from "../../assets/spinner.svg"
import {IRootObject} from "../../interface/Bikes";
import {IData} from "../../interface/Table";
import notbike from "../../assets/notBike.svg";
import {useDispatch,useSelector} from 'react-redux';



const ContenidoDeRobos=()=>{    
    const disparador=useDispatch();
    const datet=useSelector((store:IData)=>store.Data?.dataT as IRootObject );
    const verificador=useSelector((store:IData)=>store.Data?.dataEntera as IRootObject );
    const paginas=useSelector((store:IData)=>store.Data?.Paginas as number );
    
    const stCard={
        backgroundColor: config.threme1.sixth,
        border: "1px solid "+config.threme1.fifth,
    }

    const stImgnull={
        backgroundColor: config.threme1.primary 
    }

    const stBag={backgroundColor: config.threme1.fourth}


    const NoResultado=()=>{
        return(
            <article>
                <div className="ed-grid s-grid-9 s-gap-0 card s-shadow-bottom" style={stCard}>
                    <div className="ed-grid s-grid-1  m-cols-9 s-px-2 content s-cross-center ">
                        <h3 className="s-py-4 s-main-center">Not result</h3>
                    </div>
                </div>
            </article>
        )
    }
    
    return(
        <div className="ed-grid s-grid-1 s-pxy-4 ">
            {verificador.bikes?datet.bikes.slice(paginas-10, paginas).length>0?datet.bikes.slice(paginas-10, paginas).map((data) =>{
                return (
                    data.stolen===true?
                    <article key={data.id}>
                        <div className="ed-grid s-grid-9 s-gap-0 card s-shadow-bottom" style={stCard}>
                            <div className=" m-cols-2 fiimg " >
                                {data.large_img?<img alt="Bike" className="fiximg  " src={data.large_img}/>:<div className="nullImg s-pxy-4 s-main-center " style={ stImgnull }><img alt="none" className="imgConvert"  src={notbike} /></div>}
                            </div>
                            <div className="ed-grid s-grid-1  m-cols-7 s-px-2 content">
                                <h3 className="s-py-2">{data.title}</h3>
                                <p className="s-mt-2">
                                 {data.description?data.description:"No description"}
                                </p>
                                
                                <p className="s-mb-0" >
                                    <span >
                                        Location:  
                                    </span>
                                    {data.stolen_location}
                                </p>
                                <br />
                                <div className="  s-right  bag">
                                    <p>Robbery date: <span className="s-pxy-1 " style={stBag}> {new Intl.DateTimeFormat('en-US').format(data.date_stolen*1000 )} </span>            Year of theft notification: <span className="s-pxy-1 " style={stBag}> {data.year?data.year+" ":"N/A"} </span> </p>
                                </div>
                            </div>
                        </div>
                    </article>:null
                )
            }):<NoResultado/>:<img alt="spinner" className="spinner" src={spinner} />}
        </div>
    )
}
export default ContenidoDeRobos