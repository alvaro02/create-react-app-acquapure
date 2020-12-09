import React from "react";
import l10 from "../../assets/img/10l.png";
import l20 from "../../assets/img/20l.png";
import caja10 from "../../assets/img/bidoncaja10.png";
import caja20 from "../../assets/img/bidoncaja20.png";
import dispensa from "../../assets/img/Dispensador-blanco-hor--1024x683.png";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from "../actions/cartAction";

class Catalogo extends React.Component{

  handleClick = (id) => {
    this.props.addToCart(id);
  }


  render(){
    return (
      <div>
        <div className="w-full px-8 lg:px-32">
          <div className="w-full pt-1">
            <div className="w-full md:w-48 bg-celesteosc text-center">
              {/*1*/}
              <p className="font-parrafo text-sm text-white font-bold">
                <Link to={'/'}> Inicio /</Link> <u> Catalogo </u>
              </p>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-3xl text-celeste font-bold font-titulo text-center pt-5">
              Kit Inicial
          </h1>
          </div>
  
          <div className="w-full pt-5">
            <div className="md:flex">
              <div className="w-full md:w-1/2 pb-7 md:pb-0">
                <div className="flex justify-center shadow-lg">
                  <img className="w-20 md:w-32 mt-12" src={l20} alt="bidon de 20l" />
                  <img className="w-20 md:w-32" src={caja20} alt="bidon con dispensador" />
                </div>
                <div className="font-parrafo font-bold pt-3">
                  <p className="text-center md:flex md:justify-center text-plomo text-lg">
                    2 Botellones de 20 LT + Dispensador
                  </p>
                </div>
  
                <div className="pt-3 flex justify-evenly text-white text-lg font-titulo">
                  <button className="bg-celeste rounded-lg px-4 py-2 font-bold">
                    $ 10.000
                </button>
                  <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold" onClick={()=>{this.handleClick(this.props.items[3].id)}}>
                    Agregar
                </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 float-left pb-10">
                <div className="flex justify-center shadow-lg">
                  <img className="w-20 md:w-32 mt-12" src={l10} alt="bidon de 10l" />
                  <img className="w-20 md:w-32" src={caja10} alt="bidon con dispensador" />
                </div>
                <div className="font-parrafo font-bold pt-3">
                  <p className="text-center md:flex md:justify-center text-plomo text-lg">
                    2 Botellones de 10 LT + Dispensador
                </p>
                </div>
  
                <div className="pt-3 flex justify-evenly text-white text-lg font-titulo">
                  <button className="bg-celeste rounded-lg px-4 py-2 font-bold">
                    $ 8.000
                </button>
                  <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold" onClick={()=>{this.handleClick(this.props.items[2].id)}}>
                    Agregar
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-contenedor md:py-6 mt-70 md:mt-0">
          <div className="w-full px-8 lg:px-32">
            <div className="w-full">
              <h1 className="text-3xl text-celeste font-titulo font-bold text-center">
                PRODUCTOS
            </h1>
            </div>
            <div className="md:flex pt-7 md:pt-12">
              <div className="w-full md:w-1/3">
                <div className="flex justify-center shadow-lg">
                  <img className="w-25 md:w-32" src={l20} alt="Bidon de 20L" />
                </div>
                <div className="font-parrafo font-bold pt-3">
                  <p className="flex justify-center text-plomo text-lg">
                    Recarga de 20 LT
                </p>
                </div>
  
                <div className="pt-3 flex justify-evenly text-white font-titulo">
                  <button className="bg-celeste rounded-lg px-4 py-1 font-bold">
                    $ 2.500
                  </button>
                    <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold" onClick={()=>{this.handleClick(this.props.items[1].id)}}>
                      Agregar
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 py-7 md:py-0">
                <div className="flex justify-center shadow-lg">
                  <img className="w-25 md:w-32" src={l10} alt="bidon de 10l" />
                </div>
                <div className="font-parrafo font-bold pt-3">
                  <p className="flex justify-center text-plomo text-lg">
                    Recarga de 10 LT
                </p>
                </div>
  
                <div className="pt-3 flex justify-evenly text-white font-titulo">
                  <button className="bg-celeste rounded-lg px-4 py-1 font-bold">
                    $ 1.500
                </button>
                  <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold fond-titulo" onClick={()=>{this.handleClick(this.props.items[0].id)}}>
                    Agregar
                </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 -mt-12 md:mt-0 pb-7 md:pb-0">
                <div className="flex justify-center md:py-3 py-0 shadow-lg">
                  <img className="w-64 mt-16" src={dispensa} alt="dispensador de agua" />
                </div>
                <div className="font-parrafo font-bold pt-3">
                  <p className="flex justify-center text-plomo text-lg">Dispensador</p>
                </div>
  
                <div className="pt-3 flex justify-evenly text-white font-titulo">
                  <button className="bg-celeste rounded-lg px-4 py-1 font-bold">
                    $ 5.000
                  </button>
                  <button className="bg-verde hover:hoverver rounded-lg px-4 font-bold" onClick={()=>{this.handleClick(this.props.items[4].id)}}>
                    Agregar
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {dispatch(addToCart(id))}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);