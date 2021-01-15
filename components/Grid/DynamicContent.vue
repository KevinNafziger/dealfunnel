<template>
  <div class="exespotbody">
  <div class="grid">

    <!-- this a tag will be managed by a v-loop to create the content ( i left a couple for example ) -->

      <a href="" class="module" style="display:flex;text-decoration:none;color:#14a0fd;">
        <div>
          <img  src="https://fintechapp.s3.us-east-2.amazonaws.com/y2qYjf8e2hp8z5yrgyfxF2NN?response-content-disposition=inline%3B%20filename%3D%22BoxLogo.png%22%3B%20filename%2A%3DUTF-8%27%27BoxLogo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJG6DG75G7BXQ3XUA%2F20210115%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210115T192217Z&X-Amz-Expires=518400&X-Amz-SignedHeaders=host&X-Amz-Signature=26b742c676a7fc0854c1efa0c81bf60e9239bc5068606262b3b1eab0f7a21245">
          <p> Visa and Plaid have mutually terminated their merger agreement – Business Wire

Rapyd, the global Fintech as a Service company, secured $300 million in a Series</p>
        </div>
      </a>
      <a  href="" class="module" style="display:flex;text-decoration:none;color:#14a0fd; ">
      <div>
        <img  src="https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1221636480.jpg?w=990&crop=1">
        <p> Technology: Zipmex, which aspires to build the Asia Pacific region’s largest digital assets exchange, raises $6 million led by Jump Capital



TechCrunch

Zipmex

Zipmex, a digital assets exchange headquartered in Singapore, has raised $6 million in funding led by Jump Capital. – TechCrunch</p>
      </div>
    </a>
    <a  href="" class="module" style="display:flex;text-decoration:none;color:#14a0fd; ">
      <div>
        <img  src="https://fintechhorizonsmedia.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0FmIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c4cd1dbed8aeba5cd6c05e7c3ad0d4e3b52a05a2/ClipDart%20Pic.jpg">
        <p> Good Times!: Parker is the founder and CEO of ClipDart, a Chicago-based startup whose mobile app lets users pick a barber who will cut their hair at a time and place of their choosing. The app also lets a person browse a barber’s portfolio, so a person can choose a barber whose style they like and who has experience cutting hair to that person’s culturally specific needs. In the Q&A, Parke </p>
      </div>
    </a>

  <!--  <a class="module" style="display:flex;text-decoration:none;color:#14a0fd; ">
      <div>
        <img style="height:auto ;width:220px;" src="https://filesforfintech.s3.amazonaws.com/images/pig+sauce/1+Go+to+conference.png">
        <p> Events</p>
      </div>
    </a> -->
  </div>

  </div>
</template>

<script>
</script>

<style>
img {
  heigth: auto;
  width: 100px;
  margin:20px;
  border-radius: 20px;
}
.module {
    background: white;
    display: inline-table;
    align-items: center;
    justify-content: center;
    height: 350px;
    padding: 15px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
    -moz-box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
    box-shadow: 0px 0px 25px -16px rgba(161,161,161,1);
    text-align: center;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 200px;
    margin: 0;
    color:#4f81bd !important;
}
.module:hover {
    background: #fbfbfb;
    -webkit-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
    -moz-box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
    box-shadow: 0px 0px 35px -16px rgba(161,161,161,1);
}
.grid {
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 1em;
    max-width: 80%;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 50px;

}

@media screen and (max-width:1400px) {
  .grid {
    max-width: 600px;
  }
}

</style>
