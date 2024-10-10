import { cn } from "@/utils/cn";

interface PDFViewerProps {
  url: string;
  className?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url, className }) => {
  return (
    <embed
      id="plugin"
      type="application/pdf"
      src={url}
      width="100%"
      height="100%"
      className={cn(
        `w-full h-[26rem] xl:h-[30rem] 1xl:h-[34rem] 2xl:h-[40rem] rounded-[10px]`,
        className
      )}
    />
  );
};

export default PDFViewer;
