const template = document.createElement("template");
template.innerHTML = `
<style>
  P {
    margin: 0;
  }
  .scoreboard {
    box-sizing: border-box;
    margin-top: 4.6rem;
    width: 70rem;
    height: 15.4rem;
    border: .2rem solid hsl(217, 16%, 45%);
    border-radius: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
  }

  .scoreboard__logo {
    margin-left: 0.9rem;
  }

  .score {
    background: #fff;
    color: hsl(229, 64%, 46%);
    width: 15rem;
    height: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .score__title {
    color: hsl(229, 64%, 46%);
    text-transform: uppercase;
    font-family: var(--main-font);
    font-size: 1.6rem;
    letter-spacing: 0.3rem;
    font-weight: 600;
  }
  .score__number {
    color: hsl(229, 25%, 31%);
    font-family: var(--main-font);
    font-size: 6.5rem;
    line-height: 6rem;
    font-weight: 700;
  }

  @media (max-width: 376px) {
    .scoreboard {
      margin-top: 3.3rem;
      width: 31rem;
      height: 10rem;
      border-radius: 0.6rem;
      padding: 1rem 1rem 1.5rem 1rem;
    }
    .scoreboard__logo {
      margin-left: 0.7rem;
      margin-top: 0.2rem;
      height: 5rem;
    }
    .score {
      width: 8rem;
      border-radius: 0.4rem;
    }
    .score__title {
      font-size: 0.9rem;
      letter-spacing: 0.2rem;
      //margin-top: 2rem;
    }
    .score__number {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
</style>

<div class="scoreboard">
  <img class="scoreboard__logo" src="images/logo.svg" alt="Rock, Paper, Scissors" />
  <div class="score">
    <p class="score__title">score</p>
    <p class="score__number">0</p>
  </div>
</div>
`;

export default template;
