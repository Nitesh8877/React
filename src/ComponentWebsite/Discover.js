import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Discover(){
    return (
        <div className="bg-success text-center">
        <p className="display-4 text-white p-4">Discover the web app</p>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, official
        </p>
        <div className="row p-4">
          <div className="col-12">
            <button className="btn btn-warning btn-lg">Play Store</button>
            <button className="btn btn-warning btn-lg">App Store</button>
          </div>
        </div>
      </div>
    )
}