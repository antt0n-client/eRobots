<template>

    <div class="container">

        <div class="row justify-content-md-center">

            <div class="col-md-auto text-center animated animate__slideInUp animate__faster">
                <h1>FAQ</h1>
            </div>

        </div>

        <div class="row justify-content-md-center">

            <div class="col-md-10 faq-item animated animate__fadeInLeft animate__fast">
                <h2>Q : What is ElrondRobots ?</h2>
                <h3>R : ElrondRobots is an NFT project based on Robots in the theme of Futurama.<br>The NFT is on Elrond blockchain.</h3>
                <hr>
            </div>

            <div class="w-100"></div>

            <div class="col-md-10 text-end faq-item animated animate__fadeInRight animate__fast">
                <h2>Q : How many eRobots will ever exist ?</h2>
                <h3>R : There will be only 666 eRobots ever minted.<br>The first 50 were sold at the presale. And the rest will be for the public sales.</h3>
                <hr class="right">
            </div>

            <div class="w-100"></div>

            <div class="col-md-10 faq-item animated animate__fadeInLeft animate__fast">
                <h2>Q : Can I chose my own eRobots during the mint ?</h2>
                <h3>R : No, you'll get a random eRobots. But you can choose it with the marketplace !</h3>
                <hr>
            </div>

            <div class="w-100"></div>

            <div class="col-md-10 text-end faq-item animated animate__fadeInRight animate__fast">
                <h2>Q : What is the price of a eRobots ?</h2>
                <h3>R : The price was at 0,3EGLD during the first presale.<br>The price is now at 0,3EGLD during the mint phase.</h3>
                <hr class="right">
            </div>

            <div class="w-100"></div>

            <div class="col-md-10 faq-item animated animate__fadeInLeft animate__fast">
                <h2>Q : When will I be able to buy my eRobots ?</h2>
                <h3>R : You can mint your eRobots now at : <a href="https://trust.market/buy/eRobots" target="_blank">https://trust.market/buy/eRobot</a>.<br>Or you can trade it on emoon, trust, isengard and other elrond marketplace !</h3>
                <hr>
            </div>

            <div class="w-100"></div>

            <div class="col-md-10 text-end faq-item animated animate__fadeInRight animate__fast">
                <h2>Q : Where can I find my eRobots ?</h2>
                <h3>R : You can view it by connecting your wallet to the website and go to your profile !</h3>
                <hr class="right">
            </div>

        </div>

    </div>

</template>

<style scoped>
h1 {
  font-family: "Robot";
  text-transform: uppercase;
  margin: 0px;
  font-size: 100px;
  background: linear-gradient(90deg, #0060ff, #00a8ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 70px;
}
@media (max-width: 600px) {
  h1 {
    font-size: 65px;
  }
}
@media (max-width: 370px) {
  h1 {
    font-size: 45px;
    margin-top: -10px;
  }
}
h2, h3 {
    font-family: 'Roboto';
}
h2 {
    font-weight: 700;
}
h3 {
    font-weight: 500;
    font-size: 24.5px;
    color: rgb(80, 80, 80);

    margin-top: 15px;
}
.faq-item {
    margin-top: 50px;
}
hr {
    margin:0;
    margin-top: -5px;

    height: 2.5px;
    background: -webkit-linear-gradient(left, rgb(36, 36, 36) 40%, rgba(58, 58, 58, 0.2) 70%, rgba(58, 58, 58, 0) 80%); 
}
hr.right {
    background: -webkit-linear-gradient(right, rgb(36, 36, 36) 40%, rgba(58, 58, 58, 0.2) 70%, rgba(58, 58, 58, 0) 80%); 
}
</style>