const template = document.createElement("template");
template.innerHTML = `
<style>
  .result {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 16.9rem;
    position: relative;
    z-index: 1;
  }
  .result__title {
    margin: 0;
    padding: 0;
    font-family: var(--main-font);
    font-size: 5.8rem;
    color: #fff;
  }
  .result__button {
    padding: 1.5rem 6rem;
    margin-top: 1.1rem;
    color: #000;
    text-transform: uppercase;
    font-family: var(--main-font);
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    border: 0.1rem solid #fff;
    border-radius: 0.5rem;
  }
  .result__button:hover {
    color: #994459;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    .result {
      padding-top: 34rem;
    }
  }
</style>

<div class="result">
  <h3 class="result__title"></h3>
  <button class="result__button">PLAY AGAIN</button>
</div>
`;

export default template;
