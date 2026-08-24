"use client";

import { useMemo, useState } from "react";

const specialties = [
  { icon: "✦", name: "Clínica geral", text: "Acompanhamento completo para sua saúde em todas as fases." },
  { icon: "◌", name: "Cardiologia", text: "Prevenção, diagnóstico e cuidado contínuo do coração." },
  { icon: "✺", name: "Dermatologia", text: "Saúde da pele com escuta, precisão e tratamentos atuais." },
];
const times = ["08:30", "10:00", "14:30", "16:00"];

export default function Home() {
  const [specialty, setSpecialty] = useState("Clínica geral");
  const [day, setDay] = useState("Seg, 24");
  const [time, setTime] = useState("10:00");
  const [confirmed, setConfirmed] = useState(false);
  const message = useMemo(() => encodeURIComponent(`Olá, Clínica Vitta! Gostaria de confirmar uma consulta de ${specialty} em ${day}, às ${time}.`), [specialty, day, time]);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Clínica Vitta - início"><span className="brand-mark">V</span><span>Clínica <b>Vitta</b></span></a>
        <nav aria-label="Navegação principal"><a href="#especialidades">Especialidades</a><a href="#estrutura">A clínica</a><a href="#agendar">Agendamento</a></nav>
        <a className="button button-small" href="#agendar">Agendar consulta <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <span className="eyebrow">Cuidado próximo. Medicina completa.</span>
          <h1>Saúde começa<br />com <em>escuta.</em></h1>
          <p>Consultas atentas, especialistas experientes e um espaço pensado para você se sentir bem — do primeiro contato ao acompanhamento.</p>
          <div className="hero-actions"><a className="button" href="#agendar">Agende sua consulta <span>↗</span></a><a className="text-link" href="#especialidades">Conheça nossas áreas <span>↓</span></a></div>
          <div className="trust-row"><div className="avatars" aria-hidden="true"><span>MV</span><span>LR</span><span>AS</span></div><p><b>4,9</b> <span aria-label="5 estrelas">★★★★★</span><br /><small>mais de 800 pacientes atendidos</small></p></div>
        </div>
        <div className="hero-badge"><b>12</b><span>anos cuidando<br />de pessoas</span></div>
      </section>

      <section className="marquee" aria-label="Diferenciais"><span>Atendimento humanizado</span><i>✦</i><span>Especialistas experientes</span><i>✦</i><span>Ambiente acolhedor</span><i>✦</i><span>Horários flexíveis</span></section>

      <section className="section specialties" id="especialidades">
        <div className="section-heading"><div><span className="eyebrow dark">Especialidades</span><h2>Cuidado para cada<br /><em>momento da vida.</em></h2></div><p>Uma equipe multidisciplinar para acompanhar sua saúde de forma integrada, preventiva e personalizada.</p></div>
        <div className="specialty-grid">
          {specialties.map((item, index) => <article className="specialty-card" key={item.name}><div className="card-top"><span className="card-icon">{item.icon}</span><small>0{index + 1}</small></div><h3>{item.name}</h3><p>{item.text}</p><a href="#agendar" onClick={() => setSpecialty(item.name)}>Agendar nesta área <span>↗</span></a></article>)}
        </div>
      </section>

      <section className="care" id="estrutura">
        <div className="care-photo" role="img" aria-label="Atendimento médico acolhedor na Clínica Vitta"><span>Um espaço feito<br />para acolher.</span></div>
        <div className="care-copy"><span className="eyebrow dark">Nossa forma de cuidar</span><h2>Você não é só<br />um prontuário.</h2><p>Aqui, cada consulta tem tempo para entender sua rotina, suas dúvidas e o que realmente importa para sua qualidade de vida.</p><ul><li><span>✓</span> Consulta sem pressa</li><li><span>✓</span> Plano de cuidado individual</li><li><span>✓</span> Acompanhamento próximo</li></ul></div>
      </section>

      <section className="booking section" id="agendar">
        <div className="booking-intro"><span className="eyebrow">Agendamento online</span><h2>Sua consulta,<br />em poucos passos.</h2><p>Escolha a especialidade, um dia e o melhor horário. Nossa equipe confirma tudo pelo WhatsApp.</p><p className="notice">Em caso de urgência, procure o pronto atendimento mais próximo. Este canal não atende emergências.</p></div>
        <div className="booking-card">
          <div className="step"><span>1</span><div><label htmlFor="specialty">Especialidade</label><select id="specialty" value={specialty} onChange={(e) => { setSpecialty(e.target.value); setConfirmed(false); }}>{specialties.map((s) => <option key={s.name}>{s.name}</option>)}</select></div></div>
          <div className="step"><span>2</span><div><label>Escolha o dia</label><div className="choices days">{["Seg, 24", "Ter, 25", "Qua, 26"].map((item) => <button type="button" className={day === item ? "active" : ""} onClick={() => { setDay(item); setConfirmed(false); }} key={item}>{item}</button>)}</div></div></div>
          <div className="step"><span>3</span><div><label>Horário disponível</label><div className="choices">{times.map((item) => <button type="button" className={time === item ? "active" : ""} onClick={() => { setTime(item); setConfirmed(false); }} key={item}>{item}</button>)}</div></div></div>
          <button className="button confirm" type="button" onClick={() => setConfirmed(true)}>{confirmed ? "Horário selecionado ✓" : "Revisar agendamento"}</button>
          {confirmed ? <div className="booking-result" aria-live="polite"><p><b>{specialty}</b><br />{day}, às {time}</p><a href={`https://wa.me/5585999999999?text=${message}`} target="_blank" rel="noreferrer">Confirmar no WhatsApp ↗</a></div> : null}
        </div>
      </section>

      <footer><div className="brand footer-brand"><span className="brand-mark">V</span><span>Clínica <b>Vitta</b></span></div><p>Seg–Sex, 07h às 19h · Fortaleza, CE<br />(85) 99999-9999</p><p>Projeto demonstrativo para portfólio.<br />Dados e contatos são fictícios.</p></footer>
    </main>
  );
}
