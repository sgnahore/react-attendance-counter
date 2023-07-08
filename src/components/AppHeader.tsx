interface AppHeaderProps {
  title: string;
}

export default function AppHeader({ title }: AppHeaderProps): JSX.Element {
  return (
    <>
      {title.length >= 5 && (
        <header>
          <h1>{title}</h1>
        </header>
      )}

      {title.length < 5 && (
        <header>
          <h1>{title}</h1>
          <p>(The title is a work-in-progress)</p>
        </header>
      )}
    </>
  );
}
