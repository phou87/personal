function Music() {

}

export async function getServerSideProps(context) {
  const {res} = context;

  if (res) {
    res.writeHead(301, {
      Location: 'https://soundcloud.com/phobos-tunes'
    });
    res.end();
  }

  return {props: {}};
}

export default Music;
