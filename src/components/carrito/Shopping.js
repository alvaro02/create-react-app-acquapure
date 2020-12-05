import React from 'react'
import Bidon from '../../assets/img/20l.png';
import Sirviendo from '../../assets/img/i2.jpg';


function shopping() {
    return (
        <div class="md:w-full md:rounded-lg md:overflow-hidden md:relative">
            <img class="invisible md:visible w-0 md:absolute md:inset-0 md:h-full md:w-full md:object-cover" src={Sirviendo} alt="fondo" />
            <div class="md:absolute md:inset-0 md:bg-celeste md:bg-opacity-75"></div>
            <div class="md:flex md:h-full md:items-center md:justify-center md:relative">

                <div className="md:w-3/4 md:h-3/4 md:m-auto md:py-40">
                    <div className="w-full md:w-2/3 px-8 md:px-4 float-left bg-white">
                        {/*CONTENEDOR--MIGAS DE PAN*/}
                        <div className="w-full md:w-0 pt-1 md:pt-0">
                            <div className=" bg-celesteosc text-center">
                                {/*1*/}
                                <p className="font-parrafo text-sm text-white font-bold">
                                    Inicio / <u> Contacto </u>
                                </p>
                            </div>
                        </div>
                        {/*CONTENEDOR--TITULO*/}
                        <div className="border-b-2 border-plomo w-full py-7 md:py-3 text-center md:text-left md:-mt-7">
                            <h1 className="font-titulo text-2xl text-celeste font-bold">CARRO DE COMPRA</h1>
                        </div>
                        {/*CONTENEDOR--PRODUCTO-CANTIDAD-PRECIO-VALORES*/}
                        <div className="w-full font-parrafo text-lg text-celeste pt-3 px-2 md:flex">
                            {/*PRODUCTO*/}
                            <div className="w-full md:w-2/5">
                                <div className="text-center md:text-left">
                                    <h1 className="font-bold">PRODUCTO</h1>
                                </div>
                                <div className="justify-items-center md:justify-items-start grid grid-cols-2 md:grid-cols-none pt-3 md:flex">
                                    <div className="px-3 border-2 border-plomo ">
                                        <img className="w-20 md:w-16"
                                            src={Bidon}
                                            alt="bidon de 20 litros" />
                                    </div>
                                    <div className="flex items-center pt-3 md:pt-0 md:px-2">
                                        <h1 className="text-center">Recarga de 20LT</h1>
                                    </div>
                                </div>
                            </div>
                            {/*CANTIDAD*/}
                            <div className="w-full flex grid grid-cols-2 justify-items-center items-center 
                                            md:pt-0 md:grid-cols-none md:w-1/5 md:content-start">
                                <div className="">
                                    <h1 className="font-bold">CANTIDAD</h1>
                                </div>
                                <div className="w-full grid grid-cols-3 justify-items-center items-center md:pt-7 ">
                                    <div className="">
                                        <button className="text-3xl font-bold "
                                            type="button">
                                            -
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <div className="border-2 border-plomo text-center">
                                            1
                                </div>
                                    </div>
                                    <div className="">
                                        <button className="text-3xl font-bold"
                                            type="button">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/*PRECIO*/}
                            <div className="grid grid-cols-2 justify-items-center md:w-1/5 md:grid-cols-none">
                                <div>
                                    <h1 className="font-bold pb-7 md:pb-0">PRECIO</h1>
                                </div>
                                <div className="text-black">
                                    <h1 className="pb-8 md:pb-0">$ 2.500</h1>
                                </div>
                            </div>

                            {/*VALORES*/}
                            <div className="grid grid-cols-2 justify-items-center md:w-1/5 md:grid-cols-none">

                                <div className="">
                                    <h1 className="font-bold">TOTAL</h1>
                                </div>
                                <div className="text-center float-left text-black">
                                    <h1 className="pb-8 md:pb-0">$ 2.500</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*CONTENEDOR--PLOMO*/}
                    {/*CONTENEDOR--TITULO*/}
                    <div className="w-full md:w-1/3 bg-griss text-center float-left">
                        <div className="px-8 md:px-4 pt-5 md:pt-10">
                            <h1 className="font-titulo text-2xl text-celeste font-bold md:text-xl md:pt-2">RESUMEN DEL PEDIDO</h1>
                            <div className="border-b-2 border-black pt-7 md:pt-3"></div>
                        </div>
                        {/*CONTENEDOR--ITEMS-DESCUENTOS-TOTAL-A-PAGAR-BOTON*/}
                        <div className="w-full h-auto bg-griss font-parrafo text-base px-5 md:float-left">
                            {/*ITEMS*/}
                            <div className="text-black grid grid-cols-2 justify-items-center py-5">
                                <div>
                                    <h1 className="">1 Items</h1>
                                </div>
                                <div className="float-left">
                                    <h1 className="text-center ">$ 2.500</h1>
                                </div>
                            </div>
                            {/*DESCUENTOS*/}
                            <div className="text-black grid grid-cols-2 justify-items-center pb-5">
                                <div>
                                    <h1 className="">Descuentos</h1>
                                </div>
                                <div className="float-left">
                                    <h1 className="text-center">$ 0</h1>
                                </div>
                            </div>
                            <div className="border-b-2 border-black"></div>
                            {/*TOTAL-A-PAGAR*/}
                            <div className="text-black grid grid-cols-2 justify-items-center pt-7">
                                <div className="font-bold text-2xl md:text-lg">
                                    <h1 className="pb-8">Total a pagar</h1>
                                </div>
                                <div className="font-bold text-2xl md:text-lg">
                                    <h1 className="text-center pb-8">$ 2500</h1>
                                </div>
                            </div>

                            {/*BOTON*/}
                            <div className="text-center pb-7 w-full">
                                <div>
                                    <button
                                        className="bg-verde hover:bg-hoverver text-white rounded-lg font-bold 
                                py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                                        type="button">

                                        Pagar
                            </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default shopping
