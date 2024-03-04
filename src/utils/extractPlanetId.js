export function extractPlanetId(url) {
    const match = url.match(/(\d+)\/?$/);
    return match ? match[1] : null;
  }