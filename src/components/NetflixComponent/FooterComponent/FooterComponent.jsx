import React from "react";
import { FooterContainer, FooterList } from "./styled";

function FooterComponent() {
  return (
    <FooterContainer>
      <p>Questions? Call 1-800-012-298</p>
      <FooterList>
        <ul>
          <li>
            <a href="#3">FAQ</a>
          </li>
          <li>
            <a href="#3">Account</a>
          </li>
          <li>
            <a href="#3">Jobs</a>
          </li>
          <li>
            <a href="#3">Ways to Watch</a>
          </li>
          <li>
            <a href="#3">Cookie Preferences</a>
          </li>
          <li>
            <a href="#3">Speed Test</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#3">Gift Card Terms</a>
          </li>
          <li>
            <a href="#3">Media Center</a>
          </li>
          <li>
            <a href="#3">Redeem Gift Cards</a>
          </li>
          <li>
            <a href="#3">Terms of Use</a>
          </li>
          <li>
            <a href="#3">Corporate Information</a>
          </li>
          <li>
            <a href="#3">Legal Notices</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#3">Help Center</a>
          </li>
          <li>
            <a href="#3">Investor Relations</a>
          </li>
          <li>
            <a href="#3">Buy Gift Cards</a>
          </li>
          <li>
            <a href="#3">Privacy</a>
          </li>
          <li>
            <a href="#3">Contact Us</a>
          </li>
          <li>
            <a href="#3">Only on Netflix</a>
          </li>
        </ul>
      </FooterList>
      <a
        href="#3"
        style={{
          padding: "1rem 2rem",
          border: "1px solid #737373",
          borderRadius: "5px",
          display: "inline-block",
          marginBottom: "1rem",
          color: "#737373",
          textDecoration: "none",
        }}
      >
        English
      </a>
      <p>Netflix Thailand</p>
    </FooterContainer>
  );
}

export default FooterComponent;
