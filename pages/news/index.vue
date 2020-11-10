<template>
<div width="100%" class="w-container-2">
  <div data-v-50f93fd9="" class="title"><div data-v-50f93fd9="" class="content"><br data-v-50f93fd9=""> <h2 data-v-50f93fd9="">News AI</h2></div></div>
    <div class="section-15">
      <div class="row-15 w-row">

          <div class="w-col w-col-9">
                <ul class="w-list-unstyled">

                    <li v-for="link in links" id="examples" style="text-align: center; margin-bottom: 20px;" class="list-item-9 featuredsidemenu">
                      <span class="datetag tl-c" style="margin-right:15px">
                       >
                      </span>
                      <h3  class="heading-24 example">
                        <br>

                      </h3>
                      <br>
                      <div class="text-block-13">
                        <em>
                          <br>
                          <br>
                          <span style="margin-right:15px">

                          </span>
                        </em>
                      </div>
                      <br>
                      <p class="paragraph-19">
                        {{link.description}}
                      </p>
                      <div class="w-row">
                        <div class="w-col w-col-6">
                          <div>

                          </div>
                        </div>
                      </div>
                    </li>




                </ul>
          </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  layout: 'raises',
  asyncData(context) {
    return context.app.$axios.$get('/links?custom=AI')
      .then(data => {
        return {
          links: data
        }
      })
      .catch(e => context.error(e))
  },
  head: {
    title: 'News'
  }

};
</script>

 <style scoped>

   .link-10 {
       color: #474747;
   }
   #megamenu4{
     margin: 12px;
   }
   h2, h3 {
    color: #4d5052 !important;
}
   .mdi {
     color: #3f8ac5!important;
   }
   .w-col .w-col {
    padding-left: 0;
    width: 100% !important;
    margin-bottom: 20px !important;
    padding-right: 0;
}
   a.link-10.hover.hover-3 {
    font-size: smaller;
    color: #474747;
}
   #megamenu3 {
     top:46px !important;
   }
   .postsssnavcomp, .w-dropdown-list, .Postcompdropmenu {
     border-radius: 10px !important;
   }

  .column-29, .list-item-9 {
     border-color: rgba(164, 219, 255, 0.45);
   }

   .featuredsidemenu:hover {
     box-shadow: 0 1px 5px 0 rgba(0, 89, 132, 0.16);
     overflow: hidden;
     border-radius:10px;
   }
   .link-10 {color: #23527c;}

   h1 {
     text-align:center;
   }
h2 {
  color: #2fb7ff;
}
  @media screen and (max-width:1400px) {
    #examples{
      width:49% !important;
    }
  }
  @media screen and (max-width:1000px) {
    #examples{
      width:100% !important;
    }
    .w-col {
        width: 100% !important;
        left: auto;
        right: auto;
  }
  .news-h {
    margin-top:100px !important;
  }
}
.news-h {
  margin-top:100px !important;
}
  .paragraph-19 {
    margin-top: 9px;
    height: 250px;
    color: #474747;
    overflow: auto;
}
  #examples {
   display: inline-flex;
   background-color: white;
   opacity: 0.95;
   margin: 0 auto;
   width: 33%;
   height: 530px;
   background: linear-gradient(45deg, #f7f9fb, white);
  }
  .btn-link:hover, .btn-link:focus {
  color: #23527c;
  text-decoration: underline;
  background-color: #2fb7ff !important;
}
.tl-c {
  margin-left: -7px;
  margin-top: 7px;
  font-family: poppins;
  position: fixed;
}
.f50 {
  width: 50%;
}
.heading-24 {
  min-height: 132px;
}
#examples .example .hover {
    display: inline-grid;
    margin-bottom:20px;
}
#myCompanyTag {
  font-weight: bold;
    font-style: normal;
}

.cyber-buy {
  width: 200px;
  padding:10px;
}

.modal-content {
  padding: 20px;
  display: inline-flex;
}
.text-block-20 {
  height: fit-content;
    display: flex;
}
.modal-mark-content {
  display: table;
}
</style>
