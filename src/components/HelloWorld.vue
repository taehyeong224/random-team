<template>
  <div class="hello">
    <div class="name-input">
      <label>add name or something</label>
      <input type="text" v-model="name">
      <button @click="addName">add</button>
    </div>
    <div class="name-list">
      name list
      <br>
      {{names}}
      <br>
      {{names.length}} people
      <br>
      <label>team count</label>
      <input type="number" v-model="team.count">
      <br>
      <label>size of team</label>
      <input type="number" v-model="team.size">
      <br>
      <button @click="clear">clear</button>
      <button @click="shake">shake</button>
    </div>
    <div class="result">
      team matching
      <div id="copy">{{shuffleList}}</div>
      <button @click="shake">again</button>
    </div>
  </div>
</template>

<script>
import { GET_NAMES, ADD_NAME, CLEAR_NAME } from "../config/StoreType";
import { mapGetters } from "vuex";
import { shuffle, chunk } from "underscore";
import {isExist} from "../util/util"
export default {
  name: "HelloWorld",
  data: function() {
    return {
      name: "",
      team: {
        count: 1,
        size: 10
      },
      shuffleList: []
    };
  },
  created: function() {
    this.$store.dispatch(GET_NAMES);
  },
  computed: {
    ...mapGetters(["names"])
  },
  methods: {
    addName: function() {
      this.$store.dispatch(ADD_NAME, { name: this.name });
    },
    clear: function() {
      this.$store.dispatch(CLEAR_NAME);
    },
    beforeShake: function() {
      this.shuffleList = [];
    },
    shake: function() {
      this.beforeShake();
      const result = shuffle(this.names);
      this.divide();
      this.insertToGroup(result);
      this.sliceEmptyArray();
    },
    divide: function() {
      if (this.team.count < 1) {
        this.team.count = 1;
      }
      for (let i = 0; i < this.team.count; i++) {
        this.shuffleList.push([]);
      }
    },
    insertToGroup: function(array) {
      let k = 0;
      for (let i = 0; i < this.team.count; i++) { // 팀 갯 수 만큼 돌도록
        for (let j = k; j < array.length; j++) { // array 길이 만큼 돌도록 
          this.shuffleList[i].push(isExist(array[j]) ? array[j] : null)
          k = j;
          if (this.shuffleList[i].length === Number(this.team.size)) {
            break;
          }
        }
        k = k + 1;
      }
    },
    copy: function() {
      const dom = document.getElementById("copy")
      dom.value = JSON.stringify(this.shuffleList);
      dom.select();
      document.execCommand("copy");
    },
    sliceEmptyArray: function() {
      const length = this.shuffleList.length;
      const copy = this.shuffleList.filter((ary) => {
        return ary.length > 0
      })
      this.shuffleList = JSON.parse(JSON.stringify(copy));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name-input {
  border: 1px red solid;
}
.name-list {
  border: 1px saddlebrown solid;
}
.result {
  border: 1px blue solid;
}
</style>
