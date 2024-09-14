import React from "react";

interface PDFViewerProps {
  url: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
  return (
    <embed
      id="plugin"
      type="application/pdf"
      src={url}
      width="100%"
      height="100%"
      className="w-full h-[26rem] xl:h-[30rem] 1xl:h-[34rem] 2xl:h-[40rem] rounded-[10px]"
    />
  );
};

export default PDFViewer;
