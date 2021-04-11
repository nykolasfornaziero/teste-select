import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "https://swapi.dev/api/planets/"
})

class Planets extends Component {

    state = {
        planets: [],
        isLoading: true
    }

    async componentDidMount() {
        const response = await api.get();

        // console.log(response.data);

        this.setState({ planets: response.data.results });
        this.setState({ isLoading: false })
    }

    render() {

        const { planets } = this.state;
        return (
            this.state.isLoading ? <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> :
                <div className='container-fluid'>
                    <table class="table table-striped table-bordered table-hover text-center">
                        <thead class="thead-dark">
                            <tr>
                                <th class="text-center">Nome</th>
                                <th class="text-center">Terreno</th>
                                <th class="text-center">Clima</th>
                                <th class="text-center">População</th>
                            </tr>
                        </thead>
                        <tbody>

                            {planets.map(planet => (
                                <tr key={planet.name}>
                                    <td className="col-md-3">{planet.name}</td>
                                    <td className="col-md-3">{planet.terrain}</td>
                                    <td className="col-md-3">{planet.climate}</td>
                                    <td className="col-md-3">{planet.population}</td>
                                </tr>
                            ))
                            }

                            {/* <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td> */}

                        </tbody>
                    </table>


                </div>
        );
    };



};

export default Planets;