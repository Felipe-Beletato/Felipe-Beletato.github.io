import "./SectionTitle.css";

type SectionTitleProps = {
    label: string;
    title: string;
    description?: string;
  };

export function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps){
  return (
    <div className="section-title">

      <p className="section-label">
        {label}
      </p>

      <h2 className="section-heading">
        {title}
      </h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
      
    </div>
  );
}