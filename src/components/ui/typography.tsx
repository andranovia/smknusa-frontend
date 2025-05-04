import { cn } from "@/utils/cn";

type HeadingProps = {
  children: React.ReactNode;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "p";
  className?: string;
};

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export function Heading({ children, type, className }: HeadingProps) {
  switch (type) {
    case "h1":
      return (
        <h1
          className={cn(
            `font-[700] xl:text-[46px] text-[22px] sm:text-[24px] xl:leading-[4.5rem] ${className} `
          )}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(`font-[600] xl:text-[40px] text-[22px] ${className} `)}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(`font-[600] xl:text-[28px] text-[20px] ${className} `)}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={cn(`font-[600] xl:text-[24px] text-[20px] ${className} `)}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={cn(`font-[500] text-sm xl:text-[18px] `, className)}>
          {children}
        </h5>
      );
  }
}

export function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={cn(`font-[400] text-[18px] ${className}`)}>{children}</p>
  );
}

export function List({ children, className }: ParagraphProps) {
  return (
    <ul
      className={cn(
        `list-disc list-inside font-[500] xl:text-lg, ${className}`
      )}
    >
      {children}
    </ul>
  );
}
