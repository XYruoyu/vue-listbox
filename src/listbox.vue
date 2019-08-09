
<template>
  <div class="tp-list">
    <div v-if="!multiple">
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="{ selected: item[valueProp] === value }"
        class="list-item"
        @click="singleChoose(item[valueProp])"
      >
        <span>{{ label ? item[label] : item }}</span>
      </div>
    </div>
    <div v-else>
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="[{ selected: selItems.includes(item[valueProp]) }, 'list-item']"
        @click="multiChoose(item)"
      >
        <span>{{ label ? item[label] : item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    multiple: { type: Boolean, default: false },
    data: { type: Array, required: true },
    label: { type: String, default: '' },
    valueProp: { type: String, default: '' },
    value: { type: [Number, String], default: -1 },
  },
  data() {
    return {
      selItems: []
    }
  },

  methods: {
    singleChoose(val) {
      this.$emit('input', val)
    },
    multiChoose(item) {
      this.selItems.includes(item[this.valueProp]) ? this.selItems.splice(this.selItems.indexOf(item[this.valueProp]), 1) : this.selItems.push(item[this.valueProp])
      this.$emit('change', this.selItems)
    },
  },
}
</script>
<style>
.tp-list {
  overflow-y: scroll;
  border: solid 1px silver;
}
.list-item {
  border: solid silver;
  border-width: 0px 1px 1px 0;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 10px;
}
.list-item:hover {
  background-color: #f4f4f4;
}
.list-item.selected {
  background-color: rgb(216, 238, 255);
}
</style>
