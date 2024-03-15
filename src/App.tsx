import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import './App.css'

import villagersJSON from './assets/data/villagers.json' // import villagers data

const useStyles = makeStyles({
  table: {
    "& .MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)"
    }
  }
});

export function Header() {
  return (
    <Grid id='nav-bar' container spacing={2}>
      <Grid item xs={11} >
        <h1 id='nav-bar-h1'>Stardew Gifts Finder</h1>
      </Grid>
      <Grid item>
        <Button>
          <HomeRoundedIcon />
          Home
          </Button>
      </Grid>
    </Grid>
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
    <TableCell size='small' style={{maxWidth:'100px'}}>
      {cells}
    </TableCell>
  )
}

function createDataRow() {
  const rows = []
  for (const villager of villagersJSON) {
    if (villager.name != "") {
      rows.push(
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
          {createDataCell(villager.loves)}
        </TableRow>
      )
    }
  }
  return (rows)
}

export function DisplayData() {
  const classes = useStyles();
  return (
    <TableContainer sx={{width:'99%', alignContent:'center', margin:1}} component={Paper}>
      <Table size='small' className={classes.table}>
        <TableHead>
          <TableRow style={{backgroundColor:'#E5C287'}}>
            <TableCell>Villager</TableCell>
            <TableCell>Loves</TableCell>
            <TableCell>Likes</TableCell>
            <TableCell>Neutral</TableCell>
            <TableCell>Dislikes</TableCell>
            <TableCell>Hates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {createDataRow()}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default function Home() {
  return(
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <DisplayData />
        </Grid>
      </Grid>
    </>
  )
}


