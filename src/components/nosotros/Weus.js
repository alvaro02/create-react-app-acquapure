import React from "react";
import acqua from "../../assets/img/acqua.jpg";

const Weus = () => {
  return (
    <div>
      <div class="w-full py-6 pl-24">
        <div class="w-1/6 bg-celesteosc">
          <p class="text-sm text-white text-center font-bold">
            Inicio / <u> Contacto </u>
          </p>
        </div>
      </div>

      <div className="w-full">
        <img
          className="absolute inset-0 h-full object-cover"
          alt="tomar agua"
          src={acqua}
        ></img>
        <div className="absolute inset-0 bg-foote bg-opacity-75"></div>
        <div className="flex h-full itemes-center justify-center relative">
          <h1 class="text-2xl text-white font-bold text-center py-16">
            NOSOTROS
          </h1>
        </div>
      </div>

      <div class="w-full md:flex">
        <div class="w-1/2">
          <div class="mt-12 mb-8 ml-8 mr-8">
            <p class="text-lg text-black font-normal">
              Somos una PYME dedicada a la venta de agua purificada. Destacamos
              principalmente por la transparencia, conveniencia, innovación y
              calidad en el servicio.
            </p>
          </div>

          <div class="mb-8 ml-8 mr-8">
            <p class="text-lg text-black font-normal">
              Acqua Pure ofrece agua purificada a través del proceso de osmosis
              inversa, la cual beneficia a las personas con enfermedades ya que
              el tratamiento del agua la hace estar libre de sodio, plomo, entre
              otros.
            </p>
          </div>

          <div class="mb-8 ml-8 mr-8">
            <p class="text-lg text-black font-normal">
              Acqua Pure nace en 2017 con la colaboración de un emprendedor y un
              ingeniero comercial, convencidos de la oportunidad de mejorar la
              calidad del agua que hoy en día se consume en Maipú, proyectándose
              así ser una compañía reconocida a nivel comunal.
            </p>
          </div>
          <div class="mb-8 ml-8 mr-8">
            <p class="text-lg text-black font-normal"></p>
            Actualmente, Acqua Pure distribuye más de 4.000 bidones de agua al
            mes a todo Maipú.
          </div>
        </div>

        <div class="w-1/2">
          <div class="w-full md:flex mt-12">
            <img
              class="object-none object-center bg-gray-400 w-1040 h-779 mb-8 ml-8 mr-12"
              src="img/Image-2020-11-16.jpeg"
              alt="socios"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weus;
