const template = document.createElement("template");
template.innerHTML = `
<style>
  .rules-window {
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    z-index: 2;
    border-radius: 0.7rem;
    /*top: 17.7rem;
    left: 48.2rem;*/
    /*top: 50%;*/
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
  .rules-window__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    margin-top: 0.2rem;
    /*margin-left: 0.2rem;*/
    border: none;
    background: transparent;
    cursor: pointer;
  }
  /*
  .rules-window__image {
    /*margin-top: 4.5rem;
    margin-left: 2.4rem;*/
  }
  */
  @media (max-width: 1000px) {
    .rules-window {
      border-radius: 0;
      /*position: static;
      width: 100%;
      height: 100%;*/
      top: 0rem;
      left: 0rem;
      /*bottom:0rem;
      right: 0rem;
      width: 100%;
      height: 100%;*/
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
