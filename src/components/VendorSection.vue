<template>
  <div
    class="gallery js-flickity"
    data-flickity-options='{ "wrapAround": true }'
  >
    <div class="gallery-cell one"></div>
    <div class="gallery-cell two"></div>
    <div class="gallery-cell three"></div>
    <div class="gallery-cell four"></div>
    <div class="gallery-cell five"></div>
    <div class="gallery-cell six"></div>
    <div class="gallery-cell seven"></div>
    <div class="gallery-cell eight"></div>
  </div>
</template>

<script>
export default {
  name: "VendorSection",
};
</script>
<style scoped>
.gallery {
  background: white;
}

.gallery-cell {
  width: 33%;
  height: 200px;
  margin-right: 10px;
  counter-increment: gallery-cell;
}
.gallery-cell.one {
  background: url("./../../public/img/vendor-1.jpg") center center no-repeat;
}
.gallery-cell.two {
  background: url("./../../public/img/vendor-2.jpg") center center no-repeat;
}
.gallery-cell.three {
  background: url("./../../public/img/vendor-3.jpg") center center no-repeat;
}
.gallery-cell.four {
  background: url("./../../public/img/vendor-4.jpg") center center no-repeat;
}
.gallery-cell.five {
  background: url("./../../public/img/vendor-5.jpg") center center no-repeat;
}
.gallery-cell.six {
  background: url("./../../public/img/vendor-6.jpg") center center no-repeat;
}
.gallery-cell.seven {
  background: url("./../../public/img/vendor-7.jpg") center center no-repeat;
}
.gallery-cell.eight {
  background: url("./../../public/img/vendor-8.jpg") center center no-repeat;
}
.gallery-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}
</style>
