<template>
  <b-modal
    ref="form-model"
    no-close-on-esc
    no-close-on-backdrop
    @ok="submit"
    @cancel="clear"
  >
    <template #modal-header="{ cancel }">
      <h5 class="modal-title">
        <span class="fa fa-drumstick-bite"></span> {{title}}
      </h5>
      <button class="close text-danger" @click="cancel">
        <span aria-hidden="true">&times;</span>
      </button>
    </template>
    <!-- /.modal-header -->

    <template #default>
      <b-form ref="form" @submit.stop.prevent="submit">
        <b-form-group
          label="ชื่ออาหาร:"
          label-for="name"
        >
          <b-form-input
            ref="name"
            v-model="form.name"
            :class="[{'is-invalid': errors.name}]"
            trim
          >
          </b-form-input>
          <b-form-invalid-feedback v-if="errors.name" role="alert">
            <strong>{{errors.name[0]}}</strong>
          </b-form-invalid-feedback>
        </b-form-group>
        <!-- /.form-group -->
      </b-form>
    </template>
    <!-- /.modal-body -->

    <template #modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="primary" @click="ok">
        <span class="fa fa-save"></span> บันทึก
      </b-button>
      <b-button size="sm" variant="secondary" @click="cancel">
        <span class="fa fa-ban"></span> ปิด
      </b-button>
    </template>
    <!-- /.modal-footer -->
  </b-modal>
</template>

<script src="./form.modal.js"></script>
<style src="./form.modal.scss" lang="scss" scoped></style>