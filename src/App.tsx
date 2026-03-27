import { useState, useEffect } from "react";
import "./index.css";

const testimonials = [
  {
    stars: 5,
    text: "Eu passava horas toda semana procurando atividades na internet. Agora tenho tudo pronto e organizado. Meus encontros ficaram muito mais dinâmicos e as crianças adoram!",
    name: "Maria Aparecida",
    role: "Catequista há 8 anos",
    photo: "/avatar-maria.png"
  },
  {
    stars: 5,
    text: "Recomendo para toda a nossa equipe de catequistas. O material é muito bem estruturado e facilita demais a organização dos encontros. Valeu cada centavo.",
    name: "Irmã Conceição",
    role: "Coordenadora de Catequese",
    photo: "/avatar-irma.png"
  },
  {
    stars: 5,
    text: "Comecei a catequizar este ano e não tinha experiência. Esse material me deu segurança para conduzir os encontros. As crianças ficam muito mais participativas.",
    name: "Fernanda Oliveira",
    role: "Catequista voluntária",
    photo: "/avatar-fernanda.png"
  },
  {
    stars: 5,
    text: "Um material sério, respeitoso e alinhado com a fé católica. Faz diferença ter recursos assim disponíveis para nossas comunidades.",
    name: "Pe. Ricardo Santos",
    role: "Pároco e formador",
    photo: "/avatar-padre.png"
  },
  {
    stars: 5,
    text: "Depois de tantos anos catequizando, achei que já tinha visto tudo. Esse material me surpreendeu com ideias novas e criativas. Renovou meu ânimo!",
    name: "Dona Tereza",
    role: "Catequista há 15 anos",
    photo: "/avatar-tereza.png"
  },
  {
    stars: 5,
    text: "O valor é muito acessível pelo tanto que se recebe. As dinâmicas são práticas e fáceis de adaptar. Super recomendo para qualquer catequista.",
    name: "Lucas Mendes",
    role: "Catequista e seminarista",
    photo: "/avatar-lucas.png"
  }
];

const faqs = [
  { q: "O material é digital ou físico?", a: "O material é 100% digital. Você recebe o acesso por e-mail logo após a confirmação da compra e pode baixar, imprimir e usar quantas vezes quiser." },
  { q: "Posso usar com qualquer faixa etária?", a: "Sim! As dinâmicas foram pensadas para diferentes idades e etapas da catequese, desde as crianças menores até os jovens. Cada dinâmica indica a faixa etária mais adequada." },
  { q: "Como funciona a garantia?", a: "Você tem 7 dias para testar o material. Se não ficar satisfeito por qualquer motivo, basta nos enviar um e-mail e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia." },
  { q: "Preciso de materiais especiais para aplicar as dinâmicas?", a: "Não! As dinâmicas foram desenvolvidas para usar materiais simples e acessíveis, como papel, caneta, cartolina e objetos do cotidiano. Nada de gastos extras." },
  { q: "Qual a diferença entre o Pacote Básico e o Completo?", a: "O Pacote Básico inclui as 320 dinâmicas organizadas por temas. O Pacote Completo inclui tudo isso mais 5 bônus exclusivos: Kit de Jogos Bíblicos, 100 Atividades Bíblicas Católicas, 100 Mapas Mentais, Calendário Litúrgico e 100 Jogos e Dinâmicas em Grupo." },
  { q: "Como recebo o acesso após a compra?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link para download do material. O acesso é instantâneo, 24 horas por dia, 7 dias por semana." }
];

function Countdown() {
  const [time, setTime] = useState({ m: 14, s: 42 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { m: prev.m - 1, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="countdown">
      <span>⏰</span>
      <span>Oferta expira em {String(time.m).padStart(2, '0')}:{String(time.s).padStart(2, '0')}</span>
    </div>
  );
}

function Popup({ onClose }: { onClose: () => void }) {
  return (
    <div className="popup-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="popup">
        <button className="popup-close" onClick={onClose}>✕</button>
        <span className="popup-icon">🎁</span>
        <h2>Espere! <span>Oferta Imperdível 🔥</span></h2>
        <p className="popup-desc">
          Leve o <strong>Pacote Completo</strong> com 5 bônus exclusivos por apenas:
        </p>
        <div className="popup-price-block">
          <div className="popup-original-price">R$27,00</div>
          <span className="popup-new-price">R$19,90</span>
          <div className="popup-payment-note">pagamento único</div>
        </div>
        <div className="popup-features">
          <div className="popup-feature">+320 Dinâmicas</div>
          <div className="popup-feature">Jogos Bíblicos</div>
          <div className="popup-feature">100 Atividades</div>
          <div className="popup-feature">100 Mapas Mentais</div>
          <div className="popup-feature">Calendário Litúrgico</div>
          <div className="popup-feature">100 Dinâmicas Grupo</div>
          <div className="popup-feature">Garantia de 30 dias</div>
        </div>
        <a href="https://pay.wiapy.com/D_L1NwzSgA" className="btn-popup" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}>🔒 RESGATAR OFERTA</a>
        <a href="https://pay.wiapy.com/9A8E3SWaOL" className="popup-skip" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}>
          Não, quero manter o Pacote Básico
        </a>
      </div>
    </div>
  );
}

