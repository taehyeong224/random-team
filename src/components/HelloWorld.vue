<template>
  <div class="hello">
    <div id="webView" data-canvas="true" data-show-memo="false" data-show-link="false">
      <div data-obj-id="lDExQ" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 46px; left: 240px; width: 429px; height: 48px;">
        <div data-text-content="true" style="font-weight:bold;font-size:36px;" class="">Random Team Matching</div>
      </div>
      <div data-obj-id="h7Jt1" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 146px; left: 89px; width: 88px; height: 24px;">
        <div @click="addName" data-text-content="true" style="border-radius: 30px; text-align: center; line-height: 20px; color: rgb(255, 255, 255); font-size: 12px; box-shadow: none; background-color: rgb(52, 152, 219);" class="">Add Name</div>
      </div>
      <div data-obj-id="KI27W" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 148px; left: 195px; width: 300px; height: 40px;">
        <input v-model="name" type="text" data-min-width="60" data-min-height="30" data-text-content="true" value="kim" style="color: rgb(94, 94, 94);" class="">
      </div>
      <div data-obj-id="aZeFa" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 202px; left: 89px; width: 88px; height: 24px;">
        <div data-text-content="true" style="border-radius: 30px; text-align: center; line-height: 20px; color: rgb(255, 255, 255); font-size: 12px; box-shadow: none; background-color: rgb(0, 0, 0);" class="">name list</div>
      </div>
      <div data-obj-id="i8Hq5" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 201px; left: 195px; width: 300px; height: 40px;">
        <input v-model="names" type="text" data-min-width="60" data-min-height="30" data-text-content="true" value="" style="color: rgb(94, 94, 94);" class="" spellcheck="false">
        {{names.length}} people
      </div>
      <div data-obj-id="hUGf7" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 254px; left: 89px; width: 88px; height: 24px;">
        <div data-text-content="true" style="border-radius: 30px; text-align: center; line-height: 20px; color: rgb(255, 255, 255); font-size: 12px; box-shadow: none; background-color: rgb(0, 0, 0);" class="">team count</div>
      </div>
      <div data-obj-id="OjhvR" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 316px; left: 89px; width: 88px; height: 24px;">
        <div data-text-content="true" style="border-radius: 30px; text-align: center; line-height: 20px; color: rgb(255, 255, 255); font-size: 12px; box-shadow: none; background-color: rgb(0, 0, 0);" class="">size of team</div>
      </div>
      <div data-obj-id="PN0gz" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 389px; left: 89px; width: 100px; height: 40px;">
        <div @click="clear" data-text-content="true" style="font-size: 16px; color: rgb(255, 255, 255); text-align: center; line-height: 2.5em; border-radius: 4px; background-color: rgb(26, 188, 156);" class="">Clear</div>
      </div>
      <div data-obj-id="ncSI7" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 389px; left: 210px; width: 100px; height: 40px;">
        <div @click="shake" data-text-content="true" style="font-size: 16px; color: rgb(255, 255, 255); text-align: center; line-height: 2.5em; border-radius: 4px; background-color: rgb(231, 76, 60);" class="">Shake</div>
      </div>
      <div data-obj-id="txy1G" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 256px; left: 195px; width: 300px; height: 40px;">
        <input type="number" v-model="team.count" data-min-width="60" data-min-height="30" data-text-content="true" value="1" style="color: rgb(94, 94, 94);" class="">
      </div>
      <div data-obj-id="LzEei" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 318px; left: 195px; width: 300px; height: 40px;">
        <input type="number" v-model="team.size" data-min-width="60" data-min-height="30" data-text-content="true" value="10" style="color: rgb(94, 94, 94);" class="">
      </div>
      <div data-obj-id="aUN7W" data-obj-type="element" class="" style="position: absolute; top: 128px; left: 534px; width: 20px; height: 454px;">
        <div data-image-content="true" style="background-image: url(/static/images/shape/line-vertical.svg);"></div>
      </div>
      <div data-obj-id="eOWvv" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 139px; left: 567px; width: 300px; height: 36px;">
        <div data-text-content="true" style="font-weight:bold;font-size:24px" class="">Result</div>
      </div>
      <div @click="shake" data-obj-id="CGOeU" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 135px; left: 682px; width: 100px; height: 40px;">
        <div data-text-content="true" style="font-size: 16px; color: rgb(255, 255, 255); text-align: center; line-height: 2.5em; border-radius: 4px; background-color: rgb(231, 76, 60);" class="">Again</div>
      </div>
      <div data-obj-id="bPcvg" data-obj-type="element" data-text-editable="true" class="" style="position: absolute; top: 209px; left: 567px; width: 300px; height: 60px;">
        <div v-for="(team, i) in shuffleList" :key="i">
          <div data-text-content="true" v-bind:style="[resultStyle, {backgroundColor: `rgb(${Math.floor(Math.random() * i)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`}]" class="">team {{i + 1}}</div>
          <ul v-for="(name, j) in team" :key="j">
              <li>{{name}}</li>
          </ul>
          <br>
        </div>  
      </div>
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
      shuffleList: [],
      resultStyle: {
        borderRadius: "30px",
        textAlign: "center",
        lineHeight: "20px", 
        color: "rgb(255, 255, 255)",
        fontSize: "12px",
        boxShadow: "none",
        backgroundColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
      }
    };
  },
  computed: {
    randomTeamColor: function () {
      return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    }
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
