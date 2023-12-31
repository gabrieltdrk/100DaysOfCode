import useWindowSize from "../hooks/useWindowSize";

export default function DisplayWindowSize() {
  const {width, height} = useWindowSize();
  return (
    <div>
      <p>A altura da janela é: {height}</p>
      <p>A largura da janela é: {width}</p>
    </div>
  );
}
