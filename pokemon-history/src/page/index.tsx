/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePokemonHistoryStore } from "ShellStore/storeHistory";
import "./style.scss";

const PokemonDetailPage = () => {
  const { history } = usePokemonHistoryStore();

  return (
    <div className="page-pokemon-history">
      <h4 className="align-center">Historial de búsqueda</h4>
      <div className="card-list">
        {history.length < 1 && (
          <p className="align-center">No hay elementos para mostrar</p>
        )}
        {history.map((item: any) => {
          return (
            <div className="card-item">
              <div className="card-img-container">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-detail">
                <p> {item.name} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonDetailPage;
