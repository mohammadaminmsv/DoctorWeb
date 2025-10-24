declare global {
  interface MainLayoutProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    withHeader?: boolean;
    withFooter?: boolean;
    test?: boolean;
  }

  interface GButtonProps {
    classProperty?: string;
    text?: string;
    rel?: string;
    variant?: keyof typeof theme;
    event?: () => void;
    disabled?: boolean;
    loading?: boolean;
    size?: "sm" | "md" | "lg";
  }
}

export {};
