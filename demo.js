const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(configuration);

async function go(){
    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `How do I bake a cake?`,
    temperature: 0,
    max_tokens: 150,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    stop: ["You:"],
    });
    response.data.choices.forEach(choice=>{
      console.log(choice.text)
    })
}
go();