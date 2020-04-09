<template>
    <div class="container-fluid mt-4">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="bg-secondary text-white card-header">
                        <h4>Employees</h4><b-button variant="primary" size="sm" v-b-modal.addnew>Add New</b-button><span style="float: right;"><b-badge variant="light">Total Active</b-badge> | <b-badge variant="success">Current</b-badge> | <b-badge variant="warning">Expiring</b-badge> | <b-badge variant="danger">Expired</b-badge></span>
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

        <b-modal id="update" title="Update Qualification Record" size="xl">
            <h4 class="my-4">Welder Name</h4>
            <div>
                <b-form>
                    <div class="row">
                        <div class="col-3">
                            <div>
                                <label for="example-input">GMAW-P Qualified Date</label>
                                <b-input-group class="mb-3">
                                    <b-input-group-append>
                                        <b-form-datepicker
                                        v-model="gmaw_p_value"
                                        :min="min"
                                        :max="max"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        button-variant="success"
                                        button-only
                                        right
                                        locale="en-US"
                                        aria-controls="example-input"
                                        ></b-form-datepicker>
                                    </b-input-group-append>
                                    <b-form-input
                                        id="example-input"
                                        v-model="gmaw_p_value"
                                        type="text"
                                        placeholder="YYYY-MM-DD"
                                    ></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <label for="example-input">SMAW Qualified Date</label>
                                <b-input-group class="mb-3">
                                    <b-input-group-append>
                                        <b-form-datepicker
                                        v-model="smaw_value"
                                        :min="min"
                                        :max="max"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        button-variant="success"
                                        button-only
                                        right
                                        locale="en-US"
                                        aria-controls="example-input"
                                        ></b-form-datepicker>
                                    </b-input-group-append>
                                    <b-form-input
                                        id="example-input"
                                        v-model="smaw_value"
                                        type="text"
                                        placeholder="YYYY-MM-DD"
                                    ></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <label for="example-input">SAW Qualified Date</label>
                                <b-input-group class="mb-3">
                                    <b-input-group-append>
                                        <b-form-datepicker
                                        v-model="saw_value"
                                        :min="min"
                                        :max="max"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        button-variant="success"
                                        button-only
                                        right
                                        locale="en-US"
                                        aria-controls="example-input"
                                        ></b-form-datepicker>
                                    </b-input-group-append>
                                    <b-form-input
                                        id="example-input"
                                        v-model="saw_value"
                                        type="text"
                                        placeholder="YYYY-MM-DD"
                                    ></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <label for="example-input">GTAW Qualified Date</label>
                                <b-input-group class="mb-3">
                                    <b-input-group-append>
                                        <b-form-datepicker
                                        v-model="gtaw_value"
                                        :min="min"
                                        :max="max"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        button-variant="success"
                                        button-only
                                        right
                                        locale="en-US"
                                        aria-controls="example-input"
                                        ></b-form-datepicker>
                                    </b-input-group-append>
                                    <b-form-input
                                        id="example-input"
                                        v-model="gtaw_value"
                                        type="text"
                                        placeholder="YYYY-MM-DD"
                                    ></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <div>
                                <label for="example-input">T-1FCAW Qualified Date</label>
                                <b-input-group class="mb-3">
                                    <b-input-group-append>
                                        <b-form-datepicker
                                        v-model="t1_value"
                                        :min="min"
                                        :max="max"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        button-variant="success"
                                        button-only
                                        right
                                        locale="en-US"
                                        aria-controls="example-input"
                                        ></b-form-datepicker>
                                    </b-input-group-append>
                                    <b-form-input
                                        id="example-input"
                                        v-model="t1_value"
                                        type="text"
                                        placeholder="YYYY-MM-DD"
                                    ></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <label for="example-input">SST-SMAW Qualified Date</label>
                                <b-input-group class="mb-3">
                                    <b-input-group-append>
                                        <b-form-datepicker
                                        v-model="sst_smaw_value"
                                        :min="min"
                                        :max="max"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        button-variant="success"
                                        button-only
                                        right
                                        locale="en-US"
                                        aria-controls="example-input"
                                        ></b-form-datepicker>
                                    </b-input-group-append>
                                    <b-form-input
                                        id="example-input"
                                        v-model="sst_smaw_value"
                                        type="text"
                                        placeholder="YYYY-MM-DD"
                                    ></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <label for="example-input">SST-FCAW Qualified Date</label>
                                <b-input-group class="mb-3">
                                    <b-input-group-append>
                                        <b-form-datepicker
                                        v-model="sst_fcaw_value"
                                        :min="min"
                                        :max="max"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        button-variant="success"
                                        button-only
                                        right
                                        locale="en-US"
                                        aria-controls="example-input"
                                        ></b-form-datepicker>
                                    </b-input-group-append>
                                    <b-form-input
                                        id="example-input"
                                        v-model="sst_fcaw_value"
                                        type="text"
                                        placeholder="YYYY-MM-DD"
                                    ></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <label for="example-input">T-5 Qualified Date</label>
                                <b-input-group class="mb-3">
                                    <b-input-group-append>
                                        <b-form-datepicker
                                        v-model="t5_value"
                                        :min="min"
                                        :max="max"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        button-variant="success"
                                        button-only
                                        right
                                        locale="en-US"
                                        aria-controls="example-input"
                                        ></b-form-datepicker>
                                    </b-input-group-append>
                                    <b-form-input
                                        id="example-input"
                                        v-model="t5_value"
                                        type="text"
                                        placeholder="YYYY-MM-DD"
                                    ></b-form-input>
                                </b-input-group>
                            </div>
                        </div>
                    </div>
                </b-form>
            </div>
        </b-modal>
        <b-modal id="edit" title="Edit Welder" size="xl">
            <h4 class="my-4">Edit Employee</h4>
            <div>
                <b-form>
                    <div class="row">
                        <div class="col-4">
                            <b-form-group
                                id="add-badge"
                                label="Badge #:"
                                label-for="badge"
                            >
                                <b-form-input
                                    id="badge"
                                    type="number"
                                    required
                                    placeholder="Enter Badge#"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">
                            <b-form-group
                                id="add-first-name"
                                label="First Name:"
                                label-for="first-name"
                            >
                                <b-form-input
                                    id="first-name"
                                    type="text"
                                    required
                                    placeholder="Enter First Name"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                        <div class="col-4">
                            <b-form-group
                                id="add-last-name"
                                label="Last Name:"
                                label-for="last-name"
                            >
                                <b-form-input
                                    id="last-name"
                                    type="text"
                                    required
                                    placeholder="Enter Last Name"
                                ></b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                </b-form>
            </div>
        </b-modal>
        <b-modal id="inactivate" title="Inactivate Welder" size="xl">
            <p class="my-4">Inactivate Welder!</p>
            <div>
                <b-form>
                    <div class="row">
                        <div class="col-3">
                            <div>
                                <b-form-checkbox v-model="checked" name="check-button" switch>
                                GMAW-P <b>(Checked: {{ checked }})</b>
                                </b-form-checkbox>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <b-form-checkbox v-model="checked" name="check-button" switch>
                                SMAW <b>(Checked: {{ checked }})</b>
                                </b-form-checkbox>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <b-form-checkbox v-model="checked" name="check-button" switch>
                                SAW <b>(Checked: {{ checked }})</b>
                                </b-form-checkbox>
                            </div>
                        </div>
                        <div class="col-3">
                            <div>
                                <b-form-checkbox v-model="checked" name="check-button" switch>
                                GTAW <b>(Checked: {{ checked }})</b>
                                </b-form-checkbox>
                            </div>
                        </div>
                    </div>
                </b-form>
            </div>
        </b-modal>
        <hr>

    </div>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import Firebase from 'firebase'
// eslint-disable-next-line no-unused-vars
import db from '../db.js'

export default {
  name: 'employees'

}
</script>
