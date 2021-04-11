import React, { Component } from 'react'
import Card from './CardUI';
import imgMovie from '../assets/netflix.png'
import imgPlanets from '../assets/rocket.png'
import imgVehicles from '../assets/vehicles.png'


class Cards extends Component {

    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={imgMovie} title={'Filmes'} text={'TESTANDO'} link={'/filmes'} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={imgPlanets} title={'Planetas'} text={'TESTANDO'} link={'/planetas'} />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={imgVehicles} title={'Veículos'} text={'TESTANDO'} link={'/veiculos'} />
                    </div>
                </div>
            </div>
        );
    }


}

export default Cards