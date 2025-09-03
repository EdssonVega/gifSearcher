interface CustomProps {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: CustomProps) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};
