import React, { Dispatch, SetStateAction } from 'react'

import { Box, Button, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TextField, Select, MenuItem, InputLabel } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import './App.css'

import { Villager } from './models/Villager';
import { convertVillagersJSONToVillagerType, filterVillagers } from './main';

export default function Home() {
  return(
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid>
          <Content />
        </Grid>
      </Grid>
    </>
  )

  function Content() {
    const [search, setSearch] = React.useState('');
    const [category, setCategory] = React.useState('loves');

    return(
      <>
        <Grid item xs={12}>
          <Search 
            search={search} 
            onSearchTextChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
          />
        </Grid>
        <Grid item xs={12} sx={{width:'99vw'}}>
          <DisplayData search={search} category={category} />
        </Grid>
      </>  
    )
  }

  function Header() {
    return (
      <Grid id='nav-bar' container spacing={2} justifyContent="space-between" alignItems="center" sx={{padding:1}}>
        <Grid item xs={8} >
          <h1 id='nav-bar-h1'>Stardew Gifts Finder</h1>
        </Grid>
        <Grid item>
          <Button>
            <HomeRoundedIcon />
            Home
          </Button>
        </Grid>
        <Grid item>
          <Button>
            <FormatListBulletedRoundedIcon />
            All Villagers
          </Button>
        </Grid>
        <Grid item>
          <Button>
            <SearchRoundedIcon />
            Search
          </Button>
        </Grid>
      </Grid>
    )
  }

  function Search(
    {search, category, onSearchTextChange, onCategoryChange} : 
    {search : string, category: string, onSearchTextChange : Dispatch<SetStateAction<string>>, onCategoryChange : Dispatch<SetStateAction<string>>}) {
    // TODO: customized input base (https://mui.com/material-ui/react-text-field)
    return (
      <Box 
        component="form" 
        sx={{margin:1, height:'8vh', paddingBottom:3}}
      >
          <TextField 
            id="outlined-basic" 
            label="Search" 
            variant="outlined" 
            onChange={(e) => onSearchTextChange(e.target.value)} 
            value={search}
            helperText="Enter an item name"
            sx={{paddingRight:1, width:'77em'}} />      
          <Select
            defaultValue={'loves'}
            value={category}
            label="Category"
            onChange={(e) => onCategoryChange(e.target.value)}
            sx={{width:'10%'}} 
          >
            <InputLabel sx={{padding:1}}>Category</InputLabel>
            <MenuItem value={'loves'}>Loves</MenuItem>
            <MenuItem value={'likes'}>Likes</MenuItem>
            <MenuItem value={'neutral'}>Neutral</MenuItem>
            <MenuItem value={'dislikes'}>Dislikes</MenuItem>
            <MenuItem value={'hates'}>Hates</MenuItem>
          </Select>
      </Box>
    )
  }  

  function createDataCell(items: string[] | null) {
    const cells = []
    if (items != null) {
      for (const i of items) {
        cells.push(
          <li>{i}</li>
        )
      }
    }
  
    return (
      <TableCell size='small'>
        {cells}
      </TableCell>
    )
  }
  
  function createDataRow(villager : Villager) {
    if (villager != null) {
      if (villager.name != "") {
        return (
        <TableRow key={villager.name}>
          <TableCell>
            <h2 style={{margin:'0'}}>
              {villager.name}
            </h2>
            <span>
              {villager.birthday}
            </span>
          </TableCell>
          {createDataCell(villager.loves)}
          {createDataCell(villager.likes)}
          {createDataCell(villager.neutral)}
          {createDataCell(villager.dislikes)}
          {createDataCell(villager.hates)}
        </TableRow>)
      }
    }
  }
    
  function DisplayData({search, category} : {search : string, category: string}) {
    let data = [];
    search != null ? data = filterVillagers(search, category) : data = convertVillagersJSONToVillagerType()

    console.log("data = ", data)

    return (
      <TableContainer sx={{width:'99%', alignContent:'center', margin:1}} component={Paper}>
        <Table size='small' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell variant='head'>Villager</TableCell>
              <TableCell variant='head'>Loves</TableCell>
              <TableCell variant='head'>Likes</TableCell>
              <TableCell variant='head'>Neutral</TableCell>
              <TableCell variant='head'>Dislikes</TableCell>
              <TableCell variant='head'>Hates</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { data ? data.map(villager => createDataRow(villager)) : null }
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}