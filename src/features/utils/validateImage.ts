// https://stackoverflow.com/questions/3828554/how-to-allow-input-type-file-to-accept-only-image-files
// https://www.cluemediator.com/validate-image-content-in-reactjs
import { formatBytes } from './formatBytes'

const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'] as const
const maxSize = 5 * 1024 * 1024

const errors = {
  invalidContentType: {
    type: 'file/invalid-content-type',
    message: `Invalid content types. The allowed content types are ${allowedTypes.map((type) => type.split('/')[1]).join(', ')}.`,
  },
  maxSizeExceeded: {
    type: 'file/maximum-size-exceeded',
    message: `The file exceeds the allowed size of ${formatBytes(maxSize)}.`,
  },
  invalidFile: {
    type: 'file/invalid-file',
    message: 'Invalid file content',
  },
}

export async function validateImage(file: File) {
  if (!allowedTypes.some((type) => type === file.type)) {
    return [null, errors.invalidContentType]
  }
  if (file.size > maxSize) return [null, errors.maxSizeExceeded]
  try {
    const dataUrl = await readFileAsync(file)
    return [dataUrl, null]
  } catch (error) {
    return [null, error]
  }
}

function readFileAsync(file: File) {
  return new Promise<string>((resolve, reject) => {
    const dataUrl = URL.createObjectURL(file)
    const img = new Image()
    img.src = dataUrl
    img.onload = () => {
      resolve(dataUrl)
    }
    img.onerror = () => {
      reject(errors.invalidFile)
    }
  })
}
