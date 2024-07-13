import { useRef, useState } from 'react'
import { useAppDispatch } from '@/hooks'
import { validateImage } from '@/features/utils/validateImage'

export const ImageContent = () => {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLInputElement>(null)

  const imageDataUrl = undefined

  // TODO: Check it more in-depth
  // https://stackoverflow.com/questions/7110353/html5-dragleave-fired-when-hovering-a-child-element
  const [dragInCounter, setDragInCounter] = useState(0)

  const fileSelectHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const dataUrl = await validateImage(file)
    console.log(dataUrl)
  }

  const fileDropHandler = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer?.files[0]
    setDragInCounter(0)
  }

  // const clearFileHandler = (event) => {}
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('dragging')
    // To allow drop
    // preventing the default behaviour of the browser opening a new window with the dropped file
    event.preventDefault()
  }
  return (
    <div
      className="flex-center outline p-8 shape-very-small"
      onDrop={fileDropHandler}
      onDragOver={handleDragOver}
      onDragEnter={() => setDragInCounter((prevState) => prevState + 1)}
      onDragLeave={() => setDragInCounter((prevState) => prevState - 1)}
    >
      {!imageDataUrl && (
        <input
          ref={ref}
          hidden={true}
          type="file"
          onChange={fileSelectHandler}
          id="file-upload"
          accept="image/png,image/jpg,image/jpeg"
        />
      )}

      {!imageDataUrl && !dragInCounter && (
        <div>
          <span>Drag and drop images or </span>
          <button className="outline overlay p-4 shape-very-small" onClick={() => ref.current?.click()}>
            Upload
          </button>
        </div>
      )}
      {imageDataUrl && (
        <div>
          <img draggable={false} src={imageDataUrl} />
        </div>
      )}
    </div>
  )
}
