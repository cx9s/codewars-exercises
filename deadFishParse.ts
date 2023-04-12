const parse = (data: string): number[] => {
  let value: number = 0;
  const output: number[] = [];

  const commands = (command: string) => {
    switch (command) {
      case "i":
        value++;
        break;
      case "d":
        value--;
        break;
      case "s":
        value = value ** 2;
        break;
      case "o":
        output.push(value);
        break;
    }
  };

  [...data].forEach((char) => commands(char));
  return output;
};

console.log(parse("iiisxxxdoso"));
