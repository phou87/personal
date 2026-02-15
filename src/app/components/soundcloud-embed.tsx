interface Props {
  embedSrc: string;
}

export function SoundcloudEmbed(props: Props) {
  return (
    <iframe
      width="100%"
      height="300"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={props.embedSrc}
    />
  );
}
