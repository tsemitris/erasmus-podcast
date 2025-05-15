import "./_headlineAside.scss";

interface IProps {
  title: string;
  underTitle: string | string[];
}

export const HeadlineAside = ({ title, underTitle }: IProps) => {
  const underTitles = Array.isArray(underTitle) ? underTitle : [underTitle];

  return (
    <>
      <div>
        <h5 className="aside-headline-title">{title}</h5>
        {underTitles.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </>
  );
};
