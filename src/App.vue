<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <!-- <router-link :to="{name:'home'}" tag="li" event="mouseover" exact class="nav-item">home</router-link> -->
        <router-link :to="{name:'home'}" tag="li" exact class="nav-item">home</router-link>
        <router-link :to="{name:'document'}" tag="li" class="nav-item">document</router-link>
        <router-link :to="{name:'about'}" tag="li" class="nav-item">about</router-link>
        <router-link :to="{name:'user'}" tag="li" class="nav-item">user</router-link>
      </ul>
    </div>
    <span>当前进来的路由下标</span>{{ $route.meta.index }}
    <input type="button" @click="back" value="后退">
    <input type="button" @click="forward" value="前进">
    <input type="button" @click="goForwardTwo" value="前进两步">
    <input type="button" @click="goBackTwo" value="后退两步">
    <input type="button" @click="pushRoute" value="添加新的路由记录">
    <input type="button" @click="replaceRoute" value="替换当前历史路由">
    <transition :name="names">
      <router-view class="center"/>
    </transition>
    <transition :name="names">
      <router-view name="slider"/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        names: 'left'
      }
    },
    watch: {
     $route (to, from) {
        console.log(to.meta.index) // 目标路由
        console.log(from.meta.index) // 离开的路由
        if (to.meta.index > from.meta.index) {
          this.names = 'left'
        } else {
          this.names = 'right'
        }
      }
    },
    methods: {
      back () {
        console.log('后退')
        this.$router.back()
      },
      forward () {
        console.log('前进')
        this.$router.forward()
      },
      goForwardTwo () {
        console.log('前进两步')
        this.$router.go(2)
      },
      goBackTwo () {
        console.log('后退两步')
        this.$router.go(-2)
      },
      pushRoute () {
        console.log('添加新的路由记录')
        this.$router.push({name:'user', params: {tip: 'vip', userId: '4'}, query: {info: 'follow', a: 1}})
        console.log(this.$route)
      },
      replaceRoute () {
        console.log('替换当前历史路由')
        this.$router.replace({name: 'user', params: {tip: 'common', userId: '2'}, query: {info: 'share', a: '2'}})
      }
    }
  }
  /*
    編程式导航
    借助于router的实例方法，通过编写代码来实现导航的切换

    back 回退一步
    forward 前进一步
    go 指定前进回退步数
    push 导航到不同url, 向history栈添加一个新的记录
    replace 导航到不同url，替换history栈中当前记录
  */
</script>

<style lang="less">
  .left-enter {
    transform: translate3d(100%,0,0);
  }
  .left-enter-to, .left-leave {
    transform: translate3d(0,0,0);
  }
  .left-enter-active, .left-leave-active {
    transition: transform 1s ease-out;
  }
  .left-leave-to{
    transform: translate3d(-100%,0,0);
  }

  .right-enter {
    transform: translate3d(-100%,0,0);
  }
  .right-enter-to, .right-leave {
    transform: translate3d(0,0,0);
  }
  .right-enter-active, .right-leave-active {
    transition: transform 1s ease-out;
  }
  .right-leave-to{
    transform: translate3d(100%,0,0);
  }
  .nav-box {
    width: 100%;
    background-color: #EEE;
  }

  .nav {
    display: flex;
    width: 860px;
    margin: 0 auto;
    &-item {
      height: 45px;
      line-height: 45px;
      padding: 10px 30px;
      user-select: none;
      &.selected {
        background-color: #FFF;
        color: #999;
      }
    }
  }

  .center {
    text-align: center;
    font-weight: bolder;
    font-size: 22px;
  }

.test-03{
  width:~'calc(100% - 80px)';
  height:40px;
  background:red;
}

.test-03 {
  width: calc(100% - 80px);
  height: 40px;
  background: red;
}
.asher{
  width:200px;
  height:200px;
  background:red;
}
.test_important{
  .asher!important;
  border:1px solid red;
}

.asher {
  width: 200px;
  height: 200px;
  background: red;
}
.test_important {
  width: 200px !important;
  height: 200px !important;
  background: red !important;
  border: 1px solid red;
}
</style>
