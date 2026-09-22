import React from 'react';
import ReactDOM from 'react-dom';
import Bingo from 'bingo-board';
import { freshwoodPhrases } from './phrases/freshwood-phrases';
import getOrCreateBoardSeed from './utils/board-seed';
import './style/index.css';

const seed = getOrCreateBoardSeed();

ReactDOM.render(
  <React.StrictMode>
    <Bingo
      phrases={freshwoodPhrases}
      seed={seed}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
