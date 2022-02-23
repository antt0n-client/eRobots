<template>

   <div class="container">
      <ul class="timeline">

         <li class="timeline-inverted">
            <div class="timeline-badge"></div>
            <div class="timeline-panel">
               <div class="timeline-heading">
                  <h4 class="timeline-date">30 November 2021</h4>
               </div>
               <div class="timeline-body">
                  <h5>Presales</h5>
                  <p>of 50 eRobots for the price of 0.2 EGLD</p>
               </div>
            </div>
         </li>  
         
         <li>
            <div class="timeline-badge"></div>
            <div class="timeline-panel">
               <div class="timeline-heading">
                  <h4 class="timeline-date">09 December 2021</h4>
               </div>
               <div class="timeline-body">
                  <h5>eRobots Drop</h5>
                  <p>Elrond Robots was rewarded after the first presales</p>
               </div>
            </div>
         </li>  

         <li class="timeline-inverted">
            <div class="timeline-badge"></div>
            <div class="timeline-panel">
               <div class="timeline-heading">
                  <h4 class="timeline-date">10 December 2021</h4>
               </div>
               <div class="timeline-body">
                  <h5>Launching</h5>
                  <p>Public mint available on <a href="https://trust.market/buy/eRobot" target="_blank">https://trust.market/buy/eRobot</a> for everyone</p>
               </div>
            </div>
         </li>  

         <li>
            <div class="timeline-badge"></div>
            <div class="timeline-panel">
               <div class="timeline-heading">
                  <h4 class="timeline-date">01st Quarter 2022</h4>
               </div>
               <div class="timeline-body">
                  <h5>Website</h5>
                  <p>Be able to connect your Maiar wallet directly on our website and mint/view your eRobots</p>
               </div>
            </div>
         </li>  

         <li class="timeline-inverted">
            <div class="timeline-badge"></div>
            <div class="timeline-panel">
               <div class="timeline-heading">
                  <h4 class="timeline-date">02nd Quarter 2022</h4>
               </div>
               <div class="timeline-body">
                  <h5>Giveaway</h5>
                  <p>Every persons who hold a eRobot can participate to a giveaway to win 100 unique NFT</p>
               </div>
            </div>
         </li>  

         <li>
            <div class="timeline-badge"></div>
            <div class="timeline-panel">
               <div class="timeline-heading">
                  <h4 class="timeline-date">SOON</h4>
               </div>
               <div class="timeline-body">
                  <h5>Game</h5>
                  <p>Every persons who hold a eRobot will have a pre-access to our future NFT Game</p>
               </div>
            </div>
         </li>  

      </ul>
   </div>

</template>

<style scoped>
.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}
.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: "";
  width: 10px;
  background-color: #0074FF;
  left: 50%;
  margin-left: -1.5px;
  border-radius: 30px;
}
.timeline > li {
  margin-bottom: 50px;
  position: relative;
}
.timeline > li:before,
.timeline > li:after {
  content: "";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li:before,
.timeline > li:after {
  content: "";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li:first-child {
  margin-top: 120px;
}
.timeline > li:last-child {
   margin-bottom: 120px;
}
.timeline > li > .timeline-panel {
  width: 46%; /* 46 */
  float: left;
  border-radius: 2px;
  padding: 20px;
  position: relative;

  box-shadow: 0 6px 12px rgba(0, 116, 255, 0.2);
  background-color: rgba(0, 116, 255, 1);

  border-radius: 30px;

  font-family: 'Roboto';
}
.timeline > li > .timeline-badge {
  color: #fff;
  width: 45px;
  height: 45px;
  line-height: 50px;
  font-size: 1.4em;
  text-align: center;
  position: absolute;
  top: 43%;
  left: 50%;
  margin-left: -20px;
  border: 5px solid #0074FF;
  background-color: white;
  z-index: 100;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}
.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}
.timeline-date {
  margin-top: 0;
  color: inherit;
  font-family: 'Robot';
  color: #F5C246;
  font-size: 33px;
}
.timeline-body > p,
.timeline-body > ul,
.timeline-body > h5 {
  margin-bottom: 0;
}
.timeline-body > h5 {
   color: #F5C246;
   font-size: 25px;
   font-weight: 400;
}
.timeline-body > p {
   color: white;
   font-size: 23px;
   font-weight: 300;
}
.timeline-body {
   margin: 6% 0;
}
a {
   text-decoration: none;
   color: #00C3FF;
}
@media (max-width: 1000px) {
   .timeline > li.timeline-inverted > .timeline-panel {
      float: left;
   }
   .timeline:before {
      left: 90%;
   }
   .timeline > li > .timeline-badge {
      left: 90%;
   }
   .timeline > li > .timeline-panel {
      width: 80%;
   }
}
@media (max-width: 600px) {
   .timeline-badge {
      display: none;
   }
   .timeline:before {
      content: none;
   }
   .timeline > li > .timeline-panel {
      width: 100%;
   }
}
</style>