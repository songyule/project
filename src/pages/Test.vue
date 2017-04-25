<template>
  <div class="receiptMessage">
    <div>
      <span class="receiptMessage-left">收货人：</span>
      <span class="receiptMessage-name">syl</span>
    </div>
    <div>
      <span class="receiptMessage-left">联系电话：</span>
      <span class="receiptMessage-tel">15233333333</span>
    </div>
    <div>
      <span class="receiptMessage-left">联系地址：</span>
      <span class="receiptMessage-add">洛阳</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.receiptMessage{
  font-size: 14px;
}
/*@component receiptMessage{
  background:red;
  padding: 6px 0 8px 15px;
  margin-bottom: 6px;
  div{
    display: flex;
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 0.16px;
    margin: 6px 0;
    line-height: 20px;
  }
  @descendent left{
    width:71.2px;
    text-align: left;
  }
}*/
</style>