function Notification() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="notification">
      <span className="notification-icon">🛒</span>
      <div>
        <strong>Cláudia S. acabou de comprar</strong>
        <span>Pacote Básico — agora há pouco</span>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {q}
        <span className={`faq-chevron ${open ? 'open' : ''}`}>▾</span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>{a}</div>
    </div>
  );
}

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  function handleBuyBasic() {
    setShowPopup(true);
  }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">Material Exclusivo para Catequistas</div>
        <h1>
          Pare de improvisar na catequese e tenha{" "}
          <span>+320 dinâmicas prontas</span> para encontros mais criativos e participativos
        </h1>
        <p className="hero-sub">
          Um material completo, organizado por temas e fácil de aplicar para transformar seus encontros de catequese, prender mais a atenção das crianças e economizar horas de preparação.
        </p>
        <div className="book-cover-wrapper">
          <img src="/book-cover.png" alt="320 Dinâmicas Criativas para Catequese" className="book-cover" />
          <div className="book-shine" />
        </div>
        <p className="price-tag">a partir de <strong>R$10,00</strong></p>
        <button className="btn-primary" onClick={handleBuyBasic}>
          QUERO COMEÇAR AGORA
        </button>
        <div className="scroll-indicator">↓</div>
      </section>

      {/* WHAT YOU GET */}
      <section className="what-you-get">
        <div className="container">
          <h2 className="section-title">O Que Você Vai Receber</h2>
          <p className="section-sub">+320 dinâmicas organizadas por temas e prontas para usar nos seus encontros de catequese</p>
          <div className="grid-3">
            {[
              { title: "Dinâmicas de Acolhimento", desc: "Atividades para criar um ambiente acolhedor e quebrar o gelo logo no início do encontro." },
              { title: "Dinâmicas sobre a Bíblia", desc: "Dinâmicas que ajudam as crianças a conhecer e vivenciar as histórias bíblicas de forma lúdica." },
              { title: "Dinâmicas sobre os Sacramentos", desc: "Atividades para ensinar sobre Batismo, Eucaristia, Crisma e os demais sacramentos." },
              { title: "Dinâmicas sobre Valores Cristãos", desc: "Propostas que trabalham amor ao próximo, perdão, generosidade e outros valores da fé." },
              { title: "Dinâmicas de Oração", desc: "Momentos criativos de oração que conectam as crianças com Deus de forma simples." },
              { title: "Dinâmicas de Encerramento", desc: "Atividades para finalizar o encontro com reflexão, alegria e envio missionário." }
            ].map((item, i) => (
              <div className="card" key={i}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Por Que Escolher Nosso Material?</h2>
          <p className="section-sub">Chega de perder tempo improvisando. Tenha tudo organizado para conduzir encontros mais leves, criativos e participativos.</p>
          <div className="features-grid">
            {[
              { icon: "✅", title: "+320 Dinâmicas Testadas e Aprovadas", desc: "Material já organizado e pensado para facilitar a preparação dos encontros." },
              { icon: "🎯", title: "Fáceis de Aplicar, Mesmo Para Iniciantes", desc: "Passo a passo simples, com materiais acessíveis e linguagem clara." },
              { icon: "👶", title: "Adaptáveis Para Diferentes Idades", desc: "Atividades pensadas para engajar catequizandos em diferentes fases." },
              { icon: "📥", title: "Acesso Imediato e 100% Digital", desc: "Recebeu, baixou, já pode começar a usar. Sem espera." },
              { icon: "⏰", title: "Economize Horas de Preparação", desc: "Pare de passar horas procurando ideias na internet." },
              { icon: "✝️", title: "Conteúdo Alinhado à Fé Católica", desc: "Material pensado com respeito à catequese e à vivência cristã." }
            ].map((f, i) => (
              <div className="feature-item" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Veja o Que Estão Dizendo Sobre as Dinâmicas</h2>
          <p className="section-sub">Catequistas de todo o Brasil já estão transformando seus encontros com esse material.</p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">{"★".repeat(t.stars)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.photo} alt={t.name} className="avatar-photo" />
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="bonuses">
        <div className="container">
          <div className="section-badge">Bônus Exclusivos</div>
          <h2 className="section-title">Ao Garantir Seu Material, Você Recebe 5 Bônus Exclusivos</h2>
          <p className="section-sub" style={{ color: '#b09a7e' }}>Complementos que potencializam ainda mais seus encontros de catequese.</p>
          <div className="bonus-grid">
            {[
              { title: "Kit de Jogos Bíblicos", desc: "Jogos prontos para tornar o aprendizado bíblico divertido e memorável." },
              { title: "100 Atividades Bíblicas Católicas", desc: "Atividades complementares para reforçar o conteúdo dos encontros." },
              { title: "100 Mapas Mentais dos Personagens Bíblicos", desc: "Resumos visuais para ensinar sobre as grandes personagens da Bíblia." },
              { title: "Calendário Litúrgico Ilustrado", desc: "Acompanhe o ano litúrgico com ilustrações e explicações acessíveis." },
              { title: "100 Jogos e Dinâmicas Bíblicas em Grupo", desc: "Atividades coletivas que promovem integração e aprendizado." }
            ].map((b, i) => (
              <div className="bonus-card" key={i}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">Escolha Seu Pacote</h2>
          <p className="section-sub">Invista nos seus encontros de catequese com um valor acessível e tenha acesso imediato ao material.</p>
          <Countdown />
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Pacote Básico</h3>
              <div className="pricing-price">
                <span className="price-main">R$10,00</span>
                <span className="price-note">pagamento único</span>
              </div>
              <ul className="pricing-features">
                <li>+320 Dinâmicas de Catequese</li>
                <li>Acesso imediato por e-mail</li>
                <li>Formato PDF</li>
                <li>Garantia de 7 dias</li>
              </ul>
              <button className="btn-outline" onClick={handleBuyBasic}>
                QUERO ESSE PACOTE
              </button>
            </div>
            <div className="pricing-card featured">
              <div className="best-seller-badge">✨ MAIS VENDIDO</div>
              <h3>Pacote Completo</h3>
              <div className="pricing-price">
                <div className="price-original">R$47,90</div>
                <span className="price-main">R$27,90</span>
                <span className="price-note">pagamento único</span>
              </div>
              <ul className="pricing-features">
                <li>Tudo do pacote básico</li>
                <li>Kit de Jogos Bíblicos</li>
                <li>100 Atividades Bíblicas Católicas</li>
                <li>100 Mapas Mentais dos Personagens Bíblicos</li>
                <li>Calendário Litúrgico Ilustrado</li>
                <li>100 Jogos e Dinâmicas Bíblicas em Grupo</li>
                <li>Acesso imediato por e-mail</li>
                <li>Garantia estendida de 30 dias</li>
              </ul>
              <a href="https://pay.wiapy.com/3S6ze9kca3" className="btn-featured" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}>
                QUERO A VERSÃO COMPLETA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="guarantee">
        <div className="container">
          <div className="guarantee-box">
            <span className="guarantee-icon">🛡️</span>
            <h2 className="guarantee-title">Garantia Incondicional de <span>7 Dias</span></h2>
            <p className="guarantee-text">
              Se por qualquer motivo você não ficar satisfeito com o material, basta nos enviar um e-mail dentro de 7 dias e devolveremos <strong>100% do seu investimento</strong>. Sem perguntas, sem burocracia.
            </p>
            <p className="guarantee-note">✓ Risco zero para você — sua satisfação é nossa prioridade</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="faq-list" style={{ marginTop: '40px' }}>
            {faqs.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
          <div style={{ marginTop: '40px' }}>
            <button className="btn-primary" onClick={handleBuyBasic}>
              GARANTIR MEU ACESSO
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="logo-text">Dinâmica Catequese</div>
        <p>Transformando encontros de catequese em experiências inesquecíveis</p>
        <p style={{ marginTop: '8px' }}>© 2026 Dinâmica Catequese. Todos os direitos reservados.</p>
      </footer>

      {/* POPUP */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      {/* NOTIFICATION */}
      <Notification />
    </>
  );
}
