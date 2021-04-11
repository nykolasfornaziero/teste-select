import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "https://swapi.dev/api/films/"
})

class Movies extends Component {

    state = {
        filmes: [],
        isLoading: true,
    }

    async componentDidMount() {
        const response = await api.get();

        // console.log(response.data);

        this.setState({ filmes: response.data.results });
        this.setState({ isLoading: false })
    }

    render() {

        const { filmes } = this.state;
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
                                <th class="text-center">Titulo</th>
                                <th class="text-center">Diretor</th>
                                <th class="text-center">Produtor</th>
                            </tr>
                        </thead>
                        <tbody>

                            {filmes.map(filme => (
                                <tr key={filme.name} data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
                                    <td className="col-md-3">{filme.title}</td>
                                    <td className="col-md-4">{filme.director}</td>
                                    <td className="col-md-4">{filme.producer}</td>

                                </tr>

                            ))
                            }

                        </tbody>
                    </table>


                </div>
        );
    };


};

export default Movies;