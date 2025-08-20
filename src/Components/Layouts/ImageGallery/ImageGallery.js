import React from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "https://i.ibb.co.com/tfw76rN/IMG-20220815-WA0000-01-01.jpg",
      alt: "Tanin Rahman",
    },
    {
      id: 2,
      src: "https://i.ibb.co.com/ksJxWR1k/Remove-background-project.png",
      alt: "Tanin Rahman",
    },
    {
      id: 3,
      src: "https://i.ibb.co.com/cS0pk8v4/IMG-0499.jpg",
      alt: "Tanin Rahman",
    },
    {
      id: 4,
      src: "https://i.ibb.co.com/N6z9fY0h/upload1.jpg",
      alt: "Tanin Rahman",
    },
    {
      id: 5,
      src: "https://i.ibb.co.com/9H8kYGq6/By-Seputar-Gcam17-Jul-18-23-SONY-NATURE-V2-Format-YUV-by-Unknwon-PORTRAIT-01.jpg",
      alt: "Tanin Rahman",
    },
    {
      id: 6,
      src: "https://i.ibb.co.com/fd8vJjSx/By-Seputar-Gcam17-Jul-18-20-SONY-NATURE-V2-Format-YUV-by-Unknwon-PORTRAIT-2-01.jpg",
      alt: "Tanin Rahman",
    },
    {
      id: 7,
      src: "https://i.ibb.co.com/My1nHL7K/20220711-193925-01-01-01.jpg",
      alt: "Tanin Rahman",
    },
    {
      id: 8,
      src: "https://i.ibb.co.com/wF1gWc6T/untitled.png",
      alt: "Tanin Rahman",
    },
  ];

  // Distribute images across columns for masonry effect
  const distributeImages = (images, columnCount) => {
    const columns = Array.from({ length: columnCount }, () => []);

    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(image);
    });

    return columns;
  };

  const getColumnCount = () => {
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 3;
    return 4;
  };

  const [columnCount, setColumnCount] = React.useState(getColumnCount());

  React.useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = distributeImages(images, columnCount);

  return (
    <div className="masonry-container">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="masonry-column">
          {column.map((image, imageIndex) => {
            let style = {};

            if (columnIndex % 2 === 0) {
              // Odd columns (0,2...)
              style =
                imageIndex === 0
                  ? { height: "400px" }
                  : imageIndex === 1
                  ? { height: "250px" }
                  : {};
            } else {
              // Even columns (1,3...)
              style =
                imageIndex === 0
                  ? { height: "250px" }
                  : imageIndex === 1
                  ? { height: "400px" }
                  : {};
            }

            return (
              <div
                key={image.id}
                className={`image-card ${
                  columnIndex % 2 === 0
                    ? imageIndex % 2 === 0
                      ? "slide-left"
                      : "slide-right"
                    : imageIndex % 2 === 0
                    ? "slide-top"
                    : "slide-bottom"
                }`}
                style={style}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
