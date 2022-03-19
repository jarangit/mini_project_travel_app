import { CssBaseline, Grid } from "@material-ui/core";
import "./App.css";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";
import { getPlacesData } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState([]);

  const [coordinates, setcoordinates] = useState({
    lat: 13,
    lng: 13,
  });
  const [bounds, setbounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setcoordinates({
          lat: latitude,
          lng: longitude,
        });
      }
    );
  });
  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setdata(data);
    });
  }, [bounds]);

  console.log(data);
  console.log(coordinates);
  console.log(bounds);
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item sx={4} md={4} sm={6}>
          <List data={data} />
        </Grid>
        <Grid item xs={8} md={8} sm={6}>
          <Map
            coordinates={coordinates}
            setcoordinates={setcoordinates}
            setbounds={setbounds}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
