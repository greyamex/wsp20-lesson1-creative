function home_page() {
    pageContent.innerHTML = `

    <!-- Dropdown Menu -->
    <div class="btn-group" style="padding-bottom: 32px;">
    <button align="center" style="background-color: #000000; color:white; font-size:15px;" class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Get Started
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownmenu2">
    <button class="dropdown-item" type="button"></button>
    <button class="dropdown-item" type="button">Manhattan</button>
    <button class="dropdown-item" type="button">Brooklyn</button> 
    <button class="dropdown-item" type="button">Queens</button>
    <button class="dropdown-item" type="button">The Bronx</button> 
    <button class="dropdown-item" type="button">Staten Island</button>
    <button class="dropdown-item" type="button">All NYC</button>
    <button class="dropdown-item" type="button"></button>
    <button class="dropdown-item" type="button">How It Works</button>
    <button class="dropdown-item" type="button"></button>
    <button href="login_page.js" class="dropdown-item" type="button">Login</button>
    <button class="dropdown-item" type="button"></button>
    </div>
    </div>

    <!-- Carousel -->
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="images/manhattan-01.jpg" class="d-block w-100" alt="...">
        <input type ="button" class="classic_button_next btn btn-primary btn-large" id="next_button" value="Next >>"/>
      </div>
      <div class="carousel-item">
        <img src="images/brownstone-01.webp" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="images/manhattan-02.webp" class="d-block w-100" alt="...">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    `;
}