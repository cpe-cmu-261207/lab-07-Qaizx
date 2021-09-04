import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  change_color : string

}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}



export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  change_color : '#000000'

})


export const Change = (color : string) => {

  PixelPainterStore.update(
    ch => {ch.change_color = color}
  )
}

export const Point = (x : number, y : number) => {

  PixelPainterStore.update(
    ch => {ch.canvas[y][x] = ch.change_color}
    )
}
export const Delete = () => { 
  PixelPainterStore.update(
    ch => {ch.canvas = createEmptyCanvas()

  })
}
export const Random = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      let ranNum = Math.floor(Math.random() * 12) + 1;
      if(ranNum === 1) output[i].push('#000000')
      else if (ranNum === 2) output[i].push('#804000')
      else if (ranNum === 3) output[i].push('#FE0000')
      else if (ranNum === 4) output[i].push('#FE6A00')
      else if (ranNum === 5) output[i].push('#FFD800')
      else if (ranNum === 6) output[i].push('#00FF01') 
      else if (ranNum === 7) output[i].push('#FFFFFF')
      else if (ranNum === 8) output[i].push('#01FFFF')
      else if (ranNum === 9) output[i].push('#0094FE')
      else if (ranNum === 10) output[i].push('#0026FF') 
      else if (ranNum === 11) output[i].push('#B100FE') 
      else if (ranNum === 12) output[i].push('#FF006E') 
    }
  }
  PixelPainterStore.update(
    ch => {ch.canvas = output

  })
}
