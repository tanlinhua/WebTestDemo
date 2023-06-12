const url = 'http://openai.chatgpt/chat';

async function getResponse() {
  const resp = await fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: '今天天气怎么样' }),
  });

  const reader = resp.body.getReader();
  const textDecoder = new TextDecoder();
  while (1) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const str = textDecoder.decode(value);
    console.log(str);
  }
}
