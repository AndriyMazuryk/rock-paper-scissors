const template = document.createElement("template");
template.innerHTML = `
<style>
  .rules-button {
    text-transform: uppercase;
    border: 0.2rem solid hsl(217, 16%, 45%);
    font-family: var(--main-font);
    font-weight: 600;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    padding: 1rem 3.8rem;
    border-radius: 1rem;
    background: transparent;
    color: #fff;
    cursor: pointer;
    margin-right: 3rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 1000px) {
    .rules-button {
      margin: 0;
      margin-top: 2.2rem;
      margin-bottom: 3rem;
    }
  }
</style>
<button class="rules-button">RULES</button>
`;

export default template;
