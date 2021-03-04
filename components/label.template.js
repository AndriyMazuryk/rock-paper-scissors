const template = document.createElement("template");
template.innerHTML = `
<style>
  .label {
    text-transform: uppercase;
    font-family: var(--main-font);
    font-weight: 700;
    font-size: 2.4rem;
    letter-spacing: 0.3rem;
    color: #fff;
    margin: 0;
    /*margin-top: 1rem;*/
    top: 1rem;
    display: inline-block;
    position: absolute;
    z-index: 1;
  }
  .label--left {
    /*margin-left: 8.8rem;*/
    left: 8.8rem;
  }
  .label--right {
    /*margin-left: 17.5rem;*/
    right: 5.9rem;
    /*margin-right:*/
  }

  @media (max-width: 1000px) {
    .label {
      top: 25rem;
      font-size: 1.3rem;
    }
    .label--left {
      left: 5rem;
    }
    .label--right {
      right: 2rem;
    }
  }
</style>

<p class="label"></p>
`;

export default template;
