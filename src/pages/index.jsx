import React from "react";

const MainPage = () => {
    return (
        <div className="container-fluid">
            <div class="row justify-content-center align-items-center">
                <h2>Cadastre-se em nossa Newsletter</h2>
            </div>
            <div class="row justify-content-center align-items-center h-100">
                <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    <form action="">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Nome" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email" />
                        </div>
                        <div class="form-group text-center">
                            <button type="button" class="btn btn-primary">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MainPage;