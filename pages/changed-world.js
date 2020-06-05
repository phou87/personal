function ChangedWorld() {

}

export async function getServerSideProps(context) {
  const {res} = context;

  if (res) {
    res.writeHead(301, {
      Location: 'https://soundcloud.com/phobos-tunes/changed-world'
    });
    res.end();
  }

  return {props: {}};
}

export default ChangedWorld;
