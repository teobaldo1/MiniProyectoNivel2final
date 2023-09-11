import { useEffect, useState } from "react";
import "./App.css";
import Tarjetas from "./components/cards/Tarjetas";
import Nav from "./components/Nav/Nav";
import Stays from "./components/Stays/Stays";


function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [filterCard, setFilterCard]= useState([]) 

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();

      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
      setFilterCard(resJson)
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);

  
  function actualizarData(cityData, maxGuestsData) {
    
    const dataFiltrada = data.filter(
      (el) => el.city == cityData.charAt(0).toUpperCase() + cityData.slice(1)  && el.maxGuests <= maxGuestsData 
      
    );
    
    setFilterCard(dataFiltrada)
    console.log(filterCard);
    }

  return (
    <>
      <div className="container">
        <div className="emcabezado">
          <div>
            <Nav actualizarData={actualizarData} />
          </div>
          <div>
            <Stays numberCard={filterCard.length + " " + "stays"} />
          </div>
        </div>
        <div className="principal" key={data.length}>
          {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
          {filterCard.map((el, i) => {
            return (
              <div>
                <div>
                  <Tarjetas
                    key={i}
                    photo={el.photo}
                    superHost={el.superHost}
                    type={el.type + "."}
                    beds={el.beds + " " + "beds"}
                    rating={el.rating}
                    title={el.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
