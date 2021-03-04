const template = document.createElement("template");
template.innerHTML = `
<style>
  .rules-window {
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    z-index: 2;
    border-radius: 0.7rem;
    top: calc(50% - 20.5rem);
    left: calc(50% - 20rem);
    width: 40rem;
    height: 41rem;
    padding: 3rem 2.5rem;
    display: none;
    /*display: flex;*/
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .rules-window--show {
    display: flex;
  }
  .rules-window__header {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .rules-window__title {
    margin: 0;
    padding: 0;
    margin-left: 0.7rem;
    font-family: var(--main-font);
    color: hsl(229, 25%, 31%);
    font-size: 3rem;
    letter-spacing: 0.2rem;
  }
  .rules-window__close-button {
    position: absolute;
    top: 3.2rem;
    right: 2.5rem;
    /*margin-top: 0.2rem;*/
    /*margin-left: 0.2rem;*/
    border: none;
    background: transparent;
    cursor: pointer;
  }
  /*
  .rules-window__image {
    margin-top: 4.5rem;
    margin-left: 2.4rem;
  }
  */
  @media (max-width: 1000px) {
    .rules-window {
      border-radius: 0;
      /*position: static;
      width: 100%;
      height: 100%;*/
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
    }
    .rules-window__header {
      justify-content: center;
      margin-top: 6.5rem;
    }
    .rules-window__title {
      margin-bottom: 10.5rem;
    }
    .rules-window__close-button {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .rules-window__close-button img {
      display: none;
    }
  }
</style>

<div class="rules-window">
  <div class="rules-window__header">
    <h3 class="rules-window__title">RULES</h3>
    <button class="rules-window__close-button"><img class="rules-window__close-icon" src="images/icon-close.svg" alt="close" /></button>
  </div>
  <img class="rules-window__image" src="images/image-rules.svg" alt="rules" />
</div>
`;

export default template;
