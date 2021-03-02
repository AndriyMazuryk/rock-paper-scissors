const template = document.createElement("template");
template.innerHTML = `
<style>
  .blank-chip {
    background: #17223e;
    border-radius: 50%;
    width: 22.5rem;
    height: 22.5rem;
    position: absolute;
    top: 14rem;
    left: 41.2rem;
  }
  @media (max-width: 376px) {
    .blank-chip {
      width: 11rem;
      height: 11rem;
      top: 11.5rem;
      left: 22rem;
    }
  }
</style>

<div class="blank-chip">
</div>
`;

export default template;
