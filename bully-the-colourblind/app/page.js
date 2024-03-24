'use client'

import React from 'react';
import styles from '../app/page.module.css';
import ColourWheel from './colourWheel';
import { BrowserRouter  as Router, Routes, Route} from 'react-router-dom';

export default function Home() {

  return (
    <main>
      <ColourWheel />
    </main>
  );
}