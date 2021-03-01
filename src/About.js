import React from "react";
import img1 from "./css/images/WIN_20201003_13_04_50_Pro.jpg";

function About() {
  return (
    <div id="About Me" class="About-Me">
      <h2>About Me</h2>
      <img src={img1} style={{ width: "100%" }} alt="pic" />

      <p>
        I am the middle child with two sisters one older and one younger. I care
        for muy friends and family. I'm kind to others, and im a little shy to
        people that i don't know. Unless im playing a game with them since I can
        learn more about a person by the way they play and how they act in the
        game. I love to play strategy, and adventure games, and music of all
        genre. I am trustworthy and a good team player.
      </p>
    </div>
  );
}

export default About;
