import React, {Fragment} from 'react';

const Encabezado = () =>{
    const changeImage = selected => ()=>{
        switch(selected){
            case 1:
                document.getElementById("showedImage").src="https://as01.epimg.net/deportes_accion/imagenes/2021/08/02/mas_accion/1627893833_553537_1627894568_noticia_normal.jpg";
            break;
            case 2:
                document.getElementById("showedImage").src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof";
            break;
            case 3: 
                document.getElementById("showedImage").src="https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2020/09/04/tigre.jpeg";
            break;
            case 4: 
                document.getElementById("showedImage").src="https://emtstatic.com/2014/07/tiburon.jpg";
            break;
            case 5:
                document.getElementById("showedImage").src="http://www.zoobioparqueamaru.com/nuestros-animales/reptiles/130-zoo-cuenca.jpg";
            break;
        }
    }
    return(
       <div >
            <button style={{marginRight : '30px' , marginTop: '10px'}} type="button" className="btn btn-warning col" onClick={changeImage(1)}>Oso</button>
            <button style={{marginRight : '30px' , marginTop: '10px'}} type="button" className="btn btn-warning col" onClick={changeImage(2)}>Perro</button>
            <button style={{marginRight : '30px' , marginTop: '10px'}} type="button" className="btn btn-warning col" onClick={changeImage(3)}>Tigere</button>
            <button style={{marginRight : '30px' , marginTop: '10px'}} type="button" className="btn btn-warning col" onClick={changeImage(4)}>Tivuron</button>
            <button style={{marginRight : '30px' , marginTop: '10px'}} type="button" className="btn btn-warning col" onClick={changeImage(5)}>Tortuga</button>
            <hr size="10" style={{solid:'black'}}></hr>
            <img id="showedImage" src="https://as01.epimg.net/deportes_accion/imagenes/2021/08/02/mas_accion/1627893833_553537_1627894568_noticia_normal.jpg"></img>
       </div>
    );
}

export default Encabezado;