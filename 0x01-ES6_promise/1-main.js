import getFullResponseFromAPI from './1-promise';

async function main() {
  try {
    console.log(await getFullResponseFromAPI(true));
    console.log(await getFullResponseFromAPI(false));
  } catch (error) {
    console.error(error);
  }
}

main();
