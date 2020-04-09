<template>
    <div>
        <div class="container-fluid">
            <br>
            <div class="card">
                <div class="card-header bg-success text-white">
                    Add New Employee
                </div>
                <div class="card-body">
                    <b-form @submit="handleAdd">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                  <label for="">Badge#</label>
                                  <input type="text" name="" id="" class="form-control" placeholder="Employee's Badge #" aria-describedby="helpId" v-model="form.badge_value">
                                  <small id="helpId" class="text-muted"></small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                  <label for="">First Name</label>
                                  <input type="text" name="" id="" class="form-control" placeholder="Employee's First Name" aria-describedby="helpId" v-model="form.first_name_value">
                                  <small id="helpId" class="text-muted"></small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                  <label for="">Last Name</label>
                                  <input type="text" name="" id="" class="form-control" placeholder="Employee's Last Name" aria-describedby="helpId" v-model="form.last_name_value">
                                  <small id="helpId" class="text-muted"></small>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-3">
                                <div>
                                    <label for="example-input">GMAW-P Qualified Date</label>
                                    <b-input-group class="mb-3">
                                        <b-input-group-append>
                                            <b-form-datepicker
                                            v-model="form.gmaw_p_value"
                                            :min="min"
                                            :max="max"
                                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                            button-variant="success"
                                            button-only
                                            right
                                            locale="en-US"
                                            aria-controls="example-input"
                                            @context="onContext"
                                            ></b-form-datepicker>
                                        </b-input-group-append>
                                        <b-form-input
                                            id="example-input"
                                            v-model="form.gmaw_p_value"
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
                                            v-model="form.smaw_value"
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
                                            v-model="form.smaw_value"
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
                                            v-model="form.saw_value"
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
                                            v-model="form.saw_value"
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
                                            v-model="form.gtaw_value"
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
                                            v-model="form.gtaw_value"
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
                                            v-model="form.t1_value"
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
                                            v-model="form.t1_value"
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
                                            v-model="form.sst_smaw_value"
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
                                            v-model="form.sst_smaw_value"
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
                                            v-model="form.sst_fcaw_value"
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
                                            v-model="form.sst_fcaw_value"
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
                                            v-model="form.t5_value"
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
                                            v-model="form.t5_value"
                                            type="text"
                                            placeholder="YYYY-MM-DD"
                                        ></b-form-input>
                                    </b-input-group>
                                </div>
                            </div>
                        </div>
                        <b-button type="submit" variant="primary">Submit</b-button>&nbsp;<b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'addemployee',
  data () {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th 60 months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 60)
    minDate.setDate(15)
    // Today
    const maxDate = new Date(today)

    return {
      form: {
        badge_value: '',
        first_name_value: '',
        last_name_value: '',
        min: minDate,
        max: maxDate,
        gmaw_p_value: '',
        smaw_value: '',
        saw_value: '',
        gtaw_value: '',
        t1_value: '',
        sst_smaw_value: '',
        sst_fcaw_value: '',
        t5_value: ''
      }
    }
  },
  methods: {
    handleAdd: function () {
      this.$emit('addEmployee', this.form)
    }
  }
}
</script>
