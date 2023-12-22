interface ErrorProps {
  children: string;
}

export const Error = ({ children }: ErrorProps) => {
  return (
    <div className="text-center bg-red-50 p-2.5 mb-2 text-sm text-red-600 dark:text-red-500">
      {children}
    </div>
  );
};
