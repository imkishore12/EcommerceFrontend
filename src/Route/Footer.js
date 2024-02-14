import React from 'react';

function Footer(props) {
    return (
        <div className="App">
        <section class="footer">
          <div class="social">
            <a href="#ff">
              <i class="fa-brands fa-instagram"></i>
            </a>
  
            <a href="#ff">
              <i class="fa-brands fa-facebook"></i>
            </a>
  
            <a href="#ff">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
  
            <a href="#ff">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
  
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
  
            <li>
              <a href="/mobiles">Mobiles</a>
            </li>
  
            <li>
              <a href="/laptops">Laptops</a>
            </li>
  
            <li>
              <a href="/tablets">Tablets</a>
            </li>
  
            <li>
              <a href="/accessories">Accesories</a>
            </li>
  
            
          </ul>
  
         
        </section>
      </div>
    );
}

export default Footer;

