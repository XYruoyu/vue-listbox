<template>
  <div>
    <!-- 含有对象的数组 -->
    <div style="width: 150px;margin: 100px auto;">
      <v-listbox :data="list" label="name" value-prop="userId" v-model="singleValue">
      </v-listbox>
      <div>所选项： {{ singleValue }}</div>
    </div>
    <div style="width: 150px;margin: 100px auto;">
      <v-listbox :data="list" label="name" value-prop="userId" multiple @change="fn"> </v-listbox>
      <div>
        所选项：
        <span v-for="(item, index) in multiValue" :key="index"
          >{{ item }}&nbsp;</span
        >
      </div>
    </div>
    <!-- 单纯数组单选和多选 -->
    <div style="width: 150px;margin: 100px auto;">
      <v-listbox :data="simpleList" v-model="singleValue1">
      </v-listbox>
      <div>所选项： {{ singleValue1}}</div>
    </div>
    <div style="width: 150px;margin: 100px auto;">
      <v-listbox :data="simpleList" multiple @change="fn1"> </v-listbox>
      <div>
        所选项：
        <span v-for="(item, index) in multiValue1" :key="index"
          >{{ item }}&nbsp;</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      singleValue: 0,
      multiValue: [],
      singleValue1: 0,
      multiValue1: [],
      list: [
        { name: "选项一", id: 0, userId: '6556277589000', },
        { name: "选项二", id: 1, userId: '6556277589001', },
        { name: "选项三", id: 2, userId: '6556277589002', },
        { name: "选项四", id: 3, userId: '6556277589003', },
        { name: "选项五", id: 4, userId: '6556277589004', },
        { name: "选项六", id: 5, userId: '6556277589005', },
        { name: "选项七", id: 6, userId: '6556277589006', }
      ],
      simpleList: ['Java', 'C', 'Python', 'C++', 'C#', 'JavaScript','PHP']
    };
  },
  methods: {
    fn(val) {
      this.multiValue = val
    },
    fn1(val) {
      this.multiValue1 = val
    }
  }
};
</script>

