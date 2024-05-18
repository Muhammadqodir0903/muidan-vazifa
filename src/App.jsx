import { FormatAlignCenter, FormatAlignJustify, FormatAlignLeft, FormatAlignRight } from '@mui/icons-material'
import { ToggleButton } from '@mui/material'
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BarChart } from '@mui/x-charts/BarChart';
import './App.css'

function App() {
  const [activeClass, setActiveClass] = useState('');
 
  return (
    <div className='App'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IMR
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div className="wrap">
   <div className="wrap__inner">
   <p className={activeClass ||'class4'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ipsa excepturi repellat ducimus, obcaecati voluptatem saepe, ipsum inventore rem voluptate impedit. Veritatis velit rerum recusandae possimus hic dolorem, debitis qui?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima odit aliquam, excepturi, modi dolorum esse vero eveniet totam tempora ab blanditiis? Perferendis illum rem esse odit, in nisi tempora magnam?</p>
   </div>
    </div>
      <div className="btns">
      
        <ToggleButton className='button' onClick={() => setActiveClass('class1')}  value="left" aria-label="left aligned">
          <FormatAlignLeft  className='btn'/>
        </ToggleButton>
        <ToggleButton className='button' onClick={() => setActiveClass('class2')} value="center" aria-label="left aligned">
          <FormatAlignCenter  className='btn'/>
        </ToggleButton>
        <ToggleButton className='button' onClick={() => setActiveClass('class3')} value="right" aria-label="left aligned">
          <FormatAlignRight  className='btn'/>
        </ToggleButton>
        <ToggleButton className='button' onClick={() => setActiveClass('class4')} value="justify" aria-label="left aligned">
          <FormatAlignJustify  className="btn"/>
        </ToggleButton>
      </div>
      <h1 align="center">BarChart</h1>
      <hr />
      <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    className='chart' />
    </div>
  )
}

export default App