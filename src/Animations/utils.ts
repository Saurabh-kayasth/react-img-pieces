import {
  type PieceDimensions,
  type GridDimensions,
  PiecePosition,
  type PieceStyles
} from '../types'

export function calculateGridDimensions(
  numberOfPieces: number
): GridDimensions {
  const idealGridSize = Math.ceil(Math.sqrt(numberOfPieces))

  let columns = idealGridSize
  let rows = Math.ceil(numberOfPieces / columns)

  while (columns * rows > numberOfPieces) {
    columns -= 1
    rows = Math.ceil(numberOfPieces / columns)
  }

  return { rows, columns }
}

export function calculatePieceDimensions(
  width: number,
  height: number,
  numberOfPieces: number
): PieceDimensions {
  const { rows, columns } = calculateGridDimensions(numberOfPieces)

  const pieceWidth = width / rows
  const pieceHeight = height / columns

  return { width: pieceWidth, height: pieceHeight }
}

export function calculatePiecePosition(
  index: number,
  numberOfPieces: number,
  gridDimensions: GridDimensions
): PiecePosition | null {
  if (index < 0 || index >= numberOfPieces) {
    console.error('Invalid index.')
    return null
  }

  const row = Math.floor(index / gridDimensions.rows)
  const col = index % gridDimensions.rows

  const isTop = row === 0
  const isBottom = row === gridDimensions.columns - 1
  const isLeft = col === 0
  const isRight = col === gridDimensions.rows - 1

  if (isTop && isLeft) return PiecePosition.TOP_LEFT
  if (isTop && isRight) return PiecePosition.TOP_RIGHT
  if (isBottom && isLeft) return PiecePosition.BOTTOM_LEFT
  if (isBottom && isRight) return PiecePosition.BOTTOM_RIGHT
  if (isLeft) return PiecePosition.LEFT
  if (isTop) return PiecePosition.TOP
  if (isRight) return PiecePosition.RIGHT
  if (isBottom) return PiecePosition.BOTTOM

  return PiecePosition.CENTER
}

export function calculatePieceStyles(
  index: number,
  width: number,
  height: number,
  numberOfPieces: number
): PieceStyles | null {
  const gridDimensions = calculateGridDimensions(numberOfPieces)

  const pieceDimensions = calculatePieceDimensions(
    width,
    height,
    numberOfPieces
  )

  const { rows: columns, columns: rows } = gridDimensions
  const { width: pieceWidth, height: pieceHeight } = pieceDimensions

  const row = Math.floor(index / gridDimensions.rows)
  const col = index % gridDimensions.rows

  const backgroundSizeX = pieceWidth * columns
  const backgroundSizeY = pieceHeight * rows
  const backgroundSize = `${backgroundSizeX}px ${backgroundSizeY}px`

  const shiftXBy = columns > 1 ? 100 / (columns - 1) : 100
  const shiftYBy = rows > 1 ? 100 / (rows - 1) : 100
  const backgroundPositionX = col * shiftXBy
  const backgroundPositionY = row * shiftYBy
  const backgroundPosition = `${backgroundPositionX}% ${backgroundPositionY}%`

  return {
    backgroundPosition,
    backgroundSize
  }
}
