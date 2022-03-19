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
    <section className="l-section s-py-4 s-shadow-bottom" style={stColorDeFondo}>
        <div className="ed-grid lg-grid-3 ">
        <div className="s-cross-center">
            <div className="logo l-to-right">
            <img className="s-radius-1" src={logo}/>
            </div>
        </div>
        <div className="s-column s-main-center lg-main-start lg-cross-start s-center lg-left fontLogo s-cols-2" style={stColorDeTexto} >
            <h2>Police Department of Berlin</h2>
            <p> Stolen bykes</p>
        </div>
        </div>
    </section>
   )

}

export default BarraPrincipal