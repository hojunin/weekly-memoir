type Message = {
  role?: string;
  name?: string;
  content: string;
};

export function numTokensFromMessages(
  messages: Message[],
  model: string = 'gpt-3.5-turbo-0613',
): number {
  // Mock encoding for the purpose of this example
  const encoding: Record<string, number> = {
    '<im_start>': 1,
    '<im_end>': 1,
    '\n': 1, // Assuming newline is 1 token
  };

  if (model === 'gpt-3.5-turbo-0613') {
    let numTokens = 0;

    for (const message of messages) {
      numTokens += 4; // every message follows <im_start>{role/name}\n{content}<im_end>\n

      for (const [key, value] of Object.entries(message)) {
        if (key === 'name') {
          numTokens += -1; // role is always required and always 1 token
        }

        if (typeof value === 'string') {
          numTokens += encoding[value] || value.length;
        }
      }
    }

    numTokens += 2; // every reply is primed with <im_start>assistant
    return numTokens;
  } else {
    throw new Error(`numTokensFromMessages() is not presently implemented for model ${model}.
    See https://github.com/openai/openai-python/blob/main/chatml.md for information on how messages are converted to tokens.`);
  }
}
