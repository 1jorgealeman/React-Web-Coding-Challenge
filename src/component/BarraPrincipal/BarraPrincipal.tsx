import "./BarraPrincipal.scss";
import logo from '../../assets/Logo.png';
import config from '../../config/therme.json';

const BarraPrincipal=()=>{

    const stColorDeTexto={
        color:config.threme1.second
    }

    const stColorDeFondo={
        backgroundColor:config.threme1.primary
    }

   return(
    <section className="l-section s-py-2 m-py-4 s-shadow-bottom" style={stColorDeFondo}>
        <div className="ed-grid  m-grid-3 ">
        <div className="s-cross-center">
            <div className="logo s-to-center m-to-right">
                <img src={logo}/>
            </div>
        </div>
        <div className="s-column fontLogo m-cols-2 s-cross-center m-cross-start m-main-center" style={stColorDeTexto} >
            <h2>Police Department of Berlin</h2>
            <p> Stolen bykes</p>
        </div>
        </div>
    </section>
   )

}

export default BarraPrincipal