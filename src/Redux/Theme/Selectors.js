import { createSelector } from '@reduxjs/toolkit'

export const SLICE_NAME = 'theme'

const select = state => state[SLICE_NAME]
const modeSelect = state => state[SLICE_NAME].mode

export const getThemeModeSelector = createSelector(modeSelect, mode => mode)
