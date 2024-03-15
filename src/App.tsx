import { Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import './App.css'

export function Header() {
  return (
    <Grid id='nav-bar' container spacing={3} justifyContent="center" alignItems="center" direction="row">
      <Grid item xs={9}>
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

export function Data() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Villager</TableCell>
            <TableCell>Loves</TableCell>
            <TableCell>Likes</TableCell>
            <TableCell>Neutral</TableCell>
            <TableCell>Dislikes</TableCell>
            <TableCell>Hates</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}

export default function Home() {
  return(
    <>
      <Header />
      <Data />
    </>
  )
}


