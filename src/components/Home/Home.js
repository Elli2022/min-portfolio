// src/components/Home/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Välkommen till Min Portfölj</h1>
        <p>
          Hej, jag är Eleonora – en mångsidig front-end utvecklare med djupa
          rötter i säkerhetsarbete och en passion för teknik och programmering.
          Som en livslång lärande har jag nyligen omskolat mig från en karriär
          inom Kriminalvården, där jag finslipade min förmåga att tänka kritiskt
          och hantera kritiska situationer, till att nu följa min passion inom
          webbutveckling.
        </p>
        <p>
          Min tekniska resa är stärkt av en solid utbildningsgrund med fokus på
          JavaScript, moderna webbteknologier och agil metodik. Jag kombinerar
          detta med en kandidatexamen i Service Management och erfarenheter som
          sträcker sig från cybersäkerhet till projektledning, vilket ger mig en
          unik förmåga att förstå både tekniska och affärsmässiga aspekter av
          projekt jag engagerar mig i.
        </p>
        <p>
          Utöver teknik, brinner jag för att skapa säkra och tillgängliga
          digitala miljöer som berikar användarens upplevelse. Jag är en
          lagspelare, redo att ta mig an nya utmaningar och bidra med min
          mångfaldiga erfarenhet till ditt nästa projekt.
        </p>
        <Link to="/about" className="learn-more-btn">
          Lär känna mig mer
        </Link>
      </div>
    </>
  );
}

export default Home;
