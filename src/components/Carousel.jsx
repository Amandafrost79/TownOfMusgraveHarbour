import { Carousel as DefaultCarousel } from "react-bootstrap";

export default function Carousel({ imageArray, marginBottom = "mb-4" }) {
  return (
    <DefaultCarousel className={marginBottom}>
      {imageArray.map((image) => {
        return (
          <DefaultCarousel.Item key={image.src}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "500px",
              }}
            />
            <DefaultCarousel.Caption>
              <h3></h3>
              <p></p>
            </DefaultCarousel.Caption>
          </DefaultCarousel.Item>
        );
      })}
    </DefaultCarousel>
  );
}
