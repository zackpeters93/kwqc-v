<template>
    <div class="container-fluid mt-4">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="bg-secondary text-white card-header">
                        <h4>Employees</h4><span style="float: right;"><b-badge variant="light">Total Active</b-badge> | <b-badge variant="success">Current</b-badge> | <b-badge variant="warning">Expiring</b-badge> | <b-badge variant="danger">Expired</b-badge></span>
                    </div>
                    <div class="card-body">
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                <th scope="col">Badge#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">GMAW-P</th>
                                <th scope="col">SMAW</th>
                                <th scope="col">SAW</th>
                                <th scope="col">GTAW</th>
                                <th scope="col">T-1FCAW</th>
                                <th scope="col">SST-SMAW</th>
                                <th scope="col">SST-FCAW</th>
                                <th scope="col">T-5</th>
                                <th scope="col">Shape</th>
                                <th scope="col">Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td class="bg-success text-white">1/1/2020</td>
                                    <td class="bg-success text-white">12/30/2019</td>
                                    <td class="bg-success text-white">1/1/2020</td>
                                    <td class="bg-success text-white">12/30/2019</td>
                                    <td class="bg-success text-white">1/1/2020</td>
                                    <td class="bg-success text-white">12/30/2019</td>
                                    <td class="bg-success text-white">1/1/2020</td>
                                    <td class="bg-success text-white">12/30/2019</td>
                                    <td></td>
                                    <td>
                                        <b-button-toolbar aria-label="update toolbar">
                                            <b-button-group size="sm" class="mr-1">
                                                <b-button variant="outline-secondary" v-b-modal.update><i class="fas fa-file-signature"></i></b-button>
                                                <b-button variant="outline-secondary" v-b-modal.edit><i class="far fa-edit"></i></b-button>
                                                <b-button variant="outline-secondary" v-b-modal.inactivate><i class="far fa-window-close"></i></b-button>
                                            </b-button-group>
                                        </b-button-toolbar>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td class="bg-success text-white">1/1/2020</td>
                                    <td class="bg-warning text-white">12/30/2019</td>
                                    <td class="bg-danger text-white">1/1/2020</td>
                                    <td class="bg-light">12/30/2019</td>
                                    <td class="bg-light">1/1/2020</td>
                                    <td class="bg-light">12/30/2019</td>
                                    <td class="bg-dark text-white">1/1/2020</td>
                                    <td class="bg-success text-white">12/30/2019</td>
                                    <td></td>
                                    <td>
                                        <b-button-toolbar aria-label="update toolbar">
                                            <b-button-group size="sm" class="mr-1">
                                                <b-button variant="outline-secondary" v-b-modal.update><i class="fas fa-file-signature"></i></b-button>
                                                <b-button variant="outline-secondary" v-b-modal.edit><i class="far fa-edit"></i></b-button>
                                                <b-button variant="outline-secondary" v-b-modal.inactivate><i class="far fa-window-close"></i></b-button>
                                            </b-button-group>
                                        </b-button-toolbar>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>1/1/2020</td>
                                    <td>12/30/2019</td>
                                    <td>1/1/2020</td>
                                    <td>12/30/2019</td>
                                    <td>1/1/2020</td>
                                    <td>12/30/2019</td>
                                    <td>1/1/2020</td>
                                    <td>12/30/2019</td>
                                    <td></td>
                                    <td>
                                        <b-button-toolbar aria-label="update toolbar">
                                            <b-button-group size="sm" class="mr-1">
                                                <b-button variant="outline-secondary" v-b-modal.update><i class="fas fa-file-signature"></i></b-button>
                                                <b-button variant="outline-secondary" v-b-modal.edit><i class="far fa-edit"></i></b-button>
                                                <b-button variant="outline-secondary" v-b-modal.inactivate><i class="far fa-window-close"></i></b-button>
                                            </b-button-group>
                                        </b-button-toolbar>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <b-modal id="update" title="BootstrapVue">
            <p class="my-4">Update Qualification!</p>
        </b-modal>
        <b-modal id="edit" title="BootstrapVue">
            <p class="my-4">Edit Employee!</p>
        </b-modal>
        <b-modal id="inactivate" title="BootstrapVue">
            <p class="my-4">Inactivate Welder!</p>
        </b-modal>
    </div>
</template>
