import L from "leaflet";
import React from "react";
import { Polyline, useMap } from "react-leaflet";

function PolylineWithLabel({ positions, labelText, color}) {
    const map = useMap();
  
    // Tạo một div element để chứa nhãn
    const labelContainer = L.DomUtil.create('div', 'polyline-label');
    labelContainer.innerHTML = labelText;
  
    // Tạo một div overlay
    const labelOverlay = (L as any).divOverlay({
        className: 'polyline-label-overlay',
        html: labelContainer,
        position: positions[0]
      });
  
    // Hiển thị div overlay trên bản đồ
    React.useEffect(() => {
      labelOverlay.addTo(map);
      return () => {
        labelOverlay.remove();
      };
    }, [map]);
  
    return (
      <Polyline pathOptions={{ color: color }} positions={positions} />
    );
  }

  export default PolylineWithLabel;