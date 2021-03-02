const template = document.createElement("template");
template.innerHTML = `
<style>
  .chip {
    border-radius: 50%;
    background: gray;
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
  .chip:after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: inset 0rem -0.5rem 0rem gray;
    transition: .3s;
  }
  .chip:hover:after {
    box-shadow: inset 0rem 0.5rem 0rem gray;
    cursor: pointer;
  }

  .chip__inner {
    position: relative;
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
    background: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .chip__inner:after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: inset 0rem 0.5rem 0rem #b8bdd3;
    transition: 0.3s;
  }
  .chip:hover .chip__inner:after {
    box-shadow: inset 0rem -0.5rem 0rem #b8bdd3;
  }
  .chip__icon {
    width: 6.8rem;
  }

  .winner {
    /*box-shadow: 0 0 0 5rem #2b3858, 0 0 0 12rem #263554, 0 0 0 20rem #213250;*/
    box-shadow: 0 0 0 5rem rgba(82,85,91,0.3), 0 0 0 12rem rgba(82,85,91,0.2), 0 0 0 20rem rgba(82,85,91,0.1);
  }

  .checked {
    transition: 0.3s;
    top: 10.2rem !important;
    left: 1rem !important;
    width: 30rem;
    height: 30rem;
  }
  .checked .chip__inner {
    transition: 0.3s;
    width: 23rem;
    height: 23rem;
  }
  .checked .chip__icon {
    transition: 0.3s;
    width: 10rem;
  }

  #computer {
    transition: 0.3s;
    /*right: 1rem !important;*/

    top: 10.2rem !important;
    /*left: 37.5rem !important;*/
    right: 2.4rem !important;
    width: 30rem;
    height: 30rem;
  }
  #computer .chip__inner {
    width: 23rem;
    height: 23rem;
  }
  #computer .chip__icon {
    width: 10rem;
  }

  #rock {
    top: 22.9rem;
    left: 25rem;
  }
  .rock {
    background: #da304d;
  }
  .rock:after {
    box-shadow: inset 0rem -0.5rem 0rem #a11836;
  }
  .rock:hover:after {
    box-shadow: inset 0rem 0.5rem 0rem #a11836;
  }
  #paper {
    top: 0rem;
    left: 11rem;
  }
  .paper {
    background: #5671f2;
  }
  .paper:after {
    box-shadow: inset 0rem -0.5rem 0rem #2945c0;
  }
  .paper:hover:after {
    box-shadow: inset 0rem 0.5rem 0rem #2945c0;
  }
  #scissors {
    top: 0rem;
    left: 39rem;
  }
  .scissors {
    background: #ed9f0b;
  }
  .scissors:after {
    box-shadow: inset 0rem -0.5rem 0rem #c76c1d;
  }
  .scissors:hover:after {
    box-shadow: inset 0rem 0.5rem 0rem #c76c1d;
  }


  @media (max-width: 1000px) {
    .chip {
      width: 13rem;
      height: 13rem;
    }
    .chip__inner {
      width: 10rem;
      height: 10rem;
    }
    .chip__icon {
      width: 4rem;
    }
    .chip:hover .chip__inner:after {
      box-shadow: inset 0rem 0.5rem 0rem #b8bdd3;
    }
    #paper {
      top: 4rem;
      left: 3rem;
    }
    .paper:hover:after {
      box-shadow: inset 0rem -0.5rem 0rem #2945c0;
    }
    #scissors {
      top: 4rem;
      left: 21rem;
    }
    .scissors:hover:after {
      box-shadow: inset 0rem -0.5rem 0rem #c76c1d;
    } 
    #rock {
      top: 19rem;
      left: 12rem;
    }
    .rock:hover:after {
      box-shadow: inset 0rem -0.5rem 0rem #a11836;
    }
    #computer {
      width: 13rem;
      height: 13rem;
      right: 2.8rem !important;
    }
    #computer .chip__inner {
      width: 10rem;
      height: 10rem;
    }
    #computer .chip__icon {
      width: 4rem;
    }
    .checked {
      width: 13rem;
      height: 13rem;
      left: 2.8rem !important;
    }
    .checked .chip__inner {
      width: 10rem;
      height: 10rem;
    }
    .checked .chip__icon {
      width: 4rem;
    }
  }
</style>

<div class="chip">
  <div class="chip__inner">
    <img class="chip__icon" />
  </div>
</div>
`;

export default template;
