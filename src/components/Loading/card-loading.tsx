import './styles.scss';
interface CardLoadingProps {
  items?: number;
  className?: string;
}

export const CardLoading = ({
  items = 6,
  className = 'wrapper__loading',
}: CardLoadingProps) => {
  return (
    <div className={className}>
      {[...Array(items)].map((_, i) => (
        <div className="loading__card" key={i}>
          <div className=" loading-header h-32 mb-2">
            <div className="img" />
          </div>
          <div className="description">
            <div className="line mb-1" />
            <div className="line mb-1" />
            <div className="line mb-1" />
            <div className="line mb-1" />
          </div>
        </div>
      ))}
    </div>
  );
};
