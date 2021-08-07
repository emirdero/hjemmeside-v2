import React from "react";
import logo from "./avatar.png";
import rust_logo from "./icons/rust.png";
import cpp_logo from "./icons/cpp.png";
import python_logo from "./icons/python.png";
import javascript_logo from "./icons/javascript.png";
import react_logo from "./icons/react.png";
import pytorch_logo from "./icons/pytorch_logo.png";
import react_native_logo from "./icons/react_native.png";
import sql_logo from "./icons/sql.png";
import docker_logo from "./icons/docker.png";
import php_logo from "./icons/php.png";
import flask_logo from "./icons/flask.png";
import java_logo from "./icons/java.png";
import graphql_logo from "./icons/graphql.png";
import html_js_css from "./icons/html_js_css.png";
import typescript_logo from "./icons/typescript.png";
import postgresql_logo from "./icons/postgresql.png";
import mysql_logo from "./icons/mysql.png";
import wip from "./wip.png";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <header class='page' id='App-header'>
        <br />
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Emir Derouiche</h2>
        <br />
        {scroll_arrows(1)}
      </header>
      <div class='page' id='experience'>
        <h2>Full Stack Software Engineer</h2>
        <div className='flex-container'>
          {language_box(rust_logo, "Rust")}
          {language_box(python_logo, "Python")}
          {language_box(typescript_logo, "Typescript")}
          {language_box(react_logo, "React")}
          {language_box(react_native_logo, "React Native")}
          {language_box(html_js_css, "HTML, JS & CSS")}
          {language_box(java_logo, "Java")}
          {language_box(cpp_logo, "C++")}
          {language_box(flask_logo, "Flask")}
          {language_box(pytorch_logo, "Pytorch")}
          {language_box(php_logo, "PHP")}
          {language_box(docker_logo, "Docker")}
          {language_box(mysql_logo, "mySQL")}
          {language_box(postgresql_logo, "PostgreSQL")}
          {language_box(graphql_logo, "Graph QL")}
        </div>
        {scroll_arrows(2)}
      </div>
      <div class='page' id='showcase'>
        <h2>Showcase</h2>
        {language_box(wip, "")}
      </div>
    </div>
  );
}

function language_box(src, txt) {
  return (
    <div class='language-card'>
      <div className='img-area'>
        <img src={src}></img>
      </div>
      <h3>{txt}</h3>
    </div>
  );
}

function scroll_arrows(page) {
  return (
    <div class='arrowAnim' onClick={() => scroll_down(page)}>
      <div class='arrowSliding'>
        <div class='arrow'></div>
      </div>
      <div class='arrowSliding delay1'>
        <div class='arrow'></div>
      </div>
      <div class='arrowSliding delay2'>
        <div class='arrow'></div>
      </div>
      <div class='arrowSliding delay3'>
        <div class='arrow'></div>
      </div>
    </div>
  );
}

function scroll_down(page) {
  let pages = ["App-header", "experience", "showcase"];

  let pageHeight = 0;

  for (let i = 0; i < page; i++) {
    pageHeight += document.getElementById(pages[i]).clientHeight;
  }

  window.scroll(0, pageHeight);
}

export default App;
