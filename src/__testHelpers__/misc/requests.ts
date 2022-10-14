function delayedRequest<T>(data: T): Promise<T>;
function delayedRequest<T>(data: T, avgDelay: number): Promise<T>;

function delayedRequest<T>(data: T, avgDelay = 1000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, (Math.random() - 0.5) * avgDelay + avgDelay);
  });
}

export { delayedRequest };
