const OpenAI = require("openai");

const openai = new OpenAI();

module.exports = {
  async postAnswer(req, res) {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant designed to output JSON.",
          },
          { role: "user", content: req.body.message },
        ],
        model: "gpt-3.5-turbo-1106",
        response_format: { type: "json_object" },
      });
      res.send(completion.choices[0].message.content);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getTest(req, res) {
    try {
      res.send("Test");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
