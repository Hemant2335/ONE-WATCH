export const apidata = async(urli)=>{

    const url = urli;
    const data = await fetch(url);
    const parseddata = data.json();
    console.log(parseddata);
  }