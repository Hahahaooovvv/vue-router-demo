<template>
  <div>
    我是user
    <ul class="userList">
      <!--<router-link v-for="item,index in userList" key="index" tag="li" :to="'/user/' + item.tip + '/' + item.id">-->
      <!--{{item.userName}}-->
      <!--</router-link>-->
      <router-link v-for="item,index in userList" key="index" tag="li"
                   :to="{path: '/user/' + item.tip + '/' + item.id, query:{info:'follow',a:1}}">
        {{item.userName}}
      </router-link>
    </ul>
    <div class="user-info" v-if="userInfo.userName">
      <p>姓名：{{ userInfo.userName }}</p>
      <p>性别：{{ userInfo.sex }}</p>
      <p>爱好：{{ userInfo.hobby }}</p>
    </div>
    <div v-if="userInfo.userName" class="infoList">
      <!--<router-link exact tag="li" to="?info=follow">我的关注</router-link>-->
      <!--<router-link exact tag="li" to="?info=share">我的分享</router-link>-->
      <router-link exact tag="li" :to="{path: '', query: {info: 'follow', a:1}}">我的关注</router-link>
      <router-link exact tag="li" :to="{path: '', query: {info: 'share', a:2}}">我的分享</router-link>
    </div>
    <div v-if="userInfo.userName">
      {{ $route.query }}
    </div>
  </div>
</template>

<script>
  let data = [
    {
      id: 1,
      tip: 'vip',
      userName: 'leo1',
      sex: '男',
      hobby: '写代码'
    },
    {
      id: 2,
      tip: 'common',
      userName: 'leo2',
      sex: '男',
      hobby: '唱歌'
    },
    {
      id: 3,
      tip: 'common',
      userName: 'leo3',
      sex: '男',
      hobby: '读书'
    },
    {
      id: 4,
      tip: 'vip',
      userName: 'leo4',
      sex: '女',
      hobby: '装逼'
    }
  ]
  export default {
    data() {
      return {
        userList: data,
        userInfo: null
      }
    },
    created() {
      /*
      * $router router实例对象
      * $route 当前激活的路由信息对象，每个组件实例都会有
      * beforeRouteEnter() 进入组件前钩子函数
      * beforeRouteLeave() 离开组件前钩子函数
      * */
      // console.log(this.$router)
      // console.log(this.$route.params.userId)
      /*
      * 当前路由信息对象的属性说明：
      * path: 字符串，对应当前路由的路径
      * params: 对象，包含动态路由参数
      * query 对象，URL 查询参数
      * hash 字符串 ，当前路由的hash值
      * fullPath 字符串，URL包含查询参数和hash的完整路径
      * matched数组，包含当前路由的所有嵌套路径片段的路由记录 （子路由）
      * name字符串 ，当前路由的名称
      * */
      this.routeLink()
    },
    watch: {
      $route() {
        // console.log('监控$route')
        // console.log(this.$route.params.userId)
        this.routeLink()
      }
    },
    methods: {
      routeLink() {
        let id = this.$route.params.userId
        if (id) {
          this.userInfo = this.userList.filter(item => {
            return item.id === Number(id)
          })[0]
        } else {
          this.userInfo = {}
        }
      }
    }
  }
</script>

<style lang="less">
  .userList {
    display: flex;
    flex-flow: row nowrap;

  }

  li {
    padding: 10px;
    cursor: pointer;
    &.selected {
      background-color: #FFF;
      color: #999;
    }
  }

  .infoList {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
</style>
