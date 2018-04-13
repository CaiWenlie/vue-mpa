<template lang="html">
<main-view>
  <div class="view">
    <div class="test">
      hello world
    </div>

    <router-view />

    <div aspectratio w-188-246 class="boder-1px test-aspectratio">
      <div aspectratio-content>
        test
      </div>
    </div>
  </div>
</main-view>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.test{
  display: flex;
  height: 60px;
}
@svg 1px-border {
    height: 2px;
    @rect {
        fill: var(--color, black);
        width: 100%;
        height: 50%;
    }
}
.boder-1px {
    border: 1px solid transparent;
    border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch;
}

[aspectratio] {
    position: relative;
}
[aspectratio]::before {
    content: '';
    display: block;
    width: 1px;
    margin-left: -1px;
    height: 0;
}

[aspectratio-content] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}

[w-188-246] {
  aspect-ratio: '188:128';
}
</style>
