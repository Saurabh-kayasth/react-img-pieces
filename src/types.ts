export interface AnimationsComponentProps {
  imgSrc: string
  height: number
  width: number
  pieces: number
}

export interface PieceDimensions {
  width: number
  height: number
}

export interface GridDimensions {
  rows: number
  columns: number
}

// eslint-disable-next-line no-shadow
export enum PiecePosition {
  TOP_LEFT = 'top_left',
  TOP_RIGHT = 'top_right',
  BOTTOM_LEFT = 'bottom_left',
  BOTTOM_RIGHT = 'bottom_right',
  LEFT = 'left',
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  CENTER = 'center'
}

export interface PieceStyles {
  backgroundPosition: string
  backgroundSize: string
}
