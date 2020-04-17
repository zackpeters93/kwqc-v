<template>
    <div class="container-fluid mt-4">
        <div class="row justify-content-center">
            <div class="col-12 col-md-9 col-lg-7">
                <div class="card">
                    <div class="bg-secondary text-white card-header">
                        <h4>Weld Types</h4><span style="float: right;"><b-badge variant="light">Total Active</b-badge> | <b-badge variant="success">Current</b-badge> | <b-badge variant="warning">Expiring</b-badge> | <b-badge variant="danger">Expired</b-badge></span>
                    </div>
                    <div class="card-body">
                        <b-card-group deck v-if="!loading">
                            <!-- TODO
                            On each card, count the number of employees who:
                            have a valid date for that specific weld type, display total in the light variant badge
                            have a date within the past 5 months for the specific weld type, display total in the success variant badge
                            have a date between 5 and 6 months for the specific weld type, display total in the warning variant badge
                            have a date between 6 and 12 months for the specific weld type, display total in the danger variant badge
                            repeat for all weld types -->
                            <b-card header-bg-variant="light" text-variant="black" header="GMAW-P" class="text-center">
                                <b-card-text>
                                    <div class="row">
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="light">{{calculateBadge('gmaw_p','validity')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="success">{{calculateBadge('gmaw_p','lt5')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="warning">{{calculateBadge('gmaw_p','5bt6')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="danger">{{calculateBadge('gmaw_p','6bt12')}}</b-badge>
                                            </h6>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card>
                            <b-card header-bg-variant="light" text-variant="black" header="SMAW" class="text-center">
                                <b-card-text>
                                    <div class="row">
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="light">{{calculateBadge('smaw','validity')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="success">{{calculateBadge('smaw','lt5')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="warning">{{calculateBadge('smaw','5bt6')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="danger">{{calculateBadge('smaw','6bt12')}}</b-badge>
                                            </h6>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card>
                            <b-card header-bg-variant="light" text-variant="black" header="SAW" class="text-center">
                                <b-card-text>
                                    <div class="row">
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="light">{{calculateBadge('smaw','6bt12')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="success">{{calculateBadge('saw','lt5')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="warning">{{calculateBadge('saw','5bt6')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="danger">{{calculateBadge('saw','6bt12')}}</b-badge>
                                            </h6>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card>
                            <b-card header-bg-variant="light" text-variant="black" header="GTAW" class="text-center">
                                <b-card-text>
                                    <div class="row">
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="light">{{calculateBadge('gtaw','validity')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="success">{{calculateBadge('gtaw','lt5')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="warning">{{calculateBadge('gtaw','5bt6')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="danger">{{calculateBadge('gtaw','6bt12')}}</b-badge>
                                            </h6>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card>
                        </b-card-group>
                        <br>
                        <b-card-group deck v-if="!loading">
                            <b-card header-bg-variant="light" text-variant="black" header="T-1FCAW" class="text-center">
                                <b-card-text>
                                    <div class="row">
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="light">{{calculateBadge('t1','validity')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="success">{{calculateBadge('t1','lt5')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="warning">{{calculateBadge('t1','5bt6')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="danger">{{calculateBadge('t1','6bt12')}}</b-badge>
                                            </h6>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card>
                            <b-card header-bg-variant="light" text-variant="black" header="SST-SMAW" class="text-center">
                                <b-card-text>
                                    <div class="row">
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="light">{{calculateBadge('sst_smaw','validity')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="success">{{calculateBadge('sst_smaw','lt5')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="warning">{{calculateBadge('sst_smaw','5bt6')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="danger">{{calculateBadge('sst_smaw','6bt12')}}</b-badge>
                                            </h6>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card>
                            <b-card header-bg-variant="light" text-variant="black" header="SST-FCAW" class="text-center">
                                <b-card-text>
                                    <div class="row">
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="light">{{calculateBadge('sst_fcaw','validity')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="success">{{calculateBadge('sst_fcaw','lt5')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="warning">{{calculateBadge('sst_fcaw','5bt6')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="danger">{{calculateBadge('sst_fcaw','6bt12')}}</b-badge>
                                            </h6>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card>
                            <b-card header-bg-variant="light" text-variant="black" header="T-5" class="text-center">
                                <b-card-text>
                                    <div class="row">
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="light">{{calculateBadge('t5','validity')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="success">{{calculateBadge('t5','lt5')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="warning">{{calculateBadge('t5','5bt6')}}</b-badge>
                                            </h6>
                                        </div>
                                        <div class="col-2">
                                            <h6>
                                                <b-badge variant="danger">{{calculateBadge('t5','6bt12')}}</b-badge>
                                            </h6>
                                        </div>
                                    </div>
                                </b-card-text>
                            </b-card>
                        </b-card-group>
                        <title-spinner class="text-center" v-if="loading" />
                        <hr>
                        <b-button variant="outline-primary" disabled><i class="fa fa-plus" aria-hidden="true"></i>  Add Weld Type</b-button>
                    </div>
                </div>
                <br>
                <!-- <h4>Weld Type: GMAW-P</h4 style="float: right;"><b-badge variant="danger">Expired</b-badge> | <b-badge variant="warning">Expiring</b-badge> | <b-badge variant="success">Current</b-badge> | <b-badge variant="dark">Inactive</b-badge></span> -->
                <!-- <table class="table table-sm">
                    <thead>
                        <tr>
                        <th scope="col">Badge#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Cert</th>
                        <th scope="col">Last Job</th>
                        <th scope="col">Job#</th>
                        <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-danger text-white">
                            <th>1</th>
                            <td>Juan</td>
                            <td>Expired</td>
                            <td><a href="#" class="text-white"><i class="fas fa-certificate"></i></a></td>
                            <td>10/1/2019</td>
                            <td>123456</td>
                            <td>
                                <b-button-toolbar aria-label="update toolbar">
                                    <b-button-group size="sm" class="mr-1">
                                        <b-button variant="outline-secondary" v-b-modal.update><i class="fas fa-file-signature text-white"></i></b-button>
                                        <b-button variant="outline-secondary" v-b-modal.edit><i class="far fa-edit text-white"></i></b-button>
                                        <b-button variant="outline-secondary" v-b-modal.inactivate><i class="far fa-window-close text-white"></i></b-button>
                                    </b-button-group>
                                </b-button-toolbar>
                            </td>
                        </tr>
                        <tr class="bg-warning">
                            <th>2</th>
                            <td>Beto</td>
                            <td>Expire</td>
                            <td><a href="#" class="text-white"><i class="fas fa-certificate"></i></a></td>
                            <td>12/1/2-19</td>
                            <td>123456</td>
                            <td>
                                <b-button-toolbar aria-label="update toolbar">
                                    <b-button-group size="sm" class="mr-1">
                                        <b-button variant="outline-secondary" v-b-modal.update><i class="fas fa-file-signature text-white"></i></b-button>
                                        <b-button variant="outline-secondary" v-b-modal.edit><i class="far fa-edit text-white"></i></b-button>
                                        <b-button variant="outline-secondary" v-b-modal.inactivate><i class="far fa-window-close text-white"></i></b-button>
                                    </b-button-group>
                                </b-button-toolbar>
                            </td>
                        </tr>
                        <tr class="bg-success text-white">
                            <th>2</th>
                            <td>Ima</td>
                            <td>Gooden</td>
                            <td><a href="#" class="text-white"><i class="fas fa-certificate"></i></a></td>
                            <td>3/0/2020</td>
                            <td>123456</td>
                            <td>
                                <b-button-toolbar aria-label="update toolbar">
                                    <b-button-group size="sm" class="mr-1">
                                        <b-button variant="outline-secondary" v-b-modal.update><i class="fas fa-file-signature text-white"></i></b-button>
                                        <b-button variant="outline-secondary" v-b-modal.edit><i class="far fa-edit text-white"></i></b-button>
                                        <b-button variant="outline-secondary" v-b-modal.inactivate><i class="far fa-window-close text-white"></i></b-button>
                                    </b-button-group>
                                </b-button-toolbar>
                            </td>
                        </tr>
                        <tr class="bg-dark text-white">
                            <th>2</th>
                            <td>Dunn</td>
                            <td>Gone</td>
                            <td><a href="#" class="text-white"><i class="fas fa-certificate"></i></a></td>
                            <td>2/26/2015</td>
                            <td>123456</td>
                            <td>
                                <b-button-toolbar aria-label="update toolbar">
                                    <b-button-group size="sm" class="mr-1">
                                        <b-button variant="outline-secondary" v-b-modal.update><i class="fas fa-file-signature text-white"></i></b-button>
                                        <b-button variant="outline-secondary" v-b-modal.edit><i class="far fa-edit text-white"></i></b-button>
                                        <b-button variant="outline-secondary" v-b-modal.inactivate><i class="far fa-window-close text-white"></i></b-button>
                                    </b-button-group>
                                </b-button-toolbar>
                            </td>
                        </tr>
                    </tbody>
                </table> -->
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

<script>
import { db } from '@/db/index.js'
import moment from 'moment'
import { TileSpinner } from 'vue-spinners'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TileSpinner
  },
  data () {
    return {
      loading: true,
      employees: []
    }
  },
  created () {
    this.fetchEmployees()
  },
  methods: {
    fetchEmployees () {
      db.collection('employees').get().then(snapshot => {
        this.loading = false
        this.employees = snapshot.docs.map(d => Object.assign({ id: d.id }, d.data()))
      // eslint-disable-next-line handle-callback-err
      }).catch(err => {
        this.loading = false
      })
    },
    calculateBadge (key, type) {
      const emps = this.employees.filter(e => moment(e[key], 'YYYY-MM-DD').format('X') !== 'Invalid date')
      const fiveM = moment().subtract(5, 'months').format('X')
      const sixM = moment().subtract(6, 'months').format('X')
      const twelveM = moment().subtract(12, 'months').format('X')
      if (type === 'validity') {
        return emps ? emps.length : 0
      } else if (type === 'lt5') {
        const lt5 = emps.filter(e => moment(e[key], 'YYYY-MM-DD').format('X') >= fiveM)
        return lt5 ? lt5.length : 0
      } else if (type === '5bt6') {
        const bt6 = emps.filter(e => moment(e[key], 'YYYY-MM-DD').format('X') < fiveM && moment(e[key], 'YYYY-MM-DD').format('X') > sixM)
        return bt6 ? bt6.length : 0
      } else if (type === '6bt12') {
        const bt12 = emps.filter(e => moment(e[key], 'YYYY-MM-DD').format('X') <= sixM && moment(e[key], 'YYYY-MM-DD').format('X') > twelveM)
        return bt12 ? bt12.length : 0
      }
    }
  }
}
</script>
