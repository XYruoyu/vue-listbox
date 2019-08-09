# vue-listbox2

[Online Demo](https://unpkg.com/@xyruoyu/vue-listbox/demo/dist/index.html)

## Usage

Install:

```sh
npm install @xyruoyu/vue-listbox
```

Import:

```js
// main.js
import Vue from 'vue'
import VListbox from '@xyruoyu/vue-listbox'

Vue.use(VListbox)
```

Use:

```html
<!-- app.vue -->
<template>
  <div>
    <div style="width: 150px;margin: 100px auto;">
      <v-list :data="list" label="name" value-prop="userId" v-model="value">
      </v-list>
      <div>所选项： {{ value }}</div>
    </div>
    <div style="width: 150px;margin: 100px auto;">
      <v-list :data="list" label="name" value-prop="userId" multiple @change="fn"> </v-list>
      <div>
        所选项：
        <span v-for="(item, index) in value1" :key="index"
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
      value: 0,
      value1: [],
      list: [
        { name: "选项一", id: 0, userId: '6556277589000', },
        { name: "选项二", id: 1, userId: '6556277589001', },
        { name: "选项三", id: 2, userId: '6556277589002', },
        { name: "选项四", id: 3, userId: '6556277589003', },
        { name: "选项五", id: 4, userId: '6556277589004', },
        { name: "选项六", id: 5, userId: '6556277589005', },
        { name: "选项七", id: 6, userId: '6556277589006', }
      ]
    };
  },
  methods: {
    fn(val) {
      this.value1 = val
    }
  }
};
</script>
```

## API

### Props

| Name           | Type    | Required | Default  |
| --             | --      | --       | --       |
| multiple       | Boolean | false    | false    |
| data           | Array   | true     | false    |
| label          | String  | false    | ''       |
| valueProp      | String  | false    | ''       |
| value          | Number, String | false  | -1  |

### Events

- change

## License

MIT
