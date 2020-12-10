<template>
<div v-if="loading"><loading /></div>
<div v-else class="animated fadeIn">
  <b-card no-body>
    <b-card-header>
      <span class="fa fa-drumstick-bite"></span> Foods
    </b-card-header>
    <!-- /.card-header -->
    <b-card-body>
      <b-button variant="primary" class="mb-3" @click="addFood">
        <span class="fa fa-plus"></span> Add
      </b-button>

      <b-list-group>
        <b-list-group-item v-if="foods.length === 0" class="text-center">ไม่มีข้อมูล</b-list-group-item>
        <b-list-group-item v-else v-for="(food, index) in foods" :key="index">
          <span class="fa fa-drumstick-bite"></span>
          <b-link href="javascript:void(0)" @click="showFood(food)">{{food.name}}</b-link>
          <span class="float-right">
            <b-button variant="ghost-primary" size="sm" @click="editFood(food)">
              <span class="fa fa-pen"></span>
            </b-button>
            <b-button variant="ghost-danger" size="sm" @click="removeFood(food, index)">
              <span class="fa fa-trash-alt"></span>
            </b-button>
          </span>
        </b-list-group-item>
      </b-list-group>
      <!-- /.list-group -->
    </b-card-body>
    <!-- /.card-body -->
  </b-card>
  <!-- /.card -->

  <!-- form modal -->
  <form-modal
    ref="form-modal"
    :title="title"
    :food="food"
  />
</div>
</template>

<script src="./food.js"></script>
<style src="./food.scss" lang="scss" scoped></style>
