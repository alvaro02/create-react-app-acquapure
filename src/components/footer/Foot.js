import React from "react";
import aqua_pure from "../../assets/img/aqua_pure.png";

const Foot = () => {
  return (
    <div>
      <div class="w-full md:flex bg-blue-900">
        <img class="object-none object-center w-2/5 mt-10 mb-8 ml-16" alt="logo" src={aqua_pure} />

        <div class="w-1/5 md:flex m-10 p-8">
            <div>
                <h1 class="block size text-lg text-white font-bold">CONTACTO</h1>
                <p class="block text-lg text-white font-normal">
                    Ramón Barros Luco #0793,
                    Maipú, Santiago
                </p>
                <p class="block text-lg text-white font-normal">
                    contacto@acquapure.cl
                </p>
                <p class="block text-lg text-white font-normal">
                    Teléfonos
                </p>
                <p class="block text-lg text-white font-normal">
                    +56 9 7536 9720
                </p>
                <p class="block text-lg text-white font-normal">
                    +56 9 5237 1336
                </p>
                <p class="block text-lg text-white font-normal">
                    +56 9 5019 3757
                </p>
            </div>
        </div>

        <div class="w-1/5 md:flex m-10 p-8">
            <div>
                <h1 class="block size text-lg text-white font-bold">MENU</h1>
                <p class="block text-lg text-white font-normal">
                    Inicio
                </p>
                <p class="block text-lg text-white font-normal">
                    Ofertas
                </p>
                <p class="block text-lg text-white font-normal">
                    Recargas
                </p>
                <p class="block text-lg text-white font-normal">
                    Contacto
                </p>
            </div>
        </div>

        <div class="w-1/5 md:flex m-10 p-8">
            <div>
                <h1 class="block size text-lg text-white font-bold">Redes Sociales</h1>
                <p class="block text-lg text-white font-normal">
                    Facebook
                </p>
                <p class="block text-lg text-white font-normal">
                    Instagram
                </p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Foot;
