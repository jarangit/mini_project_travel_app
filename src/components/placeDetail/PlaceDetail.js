import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
} from "@material-ui/core";
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined";
import { Phone, Star, AttachMoney, TrendingUp } from "@material-ui/icons";

const PlaceDetail = ({ place }) => {
  console.log(place);
  return (
    <Card>
      <CardMedia
        style={{ height: "200px" }}
        title={place.name}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"
        }
      />
      <CardContent>
        <h5>{place.name}</h5>
        <Box display={"flex"} justifyContent="space-between">
          <div>
            {" "}
            <AttachMoney />
          </div>
          <div>{place.price}</div>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
          <div>
            <Star />
          </div>
          <div>{place.rating}</div>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
          <div>
            <TrendingUp />
          </div>
          <div>{place.ranking}</div>
        </Box>

        {place.awards?.map((award, key) => (
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            my={1}
            key={key}
          >
            <img src={award.images.small} alt="" />
            <div>{award.display_name}</div>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip
            label={name}
            key={name}
            size="small"
            style={{ margin: "2px" }}
          />
        ))}

        {place?.address && (
          <div>
            <span>
              <LocationOnOutlined />
            </span>
            {place.address}
          </div>
        )}
        {place?.phone && (
          <div>
            <span>
              <Phone />
            </span>
            {place.phone}
          </div>
        )}
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetail;
