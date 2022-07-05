import React from "react";
import Document from "../../components/documentComponent/Document/Document";
import DocumentSlider from "../../components/documentComponent/documentSlider/DocumentSlider";
import Footer from "../../components/Footer/Footer";
import "./DocumentPage.css";

const DocumentPage = () => {
  return (
    <>
      <div className="container-fluid documentPage">
        <div className="documentPagewrapper">
          {/* about us top bar */}
          <div className="documentSlider">
            <DocumentSlider />
          </div>
          {/* document */}
          <div className="documentImages">
            <Document />
          </div>

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DocumentPage;
