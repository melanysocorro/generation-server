'use strict';

import express from 'express';
import { Configuration, OpenAIApi } from "openai";
import {config} from 'dotenv';
config()

const configuration = new Configuration({
    organization: "org-n5SsNkSgmrYDfFJJeiZxYj9x",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());
app.post('/generate', async (req, res) => {
  // Add call to OpenAI based on the input
  const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: req.body.text,
  max_tokens: 10,
  temperature: 0,
});
res.send({text:req.body.text+response.data.choices[0].text});
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

