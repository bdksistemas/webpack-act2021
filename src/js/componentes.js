import '../css/componentes.css'
// import bdklogo from '../assets/img/LOGO_BDK_NEG_BLANCO.PNG';

const saludar = ( nombre ) => {

    console.log('Creando etqiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    document.body.append( h1 );
    
    // Imagen
    // const img = document.createElement('img');
    // img.src = bdklogo;
    // document.body.append( img );
}

export { saludar };