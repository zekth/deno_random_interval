export interface clearInterval {
  clear: () => void;
}
export function randomInterval(
  c: () => void,
  max: number,
  min: number = 0
): clearInterval {
  let i;
  const timeout = () => {
    i = setTimeout(() => {
      c();
      timeout();
    }, Math.floor(Math.random() * max + min));
  };
  timeout();
  return { clear: () => clearTimeout(i) };
}
