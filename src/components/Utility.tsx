import { Delete, Random } from "../stores/PixelPainterStore"
const Utility = () => {


  return (
    <div className="flex justify-center space-x-3">
      <button onClick ={() => Delete()} className="w-36">Clear</button>
      <button onClick = {() => Random()} className="w-36">Random color</button>
    </div>
  )
}

export default Utility
