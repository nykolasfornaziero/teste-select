import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "https://swapi.dev/api/vehicles/"
})

class Vehicles extends Component {

    state = {
        veiculos: [],
        isLoading: true
    }

    async componentDidMount() {
        const response = await api.get();

        // console.log(response.data);

        this.setState({ veiculos: response.data.results });
        this.setState({ isLoading: false })
    }

    render() {

        const { veiculos } = this.state;
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
                                <th class="text-center">Name</th>
                                <th class="text-center">Modelo</th>
                                <th class="text-center">Fabricante</th>
                            </tr>
                        </thead>
                        <tbody>

                            {veiculos.map(veiculo => (
                                <tr key={veiculo.name}>
                                    <td className="col-md-3">{veiculo.name}</td>
                                    <td className="col-md-4">{veiculo.model}</td>
                                    <td className="col-md-4">{veiculo.manufacturer}</td>
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

export default Vehicles;