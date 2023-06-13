import Hero from "../Components/Hero";
import Categoria from "../Components/Categoria/Categoria";

const Home = ({ categorias, videos }) => {
  return (
    <>
      <Hero />

      {categorias.map((categoria) => {
        return (
          <Categoria
            datos={categoria}
            key={categoria.titulo}
            videos={videos.filter(
              (video) => video.categoria === categoria.titulo
            )}
          />
        );
      })}
    </>
  );
};

export default Home;
