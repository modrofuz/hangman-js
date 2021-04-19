export async function getPuzzleAsync(wordCount) {
  const res = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  );
  if (res.status === 200) {
    const data = await res.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch puzzle");
  }
}








