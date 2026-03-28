require('dotenv').config()
// const express = require('express');
const { GoogleGenAI } = require("@google/genai");

// console.log(process.env.api);
const ai = new GoogleGenAI({apiKey: process.env.api});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: msg,
  });
  return response.text;
}

module.exports = main;
