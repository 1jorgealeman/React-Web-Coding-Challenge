import React,{useState,forwardRef,useEffect} from "react";
import "./FiltroBusqueda.scss";
import search from "../../assets/search.svg";
import today from "../../assets/today.svg";
import tomorrow from "../../assets/tomorrow.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch} from 'react-redux';
import {SearchAction,InitTableAction} from "../../Redux/Dusk/TableReducer"

const FiltroBusqueda=()=>{
    const [startDateFrom, setStartDateFrom] = useState<Date>();
    const [startDateTo, setStartDateTo] = useState<Date>();
    const [Buscar, setBuscar] = useState<string>("");
    const disparador=useDispatch();
    
    const Search=()=>{
        disparador(SearchAction(Buscar,startDateFrom,startDateTo));
    }
    const PedirInfo= ()=>{
        disparador(InitTableAction());
    }
    useEffect(()=>{
        Buscar=="" && startDateFrom==undefined && startDateTo==undefined?PedirInfo():Search()
    },[Buscar, startDateFrom, startDateTo])

    const ExampleCustomInput = forwardRef(({ value, onClick, Placeholder }:any, ref:any) => (
        <input type="text" onChange={(e)=>{if(e.target.value=="" ){Placeholder==="From"?setStartDateFrom(undefined):setStartDateTo(undefined)} }} className="input" placeholder={Placeholder} onClick={onClick} defaultValue={value} ref={ref}/>
    ));

    return(
        <div className="ed-grid s-grid-6 ">
            <div className="s-x-2 s-cols-2 ">
                <div className="input-wrapper">
                    <input type="search" className="input" onChange={(e)=>setBuscar(e.target.value)} placeholder="Search case descriptions"/>
                    <img className="input-icon" src={search} />
                </div>
            </div>
            <div>
                <div className="input-wrapper">
                
                    <DatePicker
                        selected={startDateFrom}
                        onChange={(date:Date) => setStartDateFrom(date)}
                        customInput={<ExampleCustomInput Placeholder="From" />}/>
                        <img className="input-icon" src={today} />
                </div>
            </div>
            <div>
                <div className="input-wrapper">
                    <DatePicker
                        selected={startDateTo}
                        onChange={(date:Date) => setStartDateTo(date)}
                        customInput={<ExampleCustomInput Placeholder="To" />}/>
                        <img className="input-icon" src={tomorrow} />
                </div>
            </div>
        </div>
    )
}

export default FiltroBusqueda;