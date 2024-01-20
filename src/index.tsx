/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import styles from './Animations/styles.module.css'
import {
  calculateGridDimensions,
  calculatePieceDimensions,
  calculatePiecePosition,
  calculatePieceStyles
} from './Animations/utils'
import { type AnimationsComponentProps } from './types'

export const ImagePiece = (
  props: AnimationsComponentProps
): React.JSX.Element => {
  const {
    imgSrc,
    height: CONTAINER_HEIGHT,
    width: CONTAINER_WIDTH,
    pieces: PIECES,
    animationDirection = 'normal',
    animationDuration = '1s',
    animationIterationCount = 'infinite'
  } = props

  function createNumberArray(): number[] {
    const result: number[] = []
    for (let i = 1; i <= PIECES; i += 1) {
      result.push(i)
    }
    return result
  }

  const pieceDimensions = calculatePieceDimensions(
    CONTAINER_WIDTH,
    CONTAINER_HEIGHT,
    PIECES
  )

  return (
    <div>
      <div
        className={styles.container}
        style={{ width: CONTAINER_WIDTH, height: CONTAINER_HEIGHT }}
      >
        {createNumberArray().map((item, index) => {
          const { width, height } = pieceDimensions

          return (
            <div
              key={item}
              style={{
                width,
                height,
                animationIterationCount,
                animationDuration,
                animationDirection,
                backgroundImage: `url(${imgSrc})`,
                ...calculatePieceStyles(
                  index,
                  CONTAINER_WIDTH,
                  CONTAINER_HEIGHT,
                  PIECES
                )
              }}
              className={`${styles.piece} ${
                styles[
                  `piece_${calculatePiecePosition(
                    index,
                    PIECES,
                    calculateGridDimensions(PIECES)
                  )}`
                ]
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}
