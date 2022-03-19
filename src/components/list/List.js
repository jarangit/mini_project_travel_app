import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Grid,
} from "@material-ui/core";
import PlaceDetail from "../placeDetail/PlaceDetail";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const List = ({ data }) => {
  const [type, settype] = useState("restaurants");
  const [rating, setrating] = useState("0");
  const classes = useStyles();

  return (
    <div>
      <h4>Restauarants, Hotels & Attractions around you</h4>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => settype(e.target.value)}>
          <MenuItem value={"restaurants"}>Restaurants</MenuItem>
          <MenuItem value={"hotles"}>Hotels</MenuItem>
          <MenuItem value={"attractions"}>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setrating(e.target.value)}>
          <MenuItem value={"0"}>All</MenuItem>
          <MenuItem value={"3"}>3.0</MenuItem>
          <MenuItem value={"4"}>4.0</MenuItem>
          <MenuItem value={"4.5"}>4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        {data?.map((item, key) => (
          <Grid item key={key} xs={12}>
            <PlaceDetail place={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
