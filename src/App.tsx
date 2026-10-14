import { useState } from "react";
import "./styles.css";

const dishes = [
  {
    name: "Grepe Alcatra em Tiras",
    detail: "queijo, cebola e molho da casa",
    price: "R$ 28,90",
    emoji: "🥞",
    color: "gold",
  },
  {
    name: "Crepe de Pizza",
    detail: "muçarela, tomate e manjericão",
    price: "R$ 24,90",
    emoji: "🍕",
    color: "cream",
  },
  {
    name: "Crepe Vegetariano",
    detail: "legumes frescos e pesto",
    price: "R$ 22,90",
    emoji: "🥬",
    color: "green",
  },
];

function ArrowUpRight() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav container">
          <a className="logo" href="#inicio" aria-label="comida.app início">
            comida<span>.app</span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#como-funciona" onClick={() => setMenuOpen(false)}>
              Como funciona
            </a>
            <a href="#restaurantes" onClick={() => setMenuOpen(false)}>
              Para restaurantes
            </a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              Sobre a gente
            </a>
          </div>
          <a className="nav-cta" href="#baixar">
            Começar agora <ArrowUpRight />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
          </button>
        </nav>

        <div className="hero-content container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> delivery social, feito para o bairro
            </div>
            <h1>
              Mais valor
              <br />
              <em>em cada pedido.</em>
            </h1>
            <p className="hero-description">
              Um marketplace que conecta quem pede, quem cozinha e quem entrega.
              Sem lucro infinito: cobramos uma taxa fixa por transação para
              fazer o ecossistema girar.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#baixar">
                Criar minha conta <ArrowUpRight />
              </a>
              <a className="text-link" href="#restaurantes">
                Sou restaurante <span>↓</span>
              </a>
            </div>
            <div className="trust-row">
              <div className="avatars">
                <span>👩🏽</span>
                <span>👨🏻</span>
                <span>👩🏼</span>
                <span>+</span>
              </div>
              <p>
                <strong>Uma rede mais justa</strong> para todos os pedidos
              </p>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Prévia do aplicativo comida.app"
          >
            <div className="spark spark-one">✦</div>
            <div className="spark spark-two">✦</div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="phone phone-main">
              <div className="phone-top">
                <span>9:41</span>
                <span>● ◔ ▮</span>
              </div>
              <div className="phone-appbar">
                <span>
                  comida<span>.app</span>
                </span>
                <span className="bell">♧</span>
              </div>
              <div className="phone-greeting">
                Olá, <strong>Maria</strong> <span>✌</span>
                <small>O que vamos comer hoje?</small>
              </div>
              <div className="search">
                ⌕ <span>Buscar restaurantes ou pratos</span>
              </div>
              <div className="category-row">
                <span className="active">Tudo</span>
                <span>Hambúrguer</span>
                <span>Pizza</span>
              </div>
              <div className="phone-label">
                Perto de você <span>ver todos →</span>
              </div>
              {dishes.map((dish) => (
                <div className="dish-card" key={dish.name}>
                  <div className={`dish-image ${dish.color}`}>
                    <span>{dish.emoji}</span>
                    <b>♡</b>
                  </div>
                  <div className="dish-info">
                    <strong>{dish.name}</strong>
                    <small>{dish.detail}</small>
                    <b>{dish.price}</b>
                  </div>
                  <button aria-label={`Adicionar ${dish.name}`}>+</button>
                </div>
              ))}
              <div className="phone-nav">
                <span className="selected">
                  ⌂<small>Início</small>
                </span>
                <span>
                  ⌕<small>Buscar</small>
                </span>
                <span>
                  ♡<small>Favoritos</small>
                </span>
                <span>
                  ♙<small>Perfil</small>
                </span>
              </div>
            </div>
            <div className="floating-order">
              <span className="order-icon">✓</span>
              <div>
                <small>Pedido a caminho</small>
                <strong>Chega em 25 min</strong>
              </div>
              <span className="mini-arrow">↗</span>
            </div>
            <div className="floating-tag">
              feito com <b>♥</b> e fome
            </div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>↓</span> role para descobrir <span className="line" />
        </div>
      </section>

      <section className="marquee">
        <div>
          mais sabor <i>✦</i> menos espera <i>✦</i> mais encontros <i>✦</i>{" "}
          comida do seu jeito <i>✦</i> mais sabor <i>✦</i> menos espera <i>✦</i>
        </div>
      </section>

      <section className="intro section container" id="sobre">
        <div className="section-kicker">um marketplace com propósito</div>
        <div className="intro-grid">
          <h2>
            O pedido
            <br />
            <span>movimenta tudo.</span>
          </h2>
          <div>
            <p>
              No comida.app, cada transação cria valor para o restaurante, para
              o motoboy e para você. A gente cresce junto com o comércio local,
              com transparência e uma taxa fixa — não com margens sem limite.
            </p>
            <a className="text-link dark" href="#como-funciona">
              Veja como funciona <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <section className="features section" id="como-funciona">
        <div className="container">
          <div className="features-heading">
            <div>
              <div className="section-kicker">feito para dois lados da mesa</div>
              <h2>
                Escolha seu
                <br />
                <em>próximo passo.</em>
              </h2>
            </div>
            <p>
              Uma experiência simples para pedir hoje e uma vitrine justa para
              vender todos os dias.
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-card feature-red">
              <div className="feature-icon">♥</div>
              <span>01</span>
              <h3>
                Para quem
                <br />
                pede
              </h3>
              <p>
                Crie sua conta, descubra restaurantes locais e faça seu pedido
                com acompanhamento de verdade.
              </p>
              <a href="#baixar">
                Quero pedir <ArrowUpRight />
              </a>
            </article>
            <article className="feature-card feature-yellow">
              <div className="feature-icon">✦</div>
              <span>02</span>
              <h3>
                Para quem
                <br />
                vende
              </h3>
              <p>
                Entre para a rede de restaurantes, alcance novos clientes e
                venda sem perder sua identidade.
              </p>
              <a href="#restaurantes">
                Quero vender <ArrowUpRight />
              </a>
            </article>
            <article className="feature-card feature-green">
              <div className="feature-icon">↗</div>
              <span>03</span>
              <h3>
                Para todo
                <br />
                o ecossistema
              </h3>
              <p>
                Uma taxa fixa por transação mantém o modelo transparente e
                distribui valor entre quem faz o delivery acontecer.
              </p>
              <a href="#sobre">
                Conhecer o modelo <ArrowUpRight />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        className="restaurant-banner section container"
        id="restaurantes"
      >
        <div>
          <div className="section-kicker">você tem um restaurante?</div>
          <h2>
            Coloque seu sabor
            <br />
            <em>na nossa rede.</em>
          </h2>
          <p>
            Junte-se ao pool de restaurantes do comida.app. Alcance novos
            clientes, receba pedidos e cresça com uma taxa fixa, sem surpresas.
          </p>
          <a className="button button-dark" href="#baixar">
            Quero entrar para a rede <ArrowUpRight />
          </a>
        </div>
        <div className="recipe-stamp">
          <span>
            comida
            <br />
            <b>.app</b>
          </span>
          <small>
            feito local.
            <br />
            pensado grande.
          </small>
        </div>
      </section>

      <footer className="footer section" id="baixar">
        <div className="container footer-top">
          <div>
            <a className="logo light" href="#inicio">
              comida<span>.app</span>
            </a>
            <h2>
              Seu próximo pedido
              <br />
              <em>começa aqui.</em>
            </h2>
          </div>
          <div className="footer-action">
            <p>Crie sua conta e peça. Ou cadastre seu restaurante e venda.</p>
            <a className="button button-primary" href="#inicio">
              Começar agora <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 comida.app</span>
          <span>
            feito para comer bem <b>♥</b>
          </span>
          <div>
            {/* <a href="#inicio">Instagram</a> */}
            {/* <a href="#inicio">Termos</a> */}
            {/* <a href="#inicio">Privacidade</a> */}
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
