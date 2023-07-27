import "./App.css";
import React from "react";
import { videoIds } from "./data";

function App() {
  const getEmbedCode = (videoId: string) => { 
    const iframeSrc = `<iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
   // Copy the text inside the text field
   navigator.clipboard.writeText(iframeSrc);
   // Alert the copied text
   alert("kopierat koden\r\nklistra in med CTRL+V");
  };

  const renderVideo = (videoId: string) => {
    return (
      <>
        <div style={{ flexGrow: 3, flexShrink: 1, display: "flex", flexDirection: "column", gap: "16px", backgroundColor: "gainsboro", padding: "16px" }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            <button onClick={() => (getEmbedCode(videoId))}>Kopiera embed kod</button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div style={{ display: "flex", gap: "16px", flexFlow: "row wrap" }}>
        {videoIds.map((videoId: string) => renderVideo(videoId))}
      </div>
    </>
  );
}

export default App;
