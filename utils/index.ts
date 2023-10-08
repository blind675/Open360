export function isURLValid(url: string): boolean {
  // check that the url has the format https://www.zooniverse.org/projects/marek-slipski/cloudspotting-on-mars
  const regex =
    /^https:\/\/www.zooniverse.org\/projects\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+$/;
  if (regex.test(url)) {
    return true;
  }
  return false;
}

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
