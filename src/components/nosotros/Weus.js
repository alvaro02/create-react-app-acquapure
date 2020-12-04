import React from "react";
import Socios from '../../assets/img/Image-2020-11-16.jpeg';
import tomando from '../../assets/img/acqua.jpg'

const Weus = () => {
  return (
    <div>
      {/*CONTENEDOR--MIGAS DE PAN*/}
      <div className="w-full px-8 lg:px-32">
        <div className=" w-full md:w-48  pt-1 bg-celesteosc text-center">
          <p className=" text-sm text-white font-bold">
            Inicio / <u> Nosotros </u>
          </p>
        </div>
      </div>

      {/*CONTENEDOR-NOSOTROS*/}

      <div className="invisible md:visible md:bg-fixed  md:min-h-full h-0 md:h-40 md:relative"
        style={{
          backgroundImage: `url(${tomando})`,
          backgroundRepeat: 'no-repeat',
          width: `100%`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom'
        }} >
        <img className="bg-fixed absolute inset-0 h-full w-full object-cover" alt="fondo" />
        <div className=" absolute inset-0 bg-foote bg-opacity-75"></div>
        <div className="flex h-full items-center justify-center relative">
          <h1 className="font-titulo text-2xl font-bold text-white">NOSOTROS</h1>
        </div>
      </div>


      <div className="w-full px-8 lg:px-32 pt-12">

          {/*CONTENEDOR-CONTENIDO*/}
          <div className="w-full md:w-1/2 text-justify font-parrafo text-xl float-left ">
            <div className="">
              <p>
                Somos una PYME dedicada a la venta de agua purificada. Destacamos
                principalmente por la transparencia, conveniencia, innovación y
                calidad en el servicio.
              </p>
            </div>
            <div className="py-7">
              <p>
                Acqua Pure ofrece agua purificada a través del proceso de osmosis
                inversa, la cual beneficia a las personas con enfermedades ya que
                el tratamiento del agua la hace estar libre de sodio, plomo, entre
                otros.
              </p>
            </div>
            <div className="">
              <p>
                Acqua Pure nace en 2017 con la colaboración de un emprendedor y un
                ingeniero comercial, convencidos de la oportunidad de mejorar la
                calidad del agua que hoy en día se consume en Maipú, proyectándose
                así ser una compañía reconocida a nivel comunal.
              </p>
            </div>
            <div className="py-7">
              <p>
                Actualmente, Acqua Pure distribuye más de 4.000 bidones de agua al
                mes a todo Maipú.
              </p>
            </div>

          </div>
          {/*CONTENEDOR-FOTO*/}
          <div className="w-full lg:w-1/2 pb-7 float-none md:float-left">
            <div className="w-full md:flex justify-center">
              <img className="w-full md:w-9/12"
                src={Socios}
                alt="socios"
              />

            </div>

          </div>

      </div>


    </div>
  );
};

export default Weus;
