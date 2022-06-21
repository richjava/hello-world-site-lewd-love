export default function Header1({ content }) {
  let { global } = { ...content };
  return (
    <header>
      <h3>{global.name}</h3>
    </header>
  );
}
