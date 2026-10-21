import "./InfoCard.css";

type InfoCardProps = {
    title: string;
    description: string;
    icon: React.ElementType;
};

export function InfoCard({
    title,
    description,
    icon: Icon,
}: InfoCardProps) {
    return (
        <div className="info-card">

            <div className="info-card-icon">
                <Icon size={24} />
            </div>
            
            <h3 className="info-card-title">
                {title}
            </h3>

            <p className="info-card-description">
                {description}
            </p>

        </div>
    );
}